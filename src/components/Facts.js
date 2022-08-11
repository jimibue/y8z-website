const IconDescriptionSmall = ({ children }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "45%",
        margin: " auto",
        padding: "15px",
        textAlign: "center",
        boxShadow: "2px 2px 2px grey",
        border:'1px solid black',
        margin:'10px'
      }}
    >
      {children}
    </div>
)
const X = () => (
    <>
      <h3>Let's look at some facts (or just oppionion from a seasoned vetran)</h3>
       <Row>
       <IconDescriptionSmall>
          <h2 style={{fontWieght:600}}>Facts 0: Coding is a great job and pays well</h2>
          <p className="para-x" style={{ width: "100%" }}>I don't think this needs explaing after all you are on this website because you belief this</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Facts 1: Learning to code is hard</h2>
          <p className="para-x" style={{ width: "100%" }}> yo</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Facts 2: Bootcamps want your money</h2>
          <p className="para-x" style={{ width: "100%" }}> I am included in this</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Facts 2: Bootcamps want your money</h2>
          <p className="para-x" style={{ width: "100%" }}> I am included in this</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Fact 3: You don't need to waste your money at a bootcamp to do this</h2>
          <p className="para-x" style={{ width: "100%" }}> I am included in this</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Facts 4: It is probably going to be a year before you get a job</h2>
          <p className="para-x" style={{ width: "100%" }}> Regardless of the bootcamp you pick. You should spend about a 1-2 months or so preping for a bootcamp. 3 months in one and then about 3-6 months of the interview process.</p>
        </IconDescriptionSmall>
        <IconDescriptionSmall>
          <h2>Facts 4: Getting a job is more based on your work ethic and motivation vs your bootcamp career services</h2>
          <p className="para-x" style={{ width: "100%", textAlign:'left' }}> you should spend about a month or so preping for a boot camp. 3 months in one and then about 3-6 months of the interview process</p>
        </IconDescriptionSmall>
        </Row>
      <GoalSteps />
    </>
  );
  