import React, { useState } from "react";
import styled from "styled-components";

// MUI Components
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

// Styled Components
const Heading1 = styled.h1`
  text-align: center;
  background: #f50057;
  margin-top: 0px;
  font-size: 2.5rem;
  padding: 0.1em;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.add ? "#f50057" : props.edit ? "dodgerblue" : "#f50057"};
  border-width: 0px;
  border-radius: 3px;
  font-size: 0.875rem;
  color: white;
  width: 80px;
  height: 40px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  padding-left: 0px;
  text-align: start;
  font-size: 1.2rem;
  width: 350px;

  & > li {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const BtnGroup = styled(ButtonGroup)`
  margin-left: 20px;
  min-width: 160px;
`;

const Main = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

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
      <Heading1>TODO APP</Heading1>
      <Main>
        <Container>
          <TextField
            id="standard-basic"
            label="Enter Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            size="small"
          />
          <Button onClick={addTask} add>
            ADD
          </Button>
        </Container>

        <List>
          {arr.map((obj, index) => {
            return (
              <li key={index}>
                <span>{obj}</span>
                <BtnGroup>
                  <Button onClick={() => edit(index)} edit>
                    Edit
                  </Button>
                  <Button onClick={() => delete_(index)} delete>
                    Delete
                  </Button>
                </BtnGroup>
              </li>
            );
          })}
        </List>
      </Main>
    </>
  );
}
