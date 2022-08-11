import React from "react";
import { Card } from "antd";
import useWindowSize from "../hooks/useWindowSize";

const { Meta } = Card;

const SectionCard = ({ img, title, body: CardBody }) => {
  const screen = useWindowSize();
  return (
    <Card
      style={{
        minWidth: 250,
        maxWidth: 400,
        flex: 1,
        
        margin: screen.width < 768 ? "5px auto" : "10px",
        //   border: "none",
          
    
      }}
      cover={img ? <img height="200" alt="example" src={img} style={{opacity:.8, border:'15px solid white'}}/> : null}
    >
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={title}
        description={CardBody}
      />
    </Card>
  );
};

export default SectionCard;
