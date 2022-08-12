import React from "react";
import { Timeline } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const DayTimeline = () => {
  return (

      <div>
        {/* <h1>Daily Schedule</h1> */}
        <Card
          style={{
            margin: "5px",
            border: "none",
            // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Meta title={"Fulltime daily Schedule(Mon-Thurs)10weeks"} description={<TM />} />
        </Card>{" "}
      </div>
  
  );
};
const TM = () => {
  return (
    <Timeline
      style={{
        // flex: 1,
      }}
      mode={"left"}
    >
      <Timeline.Item label="9:00 - 11:30">
        <>
          <h3>Live Lecture</h3>
          <p>cover the main topic for the day</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="11:30 - 12:30">
        <>
          <h3>Solo Challenge</h3>
          <p>
            spend sometime to practic the skills you just learned from lecture
          </p>
        </>
      </Timeline.Item>
      <Timeline.Item label="12:30 - 1:30">
        <>
          <h3>Lunch / Events</h3>
          <p>
            Grab some food, go for a walk or join to group for some no-code
            related fun
          </p>
        </>
      </Timeline.Item>
      <Timeline.Item label="1:30 - 2:30">
        <h3>Live Lecture</h3>
        <p>
          Time set asside to review any fuzzy parts from the homework and
          misculanous topics from the lecture
        </p>
      </Timeline.Item>
      <Timeline.Item label="2:30 - 5:00">
        <h3>Project Time</h3>
        <p>
          Group and Solo Project work here combining topics from lecture and
          past to gain skills
        </p>
      </Timeline.Item>
    </Timeline>
  );
};
export default DayTimeline;
