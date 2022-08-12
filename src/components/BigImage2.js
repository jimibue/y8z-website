const BigImage = () => {
    return (
      <>
        <div class="background-img-bg-z"></div>
        <div class="background-texture"></div>
        {/* <header class="header-x"> */}
        <header class="header-y">
          {/* <img
              src="https://media.istockphoto.com/vectors/blue-grid-graph-statistical-polygon-background-abstract-vector-id1340095547?k=20&m=1340095547&s=612x612&w=0&h=e-RZmgMpfKBjJ7w2aPajTXQnOcT6r0sTjcIOsgXfsaU="
              width={250}
              height={250}
            /> */}
          <div class="white x" style={{padding:'20px'}}>
            {/* <p
              class="stay-home"
              style={{ color: "white", fontSize: "30px", textAlign: "center" }}
            >
              FULLTIME WEB DEVELOPMENT COURSE{" "}
            </p> */}
  
            <p
              class="stay-home"
              style={{ color: "white", fontSize: "30px", textAlign: "center" }}
            >
              Get Started With the prep work{" "}
            </p>
  
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flesDirection: "row",
              }}
            >
              <p
                style={{ color: "white", fontSize: "20px", textAlign: "center" }}
              >
                Part: Html
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
                justifyContent: "space-around",
                flesDirection: "row",
              }}
            >
              <p
                style={{ color: "white", fontSize: "20px", textAlign: "center" }}
              >
                Start: 11/1/22
              </p>
              <p
                style={{ color: "white", fontSize: "20px", textAlign: "center" }}
              >
                Location: Online
              </p>
            </div>
            <div
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
            </div>
  
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flesDirection: "row",
              }}
            >
              <a
                href="https://calendly.com/y8z-studios/20min"
                target="blank"
                rel="noreferrer"
              >
                <button style={{ color: "white" }}>
                  Link to prep work
                </button>
              </a>
            </div>
          </div>
          {/* <h1 class="h1-y" style={{color:'white', textAlign:'center'}}>$3,000</h1> */}
        </header>
      </>
    );
  };
  export default BigImage;
  