import { SmileOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function CourseModules() {
  return (
    <div id="course">
      <p className="stay-home">Course Details</p>
      <p className="para-x">
              The course has you will modern day tools that are apllicable and
              will follow a set schedule to help you keep on track
            </p>
      <Row
        style={{
          margin: "50px auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
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
            img="https://media.istockphoto.com/id/1206638576/fr/photo/concepteur-de-site-web-concepteur-creative-planification-d%C3%A9veloppeur-d%C3%A9veloppeur-projet-de.webp?s=612x612&w=is&k=20&c=yHvLwS5vz8JV36qqOB4btNwpJRy2KMeL3SUePMBRGH4="
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
            img="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
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
