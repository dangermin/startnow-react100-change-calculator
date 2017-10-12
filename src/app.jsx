import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here

  render() {
    return (
      <div>
      <br/>
      <div className="page-header">
        <h1>Change Calculator</h1>
        <h3 className="tagline">Save your pennies!</h3>
        <hr/>
      </div>
      <br/>

      <div className="container">
        {/* <!-- Input --> */}
        <div className="row">
          <div id="inputContainer" className="col-sm-4">
            <div className="panel panel-heading">Enter amount due and amount given.</div>
            <div className="panel-body">
              <p>Amount due for sale.</p>
              <input id="amount-due" className="col-sm-12" placeholder="Amount Due" />
            </div>
            <div className="panel-body">
              <p>Amount recieved for sale.</p>
              <input id="amount-given" className="col-sm-12" placeholder="Amount Given" />
            </div>
            <br/>
            <button type="button" className="btn btn-primary btn-block">Calculate</button>
          </div>
          {/* <!-- Output --> */}
          <div id="outputContainer" className="col-sm-7">
            <div>
              <div className="alert alert-success" role="alert">Total change due</div>
              {/* <div className="alert alert-danger" role="alert">Additional money owed</div> */}
            </div>
            {/* <!-- Change --> */}
            <div className="d-flex justify-content-center">
              <div className="change">
                <p>
                  <center>Twenties</center>
                </p>
                <center>
                  <p id="twenties-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Tens</center>
                </p>
                <center>
                  <p id="tens-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Fives</center>
                </p>
                <center>
                  <p id="fives-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Ones</center>
                </p>
                <center>
                  <p id="dollars-output" className="column">0</p>
                </center>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="change">
                <p>
                  <center>Quaters</center>
                </p>
                <center>
                  <p id="quarters-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Dimes</center>
                </p>
                <center>
                  <p id="dimes-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Nickles</center>
                </p>
                <center>
                  <p id="nickles-output" className="column">0</p>
                </center>
              </div>
              <div className="change">
                <p>
                  <center>Pennies</center>
                </p>
                <center>
                  <p id="pennies-output" className="column">0</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

