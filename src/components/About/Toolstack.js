import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiDiscord, SiGithub, SiPostman, SiPycharm, SiStackoverflow, SiWebstorm, SiWindows,} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPycharm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDiscord/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiStackoverflow/>
            </Col>
        </Row>
    );
}

export default Toolstack;
