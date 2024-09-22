"use client";
import useLoginModal from "@/hooks/LoginModal";
import Input from "../Input";

import React, { useCallback, useState } from "react";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/RegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registermodal = useRegisterModal();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [loading, setloading] = useState(false);

  const onToggle = useCallback(() => {
    registermodal.onClose();
    loginModal.onOpen();
  }, []);

  const onSubmit = useCallback(async () => {
    try {
      setloading(true);

      //todo add register abd login

      registermodal.onClose();
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
        placeholder="name"
        onChange={(e) => {
          setname(e.target.value);
        }}
        value={name}
        disabled={loading}
      />

      <Input
        placeholder="Username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
        value={username}
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
        Already Have an account
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline mx-2"
        >
          Signin
        </span>
      </p>
    </div>
  );
  return (
    <div>
      <Modal
        isOpen={registermodal.isOpen}
        body={bodyCount}
        disabled={loading}
        title="Create an account"
        actionLabel="Register"
        onClose={registermodal.onClose}
        onSubmit={onSubmit}
        footer={footercontent}
      />
    </div>
  );
};

export default RegisterModal;
