import React from "react";

import { Col, Row } from "antd";

import {
  NodeIndexOutlined,
  ScheduleOutlined,
  SmileOutlined,
  UserAddOutlined,
  VideoCameraAddOutlined,
  ZoomInOutlined
} from "@ant-design/icons";
import IconDescription from "./IconDescription";

const IconDescriptions = () => (
  <Row style={{marginTop:'50px'}}>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ScheduleOutlined style={{ fontSize: "96px" }} />
        <h3>Professional Curriculum</h3>
        <p>Learn relevant tools and skills that are used in today in the real world</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <UserAddOutlined style={{ fontSize: "96px" }} />
        <h3>Skilled Instructor</h3>
        <p>Course created and taught by an senior engineer, with 3 years expierence as educator</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <VideoCameraAddOutlined style={{ fontSize: "96px" }} />
        <h3>Live Online Lectures</h3>
        <p>
          Live lectures everyday.  Particapte in class, get realtime help, be involved!
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>AFFORDABLE Price</h3>
        <p>The only senior level developer lead bootcamp for $3000</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      {/* <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Post Course Path</h3>
        <p>Optional section after the bootcamp to help continue you on the path to your new career</p>
      </IconDescription> */}
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <NodeIndexOutlined style={{ fontSize: "96px" }} />
        <h3>TA Lead project time</h3>
        <p>Getting stuck on a problem? get live help from the instructor or one of our TA's</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ZoomInOutlined style={{ fontSize: "96px" }} />
        <h3>Small Class size</h3>
        <p>Class size will cap at 15 students.  This ensures</p>
      </IconDescription>
    </Col>
    {/* <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Job Interview Prep</h3>
        <p>Class size will cap at 16 students</p>
      </IconDescription>
    </Col> */}
  </Row>
);

export default IconDescriptions;