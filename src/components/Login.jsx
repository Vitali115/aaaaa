import React, { useState } from "react";
import axios from "axios";
import Toast from "toast-me";
import Button from "react-bootstrap-button-loader";

const Login = (props) => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getLoading, setLoading] = useState(false);
  const [getCheck, setCheck] = useState(false);

  if (window.sessionStorage.getItem("logged") === "X") {
    window.open("/", "_self");
  }

  function inputChangedHandler(event, isPassword) {
    if (isPassword === "X") {
      setPassword(event.currentTarget.value);
    } else {
      setEmail(event.currentTarget.value.toLowerCase());
    }
  }

  async function getLogin() {
    var email = getEmail;
    var password = getPassword;
    var link =
      "https://ts-mobile.herokuapp.com/api/login/" + email + "~" + password;
    var res = axios.get(link).then((result) => {
      res = result;
      try {
        if (res.data[0] !== undefined && res.data[0].login === email) {
          window.sessionStorage.setItem("logged", "X");
          window.sessionStorage.setItem("user", email);
          setCheck(true);
          setLoading(false);
          props.history.push("/");
          return getCheck;
        } else {
          Toast("Incorrect user or password", "error");
          window.sessionStorage.setItem("logged", "");
          setCheck(false);
          setLoading(false);
          return getCheck;
        }
      } catch {
        Toast("Incorrect user or password", "error");
        window.sessionStorage.setItem("logged", "");
        setCheck(false);
        setLoading(false);
        return getCheck;
      }
    });
    return res;
  }

  function handleSubmit() {
    setLoading(true);
    var email = getEmail;
    var password = getPassword;
    if (email === "" || password === "") {
      Toast("Missing user or password", "error");
      setCheck(false);
      setLoading(false);
    } else {
      window.sessionStorage.setItem("logged", "X");
      window.sessionStorage.setItem("user", email);
      setCheck(true);
      props.history.push("/");
      return getCheck;
    }
    getLogin();
    return false;
  }

  return (
    <div>
      <div className="backgroundLogin"> </div>
      <div className="LoginBox">
        <div className="mercury-logologin" />
        <form>
          <div className="UserLogin">
            <label htmlFor="userName" className="control-Element">
              Username
            </label>
            <input
              type="text"
              className="login-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(event) => inputChangedHandler(event, "")}
            />
          </div>
          <div className="UserLogin">
            <label htmlFor="userpassword" className="control-Element">
              Password
            </label>
            <input
              type="password"
              className="login-control"
              id="password"
              aria-describedby="passwordHelp"
              onChange={(event) => inputChangedHandler(event, "X")}
            />
          </div>
          <Button
            className="submitLogin"
            loading={getLoading}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Login;
