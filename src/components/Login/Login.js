import "./Login.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";

const Login = () => {
  return (
    
      <AuthForm
        formName="login"
        formMessage="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkPath="/signup"
      >
        <label className="auth-form__label">
          E-mail
        </label>
        <input
          className="auth-form__input"
          type="email"
          name="login-email"
          id="login-email"
          required
        />
        <Error
          className="auth-form__error"
          errorMessage=""
          id="login-email-error"
        />
        <label className="auth-form__label">
          Пароль
        </label>
        <input
          className="auth-form__input"
          type="password"
          name="login-password"
          id="login-password"
          required
        />
        <Error
          className="auth-form__error"
          errorMessage=""
          id="login-password-error"
        />
      </AuthForm>
    
  );
};

export default Login;