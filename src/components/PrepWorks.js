import { Col, Row } from "antd";
import React from "react";
import SectionCard from "./SectionCard";

export default function PrepWorks() {
  return (
    <div id="prep-work">
      <p className="stay-home">1. Prep work(free)</p>

     
      <p className="para-x">
        Before getting into code and before paying any money, you should really
        see if coding is something that is right for you. There are many great
        free resources where you can check to get a gauge if it is for you.
        These will also prep you for the intensity and pace of a bootcamp
      </p>
      <div>
      <Row style={{ margin:'50px auto 0 auto', display:'flex', justifyContent:'center', border:'1px solid'}}>
         <Col xs={24} md={12} lg={8}>
          <SectionCard title='html'/>
          </Col>
          <Col xs={24} md={12} lg={8}>
          <SectionCard title='css'/>
          </Col>
          <Col xs={24} md={12} lg={8}>
          <SectionCard title='jss'/>
          </Col>
    
          </Row>
          </div>
    </div>
  );
}
