import React from "react";
import { Timeline } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const SelfPacedTimeline = () => {
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
          <Meta title={"Self Paced"} description={<TM />} />
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
      <Timeline.Item label="Monday">
        <>
          <h3>TA hours</h3>
          <p>2:30-5:00, 6:00-8:30</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Tuesday">
        <>
          <h3>TA hours</h3>
          <p>2:30-5:00, 6:00-8:30</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Wednesday">
        <>
          <h3>TA hours</h3>
          <p>2:30-5:00, 6:00-8:30 asdfasdfasdfasdfasdf</p>
        </>
      </Timeline.Item>
      <Timeline.Item label="Thursday">
        <>
          <h3>TA hours</h3>
          <p>2:30-5:00, 6:00-8:30</p>
        </>
      </Timeline.Item>

    </Timeline>
  );
};
export default SelfPacedTimeline;
