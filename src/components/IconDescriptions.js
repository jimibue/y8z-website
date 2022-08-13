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
        <p>Learn relevant tools and skills that are used today in the real world</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <UserAddOutlined style={{ fontSize: "96px" }} />
        <h3>Skilled Instructor</h3>
        <p>Course created and taught by a senior engineer, with 3 years of experience as an educator</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <VideoCameraAddOutlined style={{ fontSize: "96px" }} />
        <h3>Live Online Class</h3>
        <p>
          Live class every day.  Ask question  as they come up and get them answered on the spot.
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Low price</h3>
        <p>At only $3000, this is the lowest priced, professional lead full-time Bootcamp</p>
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
        <p>Getting stuck on a problem? get live help from the instructor or one of our TAs</p>
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