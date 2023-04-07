import { useState } from "react";
import { Form } from "react-router-dom";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.component";
import FormInput from "../form-input/form-input.component";
import { signInEmailAndPassword } from "../../utils/firebase/firebase.component";
import "./sign-in-form-style.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { googleSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
const defaultFormFileds = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const setDefaultFields = () => {
    setFormFields(defaultFormFileds);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInEmailAndPassword(email, password);

      setDefaultFields();
    } catch (error) {
      switch (error) {
        case "auth/wrong-password":
          alert("incorrect password and email");
          break;
        case "auth/user-not-found":
          alert("email does not exist");
          break;

        default:
          console.log(error);
      }
    }
  };
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
