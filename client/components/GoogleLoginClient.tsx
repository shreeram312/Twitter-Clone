"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";

const GoogleLoginClient = () => {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {},
  []);
  return (
    <div className="">
      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
};

export default GoogleLoginClient;
