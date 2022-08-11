import React from "react";

import { Col, Row } from "antd";

import {
  NodeIndexOutlined,
  ScheduleOutlined,
  ShrinkOutlined,
  SmileOutlined,
  UserAddOutlined,
  VideoCameraAddOutlined,
  ZoomInOutlined
} from "@ant-design/icons";
import IconDescription from "../components/IconDescription";

const IconDescriptionsPT = () => (
  <Row style={{marginTop:'50px'}}>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ScheduleOutlined style={{ fontSize: "96px" }} />
        <h3>Professional Curriculum</h3>
        <p>You will learn relevant topics that are used in the real world</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <UserAddOutlined style={{ fontSize: "96px" }} />
        <h3>Experienced Instructor</h3>
        <p>Created and taught by an experienced engineer and educator</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <VideoCameraAddOutlined style={{ fontSize: "96px" }} />
        <h3>Live Online Lectures</h3>
        <p>
          This course was created and is taught by an an expiernced enginner and
          educator
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>AFFORDABLE Price</h3>
        <p>Things are kept lean and efficent here and those savings are passed on to you. Also you pay half up front and second half only if you get hried</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Post Course Meetups</h3>
        <p>Weekly meetups after the course ends  to keep students on track during the transition phase from course to job</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <NodeIndexOutlined style={{ fontSize: "96px" }} />
        <h3>Tight-Knit Community</h3>
        <p>Grow your network by meeting, collaborating with other students</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ZoomInOutlined style={{ fontSize: "96px" }} />
        <h3>Small Class size</h3>
        <p>Class size will cap at 16 students</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Job Interview Prep</h3>
        <p>Class size will cap at 16 students</p>
      </IconDescription>
    </Col>
  </Row>
);

export default IconDescriptionsPT;