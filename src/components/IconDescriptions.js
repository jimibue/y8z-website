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
import useWindowSize from "../hooks/useWindowSize";

const IconDescriptions = () => {
  const screen = useWindowSize();
  return (
    <Row style={{ marginTop: "50px" }}>
      <Col xs={24} md={12} lg={6}>
        <IconDescription>
          <ScheduleOutlined style={{ fontSize: "96px" }} />
          <h3>Professional Curriculum</h3>
          <p>
            Learn relevant tools and skills that are used currently in the real
            world
          </p>
        </IconDescription>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <IconDescription>
          <UserAddOutlined style={{ fontSize: "96px" }} />
          <h3>Skilled Instructor</h3>
          <p>
            Course created and taught by a senior engineer, with 3 years of
            experience as an instructor
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
          <h3>Low price</h3>
          <p>
            At $3000, this is the lowest priced, professional lead full-time
            Bootcamp
          </p>
        </IconDescription>
      </Col>
      {screen.width > 992 && <Col xs={24} md={12} lg={6}></Col>}
      <Col xs={24} md={12} lg={6}>
        <IconDescription>
          <NodeIndexOutlined style={{ fontSize: "96px" }} />
          <h3>TA Lead project time</h3>
          <p>
            Stuck on a problem? Get live help from the instructor or one of our
            TAs
          </p>
        </IconDescription>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <IconDescription>
          <ZoomInOutlined style={{ fontSize: "96px" }} />
          <h3>Small Class size</h3>
          <p>
            To keep a close and personalized enviroment class size will cap at
            20
          </p>
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
};

export default IconDescriptions;
