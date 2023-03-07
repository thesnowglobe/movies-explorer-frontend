import "./Login.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Login = (props) => {
  const { onLogin } = props;

  const {
    values,
    handleChange,
    resetForm,
    errors,
    isValid
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({
      email: values.loginEmail,
      password: values.loginPassword
    });
    resetForm();
  };

  return (
    <AuthForm
      formName="login"
      formMessage="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkPath="/signup"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="auth-form__label">
        E-mail
      </label>
      <input
        className={`auth-form__input ${!isValid ? "auth-form__input_invalid" : ""}`}
        type="email"
        name="loginEmail"
        id="login-email"
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={values.loginEmail || ""}
        onChange={handleChange}
        required
      />
      <Error
        className="auth-form__error"
        errorMessage={errors.loginEmail}
        id="login-email-error"
      />
      <label className="auth-form__label">
        Пароль
      </label>
      <input
        className={`auth-form__input ${!isValid ? "auth-form__input_invalid" : ""}`}
        type="password"
        name="loginPassword"
        id="login-password"
        value={values.loginPassword || ""}
        onChange={handleChange}
        required
      />
      <Error
        className="auth-form__error"
        errorMessage={errors.loginPassword}
        id="login-password-error"
      />
    </AuthForm>
  );
};

export default Login;