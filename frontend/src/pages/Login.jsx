import React from "react";
import Header from "../components/shared/Header";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <section
        className="w-full min-h-[100vh] bg-cover bg-fixed flex justify-center items-center"
        style={{ backgroundImage: "url('sign.jpg')" }}
      >
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
