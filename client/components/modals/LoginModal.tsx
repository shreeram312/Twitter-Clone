"use client";
import useLoginModal from "@/hooks/LoginModal";
import Input from "../Input";

import React, { useCallback, useState } from "react";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/RegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registermodal = useRegisterModal();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registermodal.onOpen();
  }, [loginModal, registermodal]);
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

  const footercontent = (
    <div className="text-neutral-400 text-center ">
      <p>
        Don't have an account.?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline mx-2"
        >
          Register
        </span>
      </p>
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
        footer={footercontent}
      />
    </div>
  );
};

export default LoginModal;
