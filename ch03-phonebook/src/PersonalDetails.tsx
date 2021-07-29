import React from "react";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import { IPersonState } from "./State";

interface IProps {
  DefaultState: IPersonState;
}

class PersonalDetails extends React.Component<IProps, IPersonState> {
  private defaultState: Readonly<IPersonState>;

  private updateBinding = (event: any) => {
    switch (event.target.id) {
      case `firstName`:
        this.setState({ FirstName: event.target.value });
        break;
      case `lastName`:
        this.setState({ LastName: event.target.value });
        break;
      //   case `addr1`:
      //     this.setState({ Address1: event.target.value });
      //     break;
      //   case `addr2`:
      //     this.setState({ Address2: event.target.value });
      //     break;
      //   case `town`:
      //     this.setState({ Town: event.target.value });
      //     break;
      //   case `county`:
      //     this.setState({ County: event.target.value });
      //     break;
      //   case `postcode`:
      //     this.setState({ Postcode: event.target.value });
      //     break;
      //   case `phoneNumber`:
      //     this.setState({ PhoneNumber: event.target.value });
      //     break;
      //   case `dateOfBirth`:
      //     this.setState({ DateOfBirth: event.target.value });
      //     break;
    }
  };

  constructor(props: IProps) {
    super(props);
    this.defaultState = props.DefaultState;
    this.state = props.DefaultState;
  }

  render() {
    return (
      <Row>
        <Col lg="8">
          <Row>
            <Col>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={this.state.FirstName}
                onChange={this.updateBinding}
                placeholder="First name"
              />
            </Col>
            <Col>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={this.state.LastName}
                onChange={this.updateBinding}
                placeholder="Last name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button Size="lg" color="success">
                Load
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PersonalDetails;
