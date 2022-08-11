import React from "react";
import { Layout, Divider, Card } from "antd";
import DayTimeline from "./components/DayTimeline";
import CourseModules from "./components/CourseModules";
import TechStack from "./components/TechStach";
import Intro from "./components/Intro";
import IconDescriptions from "./components/IconDescriptions";
// import useWindowSize from "./hooks/useWindowSize";

// const AppAnchor = () => (
//   <Anchor affix={true}>
//     <Link href="#home" title="Home" />
//     <Link href="#path" title="Path">
//       <Link href="#prep-work" title="Prep Work" />
//       <Link href="#course" title="The Course" />
//       <Link href="#post-course" title="Live After" />
//     </Link>

//     <Link href="#schedule" title="Daily Schedule" />
//     <Link href="#qa" title="Q AND A" />
//     <Link href="#about" title="About" />
//   </Anchor>
// );

const FullTime = () => {
  // const screen = useWindowSize();
  return (
    <Layout style={{ background: "rgb(255, 255, 255)", margin: "10px" }}>
      <Intro />
      <div style={{ padding: "10px 0 10px", display: "flex" }}>
        {/* {screen.width > 800 && <AppAnchor />} */}

        <div style={{ maxWidth: "1150px", margin: "auto", padding: "20px" }}>
          <div id="home">
            {/* <h1>Mission</h1>
            <p className="para-x">
              Y8Z was created by an Educator and Software Engigneer. Not be an
              entrepuner. I
            </p> */}
            <p class="stay-home" style={{ textAlign: "center" }}>
              A fulltime bootcamp created and lead by a senior engineer
            </p>
            <IconDescriptions />
          </div>
          {/* <Intro2 /> */}

          <div id="path">
            {/* <Card
              style={{
                margin: 0,
                // border: "none",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Meta
                title={<h1>Bootcamp reality check</h1>}
                description={<X />}
              />
            </Card> */}
            <Divider />
            {/* <Card
              style={{
                margin: "20px 0",
                // border: "none",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <GoalSteps />
            </Card> */}
            {/* <Card
              style={{
                margin: "20px 0",
                // border: "none",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <PrepWorks />
            </Card> */}
            <Divider />
            <Card
              style={{
                margin: "20px 0",
                // border: "none",
            
              }}
            >
              <CourseModules />
            </Card>
            {/* <Divider />
            <div id="post-course">
              <PostCourse />
            </div> */}
          </div>
          <div id="schedule">
            <p className="para-x">
              The course has you will modern day tools that are apllicable and
              will follow a set schedule to help you keep on track
            </p>
 
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DayTimeline />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TechStack />
            </div>
          </div>
          {/* <div id="qa">
            <h1>Common Questions</h1>
            <p className="para-x">
              A bootcamp created by an educator and engineer, not a entrpuener
            </p>
            <h1>Why Y8Z is different than other bootcamps</h1>
            <p>
              A bootcamp created by an educator and engineer, not a entrpuener
            </p>
          </div> */}
          {/* <CourseCompare /> */}
        </div>
      </div>
    </Layout>
  );
};

// const IconDescriptionSmall = ({ children }) => (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "flex-start",
//       alignItems: "flex-start",
//       flexDirection: "column",
//       width: "45%",
//       padding: "15px",
//       textAlign: "center",
//       boxShadow: "2px 2px 2px grey",
//       border: "1px solid black",
//       margin: "10px",
//     }}
//   >
//     {children}
//   </div>
// );
// const X = () => (
//   <>
//     <h3>Let's look at some facts (or just oppionion from a seasoned vetran)</h3>
//     <Row>
//       <IconDescriptionSmall>
//         <h2 style={{ fontWieght: 600 }}>
//           Facts 0: Coding is a great job and pays well
//         </h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           I don't think this needs explaing after all you are on this website
//           because you belief this
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>Facts 1: Learning to code is hard</h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           {" "}
//           yo
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>Facts 2: Bootcamps want your money</h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           {" "}
//           I am included in this
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>Facts 2: Bootcamps want your money</h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           {" "}
//           I am included in this
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>
//           Fact 3: You don't need to waste your money at a bootcamp to do this
//         </h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           {" "}
//           I am included in this
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>Facts 4: It is probably going to be a year before you get a job</h2>
//         <p className="para-x" style={{ width: "100%" }}>
//           {" "}
//           Regardless of the bootcamp you pick. You should spend about a 1-2
//           months or so preping for a bootcamp. 3 months in one and then about
//           3-6 months of the interview process.
//         </p>
//       </IconDescriptionSmall>
//       <IconDescriptionSmall>
//         <h2>
//           Facts 4: Getting a job is more based on your work ethic and motivation
//           vs your bootcamp career services
//         </h2>
//         <p className="para-x" style={{ width: "100%", textAlign: "left" }}>
//           {" "}
//           you should spend about a month or so preping for a boot camp. 3 months
//           in one and then about 3-6 months of the interview process
//         </p>
//       </IconDescriptionSmall>
//     </Row>
//   </>
// );

export default FullTime;
