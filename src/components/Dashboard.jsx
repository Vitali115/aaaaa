import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Vector from "../Components/Vectors/Vector.svg";
import Vector2 from "../Components/Vectors/Vector2.svg";
import Cities from "../Models/Cities";
import "../Styles/Dash.scss";

const Container = styled.div`
  height: 800px;
  /*padding-bottom: 100px;*/
`;

const Dashboard = () => {
  if (window.sessionStorage.getItem("logged") !== "X") {
    window.open("/login", "_self");
  }
  window.sessionStorage.getItem("user");

  return (
    <Container fluid style={{ overflowY: "scroll" }}>
      <div>
        <main className="body-main">
          <section className="sede-cards center">
            {Cities.map((el) => {
              const { sede } = el;
              const { page } = el;
              return (
                <>
                  <section>
                    <div className="sede-card">
                      <h3>{sede}</h3>
                      <p>
                        dal lunedì al venerdì
                        <br />
                        9:00 - 18.00
                      </p>
                      <div className="vector-g">
                        <img className="vector" src={Vector} alt="" />
                        <img className="vector-" src={Vector2} alt="" />
                      </div>
                      <Link to={page}>Procedi</Link>
                    </div>
                  </section>
                </>
              );
            })}
          </section>
        </main>
      </div>
    </Container>
  );
};

export default Dashboard;
