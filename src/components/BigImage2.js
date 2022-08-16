const BigImage = () => {
    return (
      <>
        <div className="background-img-bg-z"></div>
        <div className="background-texture"></div>
        {/* <header className="header-x"> */}
        <header className="header-y">
          {/* <img
              src="https://media.istockphoto.com/vectors/blue-grid-graph-statistical-polygon-background-abstract-vector-id1340095547?k=20&m=1340095547&s=612x612&w=0&h=e-RZmgMpfKBjJ7w2aPajTXQnOcT6r0sTjcIOsgXfsaU="
              width={250}
              height={250}
            /> */}
          <div className="white x" style={{padding:'20px', maxWidth:'700px', margin:'auto'}}>
            {/* <p
              className="stay-home"
              style={{ color: "white", fontSize: "30px", textAlign: "center" }}
            >
              FULLTIME WEB DEVELOPMENT COURSE{" "}
            </p> */}
  
            <p
              className="stay-home"
              style={{ color: "white", fontSize: "30px", textAlign: "center",marginBottom:'10px' }}
            >
              STILL UNSURE?
            </p>
            {/* <p className="para-x" style={{ color: "white", fontSize: "15px", textAlign: "center",marginBottom:'60px' }}>
            Starting your path to a new career can be intimidating.  Bootcamps offer a quick way to get your foot in the door.  But regardless of what bootcamp you choose you'll want to go in prepared with some knowledge.  We will help you start getting a good foundation without having to break the bank.
          </p> */}
            <p
              className="stay-home"
              style={{ color: "white", fontSize: "20px", textAlign: "center", marginBottom:'60px' }}
            >
              JOIN OUR PREP WORK SECTION{" "}
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
                Duration: ~4 weeks
              </p>
              <p
                style={{ color: "white", fontSize: "20px", textAlign: "center" }}
              >
                Cost: free
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
                Start: anytime
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
                M,W,F 10:00-11:00
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
                 Sign Up
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
  