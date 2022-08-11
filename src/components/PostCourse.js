import { SmileOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function PostCourse() {
  return (
    <div id="course">
      <p className="stay-home">3. 3-6+ months Post-Course Intership ($1000)</p>
      <p>Between the end of the bootcamp it is common that 3-6+ months pass before you get a job.  It is CRUCIAL that during this period you continue to learn and increase your knowledge. </p>
      <p>Here we will meet bi-weekly. This will largely be a self-paced part where it is up </p>
      <Row
        style={{
          margin: "50px auto 0 auto",
          display: "flex",
          justifyContent: "center",
          border: "1px solid",
        }}
      >
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Focus 1: Continue to learn"
            body={
              <Description
                title={"In this week you will learn the fundamentals of React"}
                timelineItems={[
                  { name: "React Native" },
                  { name: "Data Structures and Algorithims" },
                  { name: "Dev ops" },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Focus 2: Career services"
            body={
              <Description
                title={"In this week you will learn the fundamentals of React"}
                timelineItems={[
                  { name: "Interview Prep" },
                  { name: "Networking" },
                  { name: "Job search: tips and tricks" },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKO_lZTI1Y4THFB1mzpwKi2mEnmntt8tCnQ&usqp=CAU"
            title="Focus 3: Build Your portfilio"
            body={
              <Description
                title={"Keep building and show off what you can make"}
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
