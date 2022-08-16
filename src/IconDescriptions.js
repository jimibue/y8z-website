import React from "react";

import { Col, Row } from "antd";

import {
  NodeIndexOutlined,
  ScheduleOutlined,
  SmileOutlined,
  UserAddOutlined,
  VideoCameraAddOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import IconDescription from "./IconDescription";

const IconDescriptions = () => (
  <Row style={{ marginTop: "50px" }}>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ScheduleOutlined style={{ fontSize: "96px" }} />
        <h3>Professional Curriculum</h3>
        <p>
          Learn relevant tools and skills that are used today in the real world
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <UserAddOutlined style={{ fontSize: "96px" }} />
        <h3>Skilled Instructor</h3>
        <p>
          Course created and taught by a senior engineer, with 3 years of
          experience as an educator
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <VideoCameraAddOutlined style={{ fontSize: "96px" }} />
        <h3>Live Online Class</h3>
        <p>
          Live class every day. Ask questions as they come up and get them
          answered on the spot.
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <SmileOutlined style={{ fontSize: "96px" }} />
        <h3>Low Price</h3>
        <p>
          At $3000, this is the lowest priced, professional lead full-time
          Bootcamp
        </p>
      </IconDescription>
    </Col>
    {/* {screen.width > 1200 || (false && <Col xs={24} md={12} lg={6}></Col>)} */}
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <NodeIndexOutlined style={{ fontSize: "96px" }} />
        <h3>TA Lead Project Time</h3>
        <p>
          Stuck on a problem? Get live help from the instructor or one of our
          TAs
        </p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <IconDescription>
        <ZoomInOutlined style={{ fontSize: "96px" }} />
        <h3>Small Class Size</h3>
        <p>Class size will cap at 20 students. We</p>
      </IconDescription>
    </Col>
    <Col xs={24} md={12} lg={6}></Col>
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
