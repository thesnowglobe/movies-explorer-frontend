import "./Register.css";
import React from "react";

import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";

const Register = () => {
  return (
    
      <AuthForm
        formName="register"
        formMessage="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkPath="/signin"
      >
        <label className="auth-form__label">
          Имя
        </label>
        <input
          className="auth-form__input"
          type="text"
          name="register-name"
          id="register-name"
          required
        />
        <Error
          className="auth-form__error"
          errorMessage=""
          id="register-error"
        />

        <label className="auth-form__label">
          E-mail
        </label>
        <input
          className="auth-form__input"
          type="email"
          name="register-email"
          id="register-email"
          required
        />
        <Error
          className="auth-form__error"
          errorMessage=""
          id="register-email-error"
        />

        <label className="auth-form__label">
          Пароль
        </label>
        <input
          className="auth-form__input"
          type="password"
          name="register-password"
          id="register-password"
          required
        />
        <Error
          className="auth-form__error"
          errorMessage=""
          id="register-password-error"
        />
      </AuthForm>
    
  );
};

export default Register;