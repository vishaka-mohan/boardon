import { useEffect, useState, React, useRef } from "react";
import axios from "axios";
import working_woman from "./working_woman.png";

function AllDocs() {
  const [backendData, setBackendData] = useState([{}]);
  const url1 = process.env.REACT_APP_DOCUMENTS_SERVICE + "/hr/getDocs" || "http://localhost:5000/hr/getDocs"
  console.log(url1)
  useEffect(() => {
    fetch(url1, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      credentials: "include",
    })
      .then(
        (response) => {
          return response.json();
        }
        //console.log(response)}
      )
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div
      className="AllDocs"
      style={{ position: "absolute", top: "12%", left: "25%" }}
    >
      <h1 style={{ color: "#4C00FF" }}>All employees</h1>

      {typeof backendData.allEmp === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <table style={{ width: "150%" }}>
            <tr>
              <th>Name</th>
              <th>Username</th>
            </tr>
            {backendData.allEmp.map((d) => {
              return (
                <tr key={d.eid}>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>
                    <a
                      href={"/hr/" + d.username}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Docs
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default AllDocs;
