import React, { useState } from "react";
import {  Table, Tag } from "antd";

const columns = [
  {
    title: "School",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => {
      let color = price > 3000 ? "red" : "green";

      return (
        <Tag color={color} key={price}>
          ${price}
        </Tag>
      );
    }
  },
  {
    title: "Live Lectures",
    dataIndex: "live",
    key: "live"
  },
  {
    title: "Length",
    dataIndex: "length",
    key: "length"
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location"
  },
  {
    title: "Instructor Teaching expiernce",
    dataIndex: "ite",
    key: "ite"
  },
  {
    title: "Instructor level",
    dataIndex: "il",
    key:'il'
  }
];
const data = [
  {
    key: "1",
    name: "Y8Z FUlltime",
    price: 3000,
    live: "Yes",
    length: "10 weeks",
    location: "online",
    ite: "3+ year teaching",
    il: "Senior Level (6+ years)",
    tags: ["nice", "developer"]
  },
  {
    key: "11",
    name: "Y8Z Parttime",
    price: 3000,
    live: "Yes",
    length: "20 weeks",
    location: "online",
    ite: "3+ year teaching",
    il: "Senior Level (6+ years)",
    tags: ["nice", "developer"]
  },
  {
    key: "2311",
    name: "Y8Z Selfpaced",
    price: 1500,
    live: "Yes",
    length: "10-20 weeks",
    location: "online",
    ite: "3+ year teaching",
    il: "Senior Level (6+ years)",
    tags: ["nice", "developer"]
  },
  {
    key: "342",
    name: "Y8Z Intership",
    price: 1000,
    live: "Mixed",
    length: "3+ months",
    location: "online",
    ite: "3+ year teaching",
    il: "Senior Level (6+ years)",
    tags: ["nice", "developer"]
  },
  {
    key: "2342",
    name: "DPL",
    price: 8800,
    live: "Yes",
    length: "11 weeks",
    address: "London No. 1 Lake Park",
    location: "online",
    ite: "3+ year teaching",
    il: "(0+ years)",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "DevMountain",
    price: 9900,
    live: "Yes",
    length: "16 weeks (full time)",
    location: "online / in-person",
    ite: "?",
    il: "?",
    tags: ["loser"]
  },
  {
    key: "4",
    name: "Univesity of Utah Bootcamp",
    price: 12000,
    live: "Yes",
    length: "24 weeks (part time)",
    location: "online ",
    ite: "?",
    il: "?",
    tags: ["loser"]
  },
  {
    key: "5",
    name: "hack reactor",
    price: 17800,
    live: "Yes",
    length: "12 weeks (full time)",
    location: "online ",
    ite: "?",
    il: "senior",
    tags: ["loser"]
  }

];

const CourseCompare = () => {
  const [bottom, setBottom] = useState("bottomRight");
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default CourseCompare;
