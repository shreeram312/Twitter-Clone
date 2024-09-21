"use client";
import useLoginModal from "@/hooks/LoginModal";
import Input from "../Input";

import React, { useCallback, useState } from "react";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setloading(true);

      //todo add login

      loginModal.onClose();
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }, [loginModal]);

  const bodyCount = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="E-mail"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        value={email}
        disabled={loading}
      />

      <Input
        placeholder="Password "
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        value={password}
        disabled={loading}
      />
    </div>
  );
  return (
    <div>
      <Modal
        isOpen={loginModal.isOpen}
        body={bodyCount}
        disabled={loading}
        title="Login"
        actionLabel="Signin"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LoginModal;
