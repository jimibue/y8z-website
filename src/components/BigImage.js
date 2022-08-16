const BigImage = () => {
  return (
    <>
      <div className="background-img-bg"></div>
      <div className="background-texture"></div>
      {/* <header className="header-x"> */}
      <header className="header-y">
        {/* <img
            src="https://media.istockphoto.com/vectors/blue-grid-graph-statistical-polygon-background-abstract-vector-id1340095547?k=20&m=1340095547&s=612x612&w=0&h=e-RZmgMpfKBjJ7w2aPajTXQnOcT6r0sTjcIOsgXfsaU="
            width={250}
            height={250}
          /> */}
        <div className="white x" style={{padding:'20px', maxWidth:'700px', margin:'auto'}}>
          <p
            className="stay-home"
            style={{ color: "white", fontSize: "25px", textAlign: "center" }}
          >
            FULL-TIME WEB DEVELOPMENT COURSE{" "}
          </p>

          <p
            className="stay-home"
            style={{ color: "white", fontSize: "18px", textAlign: "center", marginBottom:'60px' }}
          >
            Start your new career here{" "}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flesDirection: "row",
            }}
          >
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Duration: 12 weeks
            </p>
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Cost: $3,000
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flesDirection: "row",
            }}
          >
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Start: 10/17/22 
            </p>
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Location: online
            </p>
        
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flesDirection: "row",
            }}
          >
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Schedule: M-F 9:00-5:00 (MST)
            </p>
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Instructor: James Yeates
            </p>
        
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flesDirection: "row",
            }}
          >
            <p
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Instructor: James Yeates
            </p>
          </div> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flesDirection: "row",
              marginTop:'30px'
            }}
          >
            <a
              href="https://calendly.com/y8z-studios/20min"
              target="blank"
              rel="noreferrer"
            >
              <button style={{ color: "white" }}>
                Want more info? Schedule a 1 on 1 Meeting
              </button>
            </a>
          </div>
        </div>
        {/* <h1 className="h1-y" style={{color:'white', textAlign:'center'}}>$3,000</h1> */}
      </header>
    </>
  );
};
export default BigImage;
