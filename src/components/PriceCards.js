
import { Col, Row, Timeline } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function CourseModules() {
  return (
    <div id="course">
      <p className="stay-home">A Course Built to Match Your needs</p>
      <p>We are providing three ways to do the Y8Z course to help adapt to your schedule and preferences</p>
      <Row
        style={{
          margin: "50px auto 0 auto",
          display: "flex",
          justifyContent: "center",
          // border: "1px solid",
        }}
      >
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            title={'Fulltime (3000)'}
           body={
              <Description
                title={"Intesive 10 week coding program"}
                // timelineItems={[
                //   { name: "10 weeks" },
                //   { name: "Live Classes" },
                //   { name: "Access to TA's" },
                //   { name: "40+ hours a week" },

                // ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            title={'parttime (2500)'}
            body={
              <Description
                title={"night class designed for those with day jobs"}
                // timelineItems={[
                //   { name: "20 weeks" },
                //   { name: "Live Classes" },
                //   { name: "Access to TA's" },
                //   { name: "20+ hours a week" },
                // ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            title={'selfpaced (1500)'}
            body={
              <Description
                title={"This options always you to go on at your own pace and on your own time schedule.  You will have access to course content, recorded lecture and access to TA hours"}
                // timelineItems={[
                //   { name: "10-20 weeks" },
                //   { name: "Recorded classes" },
                //   { name: "Access to TA's" },
                //   { name: "~20+ hours a week" },
                // ]}
              />
            }
          />
        </Col>
      </Row>
      </div>
  );
}

const Description = ({ title, timelineItems=[] }) => {
  const renderTimeline = () => {
    return timelineItems.map((ti) => {
      return (
        <Timeline.Item key={ti.name}>
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
