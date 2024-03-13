import React from "react";
import Header from "../components/shared/Header";
import RegisterForm from "../components/forms/RegisterForm";

const Login = () => {
  return (
    <>
      <Header />
      <section
        className="w-full min-h-[100vh] bg-cover bg-fixed flex justify-center items-center"
        style={{ backgroundImage: "url('sign.jpg')" }}
      >
        <RegisterForm />
      </section>
    </>
  );
};

export default Login;
