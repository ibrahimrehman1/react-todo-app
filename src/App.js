import React, { useState } from "react";

// MUI Components
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

// TODO Component
export default function TODO() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);

  const addTask = () => {
    if (!value) {
      alert("Please Enter a Task!");
      return;
    }

    if (arr.includes(value)) {
      alert("Task already added to list!");
    } else {
      setArr(arr.concat([value]));
      setValue("");
    }
  };

  const delete_ = (index) => {
    setArr(arr.filter((val, ind) => index !== ind));
  };

  const edit = (index) => {
    let value = prompt("Enter New Task: ");

    if (!value) {
      alert("Please Enter a Task!");
      return;
    }
    if (arr.includes(value)) {
      alert("Task already added to list!");
      return;
    } else {
      setArr(
        arr.map((val, ind) => {
          if (ind === index) {
            return value;
          }

          return val;
        })
      );
    }
  };

  return (
    <>
      <h1
        color="primary"
        style={{
          textAlign: "center",
          background: "#f50057",
          marginTop: "0px",
          fontSize: "2.5rem",
          padding: "0.1em",
        }}
      >
        TODO APP
      </h1>
      <div className="main">
        <div style={{ display: "inline-block" }}>
          <TextField
            id="standard-basic"
            label="Enter Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            onClick={addTask}
            style={{
              backgroundColor: "#f50057",
              borderWidth: "0px",
              borderRadius: "3px",
              fontSize: "0.875rem",
              padding: "8px 18px",
              color: "white",
              verticalAlign: "bottom",
            }}
            className="btn"
          >
            ADD
          </button>
          <ul
            style={{
              listStyleType: "square",
              listStylePosition: "inside",
              paddingLeft: "0px",
              textAlign: "start",
            }}
          >
            {arr.map((obj, index) => {
              return (
                <li key={index} style={{ marginBottom: "20px" }}>
                  <h4 style={{ display: "inline-block" }}>{obj}</h4>
                  <div style={{ display: "inline-block" }}>
                    <ButtonGroup style={{ paddingLeft: "20px" }}>
                      <button
                        onClick={() => edit(index)}
                        style={{
                          backgroundColor: "#f50057",
                          borderWidth: "0px",
                          borderRadius: "3px",
                          fontSize: "0.875rem",
                          padding: "8px 18px",
                          color: "white",
                        }}
                        className="btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => delete_(index)}
                        style={{
                          backgroundColor: "dodgerblue",
                          borderWidth: "0px",
                          borderRadius: "3px",
                          fontSize: "0.875rem",
                          padding: "8px 18px",
                          color: "white",
                        }}
                        className="btn"
                      >
                        Delete
                      </button>
                    </ButtonGroup>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
