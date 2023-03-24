import "./footer.css";

function Footer() {
  return (
    <>
      <div className="mainFooterContainer">
        <div className="topFooterItems">
          <h1>
            do you want to step into the
            <br /> future before others
          </h1>
          <button className="futurebutton">request early access</button>
        </div>
        <div className="bottomFooterItems">
          <div className="leftFooterContainer">
            <div className="leftTitle">
              <h1>GPT 3</h1>
              <p>
                this is all a test when <br /> we want things to be
                done 
              </p>
            </div>
          </div>
          <div className="rightFooterContainer">
            <div className="rightColumn1">
              <h1>links</h1>
              <ul>
                <li>Overons</li>
                <li>social media</li>
                <li>counters</li>
                <li>contacts</li>
              </ul>
            </div>
            <div className="rightColumn1">
              <h1>comapny</h1>
              <ul>
                <li>Overons</li>
                <li>social media</li>
                <li>counters</li>
                <li>contacts</li>
              </ul>
            </div>
            <div className="rightColumn1">
              <h1>get in touch</h1>
              <ul>
                <li>Overons</li>
                <li>social media</li>
                <li>counters</li>
                <li>contacts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRightSession">
           <p> &copy; 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
