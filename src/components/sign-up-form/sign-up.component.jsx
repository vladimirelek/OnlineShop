import { useState } from "react";
import { Form } from "react-router-dom";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.component";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form-style.scss";
import Button from "../button/button-component";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFields;

  const setDefaultFields = () => {
    setFormFields(defaultFormFileds);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setDefaultFields();
    } catch (error) {
      if (error.code === "auh/email-already in use") {
        alert("Cannot create a user");
      }
    }
  };
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="displayName"
          value={displayName}
          onChange={onHandleChange}
          type="text"
          required
        />
        <FormInput
          label="Email"
          name="email"
          value={email}
          onChange={onHandleChange}
          type="email"
          required
        />

        <FormInput
          label="Password"
          name="password"
          value={password}
          onChange={onHandleChange}
          type="password"
          required
        />
        <FormInput
          label="ConfirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandleChange}
          type="password"
          required
        />
        <Button type="submit">Stisni me!</Button>
      </form>
    </div>
  );
};
export default SignUp;
