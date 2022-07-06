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
import Competition from "./Competition";
import {

  Container,

} from "reactstrap";

export default function Tabs() {

  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">COMPETETIONS</h3>
        </div>
        <Competition name1="QUIZERIA" name2="WEB HACKATHON" />
        <Competition name1="LINE FOLLOWING ROBOT" name2="ROBO SOCCER" />
        <Competition name1="ROBO RACE" name2="SPEED PROGRAMMING" />
        <Competition name1="CHESS" name2="SCRABLE" />
        <Competition name1="TREASURE HUNT" name2="POSTER DESIGNING" />
      </Container>
    </div>
  );
}
