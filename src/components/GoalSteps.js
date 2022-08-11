import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import React from "react";
const { Step } = Steps;

const GoalSteps = () => (
  <>
    <p className="stay-home">The Y8Z Path</p>
    <Steps
      style={{
        padding: "20px 10px",
        background: "#fcfcfc",
        border: "1px solid #ccc",
      }}
    >
      <Step
        status="finish"
        title={<StepDescription title={'1. Prer Work'} time='*optional: 1 month' skills='free' />}
        icon={<UserOutlined />}
      />
      <Step
        status="finish"
        title={<StepDescription title={'2.Y8Z Partime Course'} time='10 weeks(400+hours)' skills='$3,000' />}
        icon={<SolutionOutlined />}
      />
      <Step
        status="finish"
        title={<StepDescription title={'3. Post Course'} time='*optional: 20 weeks(mainly self guided)' skills='$1,000' />}
        icon={<LoadingOutlined />}
      />
      <Step status="finish" title={<StepDescription title={'4. Job 🕶'} time='' skills={'🕶'} />} icon={<SmileOutlined />} />
    </Steps>
  </>
);

const StepDescription = ({title, time, skills})=>{
  return (
    <>
    <h3 style={{ marginBottom: 0 }}>{title}</h3>
    <p style={{ marginTop: -10,  marginBottom: 0,fontSize:'11px', textAlign:'center', color:'grey' }}>{time}</p>
    <p style={{ marginTop: -10, fontSize:'11px', textAlign:'center', color:'grey' }}>{skills}</p>
  </>
  )
}

export default GoalSteps;
