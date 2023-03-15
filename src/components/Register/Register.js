import "./Register.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Register = (props) => {
  const { onRegister } = props;

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({
      name:  values.registerName,
      email: values.registerEmail,
      password: values.registerPassword
    });
    resetForm();
  };

  return (
    <AuthForm
      formName="register"
      formMessage="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      linkPath="/signin"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="auth-form__label">
        Имя
      </label>
      <input
        className={`auth-form__input ${!isValid ? "auth-form__input_invalid" : ""}`}
        type="text"
        name="registerName"
        id="register-name"
        minLength={2}
        maxLength={30}
        pattern="^[a-zA-Zа-яА-Я\s-]+$"
        value={values.registerName || ""}
        onChange={handleChange}
        required
      />
      <Error
        className="auth-form__error"
        errorMessage={errors.registerName}
        id="register-error"
      />

      <label className="auth-form__label">
        E-mail
      </label>
      <input
        className={`auth-form__input ${!isValid ? "auth-form__input_invalid" : ""}`}
        type="email"
        name="registerEmail"
        id="register-email"
        value={values.registerEmail || ""}
        onChange={handleChange}
        required
      />
      <Error
        className="auth-form__error"
        errorMessage={errors.registerEmail}
        id="register-email-error"
      />

      <label className="auth-form__label">
        Пароль
      </label>
      <input
        className={`auth-form__input ${!isValid ? "auth-form__input_invalid" : ""}`}
        type="password"
        name="registerPassword"
        id="register-password"
        value={values.registerPassword || ""}
        onChange={handleChange}
        required
      />
      <Error
        className="auth-form__error"
        errorMessage={errors.registerPassword}
        id="register-password-error"
      />
    </AuthForm>
  );
};

export default Register;