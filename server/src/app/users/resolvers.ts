import axios from "axios";
import { prismaClient } from "../../clients/db";
import JWTService from "../../services/jwt";

interface GoogleTokenResult {
  iss?: string; // Issuer
  azp?: string; // Authorized party
  aud?: string; // Audience
  sub?: string; // Subject
  email?: string;
  nbf?: string; // Not before
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  iat?: string; // Issued at
  exp?: string; // Expiration time
  jti?: string; // JWT ID
  alg?: string; // Algorithm used
  kid?: string; // Key ID
  typ?: string; // Type
}

export const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googletoken = token;
    const gooleOauthUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
    gooleOauthUrl.searchParams.set("id_token", googletoken);

    const { data } = await axios.get<GoogleTokenResult>(
      gooleOauthUrl.toString(),
      {
        responseType: "json",
      }
    );

    const user = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      await prismaClient.user.create({
        data: {
          email: data.email as string,
          firstName: data.given_name as string,
          lastName: data.family_name as string,
          profileImageURL: data.picture as string,
        },
      });
    }

    const userInDb = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    console.log(userInDb);
    if (!userInDb) {
      throw new Error("User not found");
    }
    const userToken = JWTService.generateToken(userInDb);
    return userToken;
  },
};

export const resolvers = { queries };
