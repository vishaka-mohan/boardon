import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

import { useState } from "react";
import axios from "axios";
import bell_icon from "./bell_icon.png";
import user_icon from "./user_icon.png";
import message_icon from "./message_icon.png";
import { useNavigate } from "react-router-dom";

const host = process.env.FRONTEND || "http://localhost:3000"


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "55%",

    position: "absolute",
    overflowX: "hidden",
    overflowY: "hidden",
  },
};

Modal.setAppElement("#root");

function HrDashboard() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //functions to handle submit
  const [docs, setDocs] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleGoSubmit = async () => {
    if (searchQuery !== "") {
      navigate(`/emp/resources/search/${searchQuery}`);
    }
  };

  const handleClick = async (e) => {
    console.log("hellp");
    // const logoutAPI = process.env.REACT_APP_AUTH_SERVICE+"/auth/logout" || 'http://localhost:3002/auth/logout'
    // axios
    //   .delete(logoutAPI, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.status === "success") {
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => console.log(err.response.data));
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="HrDashboard">
      <div className="navbar-bg">
        <div
          className="blue-btn"
          style={{
            backgroundColor: "#B3FF00",
            top: 25,
            fontSize: 24,
            fontFamily: "Arial",
            color: "black",
          }}
        >
          BoardOn
        </div>

        <div className="search" style={{ left: "15%", top: "40%" }}>
          <input
            type="text"
            className="searchTerm"
            placeholder="Search Documentation "
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            value={searchQuery}
          />
          <button
            type="submit"
            onClick={handleGoSubmit}
            style={{
              fontSize: 15,
              width: "auto",
              borderRadius: "10px",
              background: "#4C00FF",
              color: "white",
              cursor: "pointer",
              border: "none",
              textAlign: "center",
            }}
          >
            Search
          </button>
        </div>
        <img
          src={user_icon}
          alt="bell"
          style={{
            position: "absolute",
            top: "35%",
            left: "95%",
            width: "30px",
            height: "30px",
          }}
          onClick={handleClick}
        />

        <img
          src={bell_icon}
          alt="bell"
          style={{
            position: "absolute",
            top: "35%",
            left: "91%",
            width: "30px",
            height: "30px",
          }}
        />

        <img
          src={message_icon}
          alt="bell"
          style={{
            position: "absolute",
            top: "34.5%",
            left: "87%",
            width: "40px",
            height: "40px",
          }}
        />
      </div>

      <div class="container" id="navbar" style={{ top: "10%" }}>
        <nav class="nav">
          <ul>
            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/generateCredentials" ? (
                <a href={"/hr/generateCredentials"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Credentials
                  </span>
                </a>
              ) : (
                <a href={"/hr/generateCredentials"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Credentials
                  </span>
                </a>
              )}
            </li>

            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/hrDashboard" ? (
                <a href={"/hr/hrDashboard"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Checklist
                  </span>
                </a>
              ) : (
                <a href={"/hr/hrDashboard"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Checklist
                  </span>
                </a>
              )}
            </li>

            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/getDocs" ? (
                <a href={"/hr/getDocs"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    All employees
                  </span>
                </a>
              ) : (
                <a href={"/hr/getDocs"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    All employees
                  </span>
                </a>
              )}
            </li>
            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/allPolls" ? (
                <a href={"/hr/allPolls"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Polls
                  </span>
                </a>
              ) : (
                <a href={"/hr/allPolls"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Polls
                  </span>
                </a>
              )}
            </li>
            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/viewAllresults" ? (
                <a href={"/hr/viewAllresults"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Polls Dashboard
                  </span>
                </a>
              ) : (
                <a href={"/hr/viewAllresults"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Polls Dashboard
                  </span>
                </a>
              )}
            </li>
            <li>
              {window.location.href.split("?")[0] ===
              host+"/hr/resources" ? (
                <a href={"/hr/resources"} className="nav_link active">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Resources
                  </span>
                </a>
              ) : (
                <a href={"/hr/resources"} className="nav_link">
                  <ion-icon
                    name="chatbubbles-outline"
                    class="nav_icon"
                  ></ion-icon>
                  <span class="nav_name" style={{ fontSize: 16 }}>
                    Resources
                  </span>
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <img
        src={user_icon}
        alt="bell"
        style={{
          position: "absolute",
          top: "4%",
          left: "95%",
          width: "30px",
          height: "30px",
        }}
      />
      <img
        src={bell_icon}
        alt="bell"
        style={{
          position: "absolute",
          top: "4%",
          left: "91%",
          width: "30px",
          height: "30px",
        }}
      />

      <img
        src={message_icon}
        alt="bell"
        style={{
          position: "absolute",
          top: "3.5%",
          left: "87%",
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
}

export default HrDashboard;
