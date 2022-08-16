import { SmileOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function CourseModules() {
  return (
    <div id="course">
      <p className="stay-home">Course Details</p>
      <p className="para-x">
        This immersive and intensive course is designed to teach you in depth the things you need to know to be a fullstack developer.  
      </p>
      <p className="para-x">
        This course is broken up into three main sections that build on one another. 
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
            img='/computer_code.jpg'
            title="Module 1: Frontend Web Development "
            body={
              <Description
                title={"Learn the fundamentals of React, Javascript, HTML, CSS and Frontend Web Development."}
                timelineItems={[
                  {
                    name: "Week 1: Javascript",
                    extra:
                      "A deep dive into Javascript looking at functions, conditional, async-await, loops and more.  We will also spend some time with Git and Github.",
                  },
                  {
                    name: "Week 2: Intro to React",
                    extra:
                      "A crash course in React. Learn about state, props, react-router, and component design and libraries. CSS and HTML review as well",
                  },
                  {
                    name: "Week 3:  React In-depth",
                    extra:
                      "Advanced React topics: hooks, async code, working with API's, context, state management, and more",
                  },
                  {
                    name: "Week 4: Developer tools / Agile",
                    extra:
                      "Tools of the trade that are pertinent to Frontend development, Figma, wireframes, component design, agile development, Trello, helpful resources, styled-components, and more",
                  },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            // img="https://media.istockphoto.com/id/1206638576/fr/photo/concepteur-de-site-web-concepteur-creative-planification-d%C3%A9veloppeur-d%C3%A9veloppeur-projet-de.webp?s=612x612&w=is&k=20&c=yHvLwS5vz8JV36qqOB4btNwpJRy2KMeL3SUePMBRGH4="
            img="blueprint.jpg"
            title="Module 2: Fullstack Web Development"
            body={
              <Description
                title={
                  "Learn how to create the backend and also integrate with it React using the MERN stack."
                }
                timelineItems={[
                  {
                    name: "week 5: DB's / Express / Node",
                    extra:
                      "An overview of the Backend using Node and Express.  Well go over the HTTP life client server life cycle and build out an API",
                  },
                  {
                    name: "week 6: The MERN Stack part 1",
                    extra:
                      "Crash course in the MERN stack: MongoDB, Express, React, and Node. We'll use this to build our first fullstack app.",
                  },
                  { name: "week 7: NO CLASS",   extra:
                  "This is an intensive Bootcamp, this week is an 'off' week but is meant to give you a chance to get caught up with sections you might have gotten behind in.", },

                  { name: "week 8: The MERN Stack part 2",extra:
                  "Continue to build fullstack apps. We will also integrate authentication, image upload, model associations, and more.", },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <SectionCard
            // img="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            img="/glasses.jpg"
            title="Module 3: Senior Dev Skills"
            body={
              <Description
                title={"Learn common skills that companies are looking for and  build advanced applications."}
                timelineItems={[
                  { name: "week 9: Testing / Typescript", extra:"Learn how to write better code by adding tests using jest and enzyme.  Learn about typed Javascript with Typescript." },
                  { name: "week 10: Dev Ops", extra:"Using tools such as Docker, Kuberantes, Github, and Heroku we will see how we can streamline the development experience and create CI/CD pipelines." },
                  { name: "week 11: Data Structures and Algorithms", extra:" Get prepared for whiteboard interview questions and strengthen your coding fundamentals." },
                  { name: "week 12: No Lecture: Project",extra:"This is your week to take what you have learned and finish building out a advanced fullstack application that you can show off to potential employers." },
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
        <Timeline.Item key={ti.name} dot={<SmileOutlined />}>
          <div style={{ marginBottom: 0 }}>
            <h3>{ti.name}</h3>
            <p>{ti.extra}</p>
          </div>
        </Timeline.Item>
      );
    });
  };
  return (
    <div>
      <p style={{fontSize:'16px'}}>{title}</p>
      {/* <span>Senior dev lead lecture: 60+ hours</span>
      <br />
      <p>group/solo project time: 80+ hours</p> */}
      <Timeline style={{ padding: "10px" }}>{renderTimeline()}</Timeline>
    </div>
  );
};
