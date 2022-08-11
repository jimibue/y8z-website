import React from "react";
import { Timeline } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const PartTimeline = () => {
  return (

      <div>
        {/* <h1>Daily Schedule</h1> */}
        <Card
          style={{
            flex: 1,
            margin: "5px",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Meta title={"Parttime weekly schedule (20 weeks)"} description={<TM />} />
        </Card>{" "}
      </div>
  
  );
};
const TM = () => {
  return (
    <Timeline
      style={{
        flex: 1,
      }}
      mode={"left"}
    >
      <Timeline.Item label="Mon 6:00 - 8:30">
        <>
          <h3>Live Lecture</h3>
          <p>cover the main topic for the day</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Tue 6:00 - 8:30">
        <>
          <h3>Project Time</h3>
          <p>
            Work on a project, TA will be available during this
          </p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Tue 6:00 - 8:30">
        <>
          <h3>Live Lecture</h3>
          <p>cover the main topic for the day</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Thur 6:00 - 8:30">
        <>
          <h3>Project Time</h3>
          <p>
            Work on a project, TA will be available during this
          </p>
        </>
      </Timeline.Item>

    </Timeline>
  );
};
export default PartTimeline;
