import React from 'react';

import classnames from "classnames";
// reactstrap components
import {
    TabContent,
    TabPane,
    Container,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

function Competition({ name1, name2 }) {
    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(4);
    return (

        <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
                <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                        Date:21-July-2020 Time: 11:00 am Venue:sdkdjs
                    </small>
                </div>
                <Card>
                    <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: iconTabs === 1,
                                    })}
                                    onClick={(e) => setIconsTabs(1)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-spaceship" />
                                    {name1}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                            <TabPane tabId="link1">
                                <p>
                                    Collaboratively administrate empowered markets via
                                    plug-and-play networks. Dynamically procrastinate B2C
                                    users after installed base benefits. <br />
                                    <br />
                                    Dramatically visualize customer directed convergence
                                    without revolutionary ROI.
                                </p>
                            </TabPane>
                        </TabContent>
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
                    </CardBody>

                </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
                <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                        21-July-2020
                    </small>
                </div>
                <Card>
                    <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: textTabs === 4,
                                    })}
                                    onClick={(e) => setTextTabs(4)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-spaceship" />
                                    {name2}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + textTabs}>
                            <TabPane tabId="link4">
                                <p>
                                    These cases are perfectly simple and easy to distinguish.
                                    In a free hour, when our power of choice is untrammelled
                                    and when nothing prevents our being able to do what we
                                    like best, every pleasure is to be welcomed and every pain
                                    avoided. <br />
                                    But in certain circumstances and owing to the claims of
                                    duty or the obligations of business it will frequently
                                    occur that pleasures
                                </p>

                            </TabPane>

                        </TabContent>
                        <div className="btn-wrapper">
                            <Button
                                className="btn-round"
                                color="primary"
                                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                View Demo Icons
                            </Button>
                            <Button
                                className="btn-simple btn-round"
                                color="primary"
                                href="https://nucleoapp.com/?ref=1712"
                                rel="noopener noreferrer"
                                size="lg"
                                target="_blank"
                            >
                                View All Icons
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Competition
