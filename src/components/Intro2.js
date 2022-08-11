import { Divider } from "antd";

const Intro2 = () => {
  return (
    <>

    <Divider/>
      <header class="header-x">
      <div class="">
        <p>Price: $3000</p>
        <p>Location: online</p>
        <p>length: 12 weeks</p>
        <p>Time: M-F 9 -12</p>
      </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p class="stay-home">Setup a meeting to discuss more</p>
          {/* <h1 class="h1-x">Learn to code here</h1> */}
          <p></p>

          <a href='https://calendly.com/y8z-studios/20min' target='_blank' style={{textAlign:'center'}}as='a'>Schedule</a>
        </div>
      </header>
    </>
  );
};
export default Intro2;
