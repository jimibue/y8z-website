import { SmileOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function CourseModules() {
  return (
    <div id="course">
      <p className="stay-home">Y8Z Fulltime Course($3000)</p>
      <Row
        style={{
          margin: "50px auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Module 1: Foundations (4 weeks)"
            body={
              <Description
                title={"In this week you will learn the fundamentals of React"}
                timelineItems={[
                  { name: "Programming Basics in Javascript" },
                  { name: "Intro to Node and React" },
                  { name: "Developer tools & workflow" },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Module 2: Mid (3 weeks)"
            body={
              <Description
                title={"In this week you will learn the fundamentals of React"}
                timelineItems={[
                  { name: "Web Arciteciture" },
                  { name: "Advanced Node and React" },
                  { name: "Testing" },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Module 3: Senior Dev Skills (3 weeks)"
            body={
              <Description
                title={"In this week you will learn the fundamentals of React"}
                timelineItems={[
                  { name: "Web Arciteciture" },
                  { name: "Advanced Node and React" },
                  { name: "Testing" },
                ]}
              />
            }
          />
        </Col>
      </Row>
      </div>
  );
}

const Description = ({ title, timelineItems }) => {
  const renderTimeline = () => {
    return timelineItems.map((ti) => {
      return (
        <Timeline.Item dot={<SmileOutlined />}>
          <div style={{ marginBottom: 0 }}>
            <h3>{ti.name}</h3>
            <p>an extra description</p>
          </div>
        </Timeline.Item>
      );
    });
  };
  return (
    <div>
      <p>{title}</p>
      <span>Senior dev lead lecture: 60+ hours</span>
      <br />
      <p>group/solo project time: 80+ hours</p>
      <Timeline style={{ padding: "10px" }}>{renderTimeline()}</Timeline>
    </div>
  );
};
