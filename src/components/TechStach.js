import React from "react";
import { Card, Image } from "antd";

const { Meta } = Card;
const TechStack = () => {
  return (
    <div>
      <Card
        style={{
          flex: 2,
          // margin: "5px",
          border: "none",
          // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        // cover={<div style={{height:"100px", background:"steelblue"}}><h1>Tech Stack"</h1></div>}
      >
        <Meta description={<TM />} />
      </Card>{" "}
    </div>
  );
};
const TM = () => {
  return (
    <Image.PreviewGroup>
      <div style={{ display: "flex", marginBottom:'10px', width:'100%' }}>
        <Image
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/242px-React-icon.svg.png"
        />
        <p style={{ marginLeft:'10px' }}>
          React JS. One of the most popular UI Front end libraries
        </p>
      </div>
      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
        />
        <p style={{ marginLeft:'10px' }}>
          React JS. One of the most popular UI Front end libraries
        </p>
      </div>
      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src=" https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
        />
        <p style={{ marginLeft:'10px' }}>
          Git/Github. One of the most popular UI Front end libraries
        </p>
      </div>
      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src="https://www.the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png"
        />
        <p style={{ marginLeft:'10px' }}>
          Node.js: Keep up with the js for the backend
        </p>
      </div>
      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src="https://cdn.icon-icons.com/icons2/2389/PNG/512/jest_logo_icon_145152.png"
        />
        <p style={{ marginLeft:'10px' }}>
          Jest: Testing libary
        </p>
      </div>
      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
        />
        <p style={{ marginLeft:'10px' }}>
          Docker: Testing libary
        </p>
      </div>

      <div style={{ display: "flex", marginBottom:'10px' }}>
        <Image
          width={50}
          src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
        />
        <p style={{ marginLeft:'10px' }}>
          Express: Testing libary
        </p>
      </div>
      
     
      <div style={{ display: "flex" }}>
        <Image
          width={50}
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
        />
        <p>
          javascript: The language of the web
        </p>
      </div>


    </Image.PreviewGroup>
  );
};
export default TechStack;
