import React from "react";
import "./App.css";
import Container from "reactstrap/lib/Container";
import PersonalDetails from "./PersonalDetails";
import { IPersonState } from "./State";

function App() {
  const defaultPerson: IPersonState = {
    FirstName: "",
    LastName: "",
    Address1: "",
    Address2: null,
    Town: "",
    Country: "",
    PhoneNumber: "",
    Postcode: "",
    DateOfBirth: new Date().toISOString().substring(0, 10),
    PersonId: "",
  };
  return (
    <Container>
      <PersonalDetails DefaultState={defaultPerson} />
    </Container>
  );
}

export default App;
