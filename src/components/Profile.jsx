import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Toast from "toast-me";

const Container = styled.div`
  height: 800px;
  padding-bottom: 100px;
`;

const Profile = () => {
  const [getState, setStates] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  if (window.sessionStorage.getItem("logged") !== "X") {
    window.open("/login", "_self");
  }
  window.sessionStorage.getItem("user");

  function handleForm() {
    var getitem = getState.item;
    if (
      getitem.password === "" ||
      getitem.password === undefined ||
      getitem.cpassword === "" ||
      getitem.cpassword === undefined
    ) {
      Toast("Inserisci Password", "error");
      return false;
    }
    if (getitem.password !== getitem.cpassword) {
      Toast("Password e Conferma differenti", "error");
      return false;
    }
    var link =
      "https://ts-mobile.herokuapp.com/api/edituser/" +
      getitem.name +
      "~" +
      getitem.login +
      "~" +
      getitem.email +
      "~" +
      getitem.password;

    axios.post(link).then(
      (result) => {
        setStates({
          isLoaded: true
        });
        Toast("Dati Aggiornati", {
          position: "bottom",
          class: "success-toast"
        });
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        Toast("Error", "error");
        setStates({
          isLoaded: true,
          error
        });
      }
    );
  }

  function onTodoChange(index, value) {
    var getitem = getState.item;
    if (index === "1") getitem.name = value;
    else if (index === "2") getitem.email = value;
    else if (index === "3") getitem.password = value;
    else if (index === "4") getitem.cpassword = value;
    setStates({ item: getitem });
  }

  useEffect(() => {
    var email = window.sessionStorage.getItem("user");
    var link = "https://ts-mobile.herokuapp.com/api/getuser/" + email;
    axios.get(link).then(
      (result) => {
        setStates({
          isLoaded: true,
          item: result.data[0]
        });
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        setStates({
          isLoaded: true,
          error
        });
      }
    );
  });

  const { error, isLoaded } = getState;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container fluid style={{ overflowY: "scroll" }}>
        <div id="formcont">
          <div id="someForm">
            <label className="labelfield" htmlFor="name">
              Nome:
            </label>
            <input
              value={getState.item.name}
              className="inputfield"
              name="name"
              type="text"
              onChange={(e) => onTodoChange("1", e.target.value)}
            />
            <br />
            <br />
            <label className="labelfield" htmlFor="surname">
              Username:
            </label>
            <input
              value={getState.item.login}
              className="inputfieldUser"
              type="email"
              name="surname"
            />
            <br />
            <br />
            <label className="labelfield" htmlFor="email">
              Email:
            </label>
            <input
              value={getState.item.email}
              className="inputfield"
              type="email"
              name="email"
              onChange={(e) => onTodoChange("2", e.target.value)}
              required
            />
            <br />
            <br />
            <label className="labelfield" htmlFor="passw">
              New Password:
            </label>
            <input
              className="inputfield"
              type="password"
              name="passw"
              onChange={(e) => onTodoChange("3", e.target.value)}
              required
            />
            <br />
            <br />
            <label className="labelfield" htmlFor="cpassw">
              Confirm New Password:
            </label>
            <input
              className="inputfield"
              type="password"
              name="cpassw"
              onChange={(e) => onTodoChange("4", e.target.value)}
              required
            />
            <br />
            <br />
            <button name="done" className="sendfield" onClick={handleForm}>
              Salva
            </button>
          </div>
        </div>
      </Container>
    );
  }
};

export default Profile;
