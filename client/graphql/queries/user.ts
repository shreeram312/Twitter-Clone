const verifyUserGoogleTokenQuery = `#graphql
    query VerifyUserGoogleToken($token:String!){
    verifyGoogleToken(token:$token)
    }
`;
