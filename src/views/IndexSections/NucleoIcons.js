/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">PROJECT EXHIBITION</h2>
            <h4 className="description">
              BLK• Design System PRO comes with 100 custom icons made by our
              friends from NucleoApp. The official package contains over 2.100
              thin icons which are looking great in combination with BLK• Design
              System PRO Make sure you check all of them and use those that you
              like the most.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                Register here
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                Rule book
              </Button>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
