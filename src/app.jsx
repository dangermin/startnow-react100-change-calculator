import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      amountDue: '',
      amountGiven: '',
      changeDue: '',
      tweenies: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0,
      dollars: 0,
      cents: 0,

    };
    // update input
    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountGiven = this.handleAmountGiven.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.changeCalc = this.changeCalc.bind(this);
  }

  handleAmountDue(e) {
    this.setState({amountDue: e.target.value});
    console.log(this.state);
  }
  handleAmountGiven(e) {
    this.setState({amountGiven: e.target.value})
  }
  handleReset() {
    this.setState({
      amountDue: '',
      amountGiven: '',
      changeDue: 0,
      tweenies: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0,
      dollars: 0,
      cents: 0,
    });
    this.setState({change: <div className="change-heading"></div>});
    console.log(this.state);
  }



  changeCalc(){
    console.log(this.state);
    const totalOwed = this.state.amountGiven - this.state.amountDue;

    if (totalOwed < 0) {
      const stillOwed = Math.abs(totalOwed).toFixed(2);
      console.log(stillOwed);
      this.setState({change: <div className="alert alert-danger" role="alert">Additional money owed: ${(stillOwed)}</div>});
    }
    // calculate dollars
    if (totalOwed > 0) {
      const totalDue = Math.abs(totalOwed).toFixed(2);
      this.setState({change: <div className="alert alert-success" role="alert">Total change due: ${(totalDue)}</div>});
      console.log(totalOwed);
    }
    if (totalOwed >= 1) {
      this.state.dollars = Math.trunc(totalOwed);
      this.state.cents = this.state.amountDue - this.state.dollars;
      // console.log(this.state.dollars);
    }
    if (this.state.dollars >= 20) {
      this.state.tweenies = Math.trunc(this.state.dollars / 20);
      this.state.dollars = this.state.dollars - (this.state.tweenies * 20);
      // console.log(this.state.dollars);
    }
    if (this.state.dollars >= 10) {
      this.state.tens = Math.trunc(this.state.dollars / 10);
      this.state.dollars = this.state.dollars - (this.state.tens * 10);
      // console.log(this.state.dollars);
    }
    if (this.state.dollars >= 5) {
      this.state.fives = Math.trunc(this.state.dollars / 5);
      this.state.dollars = this.state.dollars - (this.state.fives * 5);
      // console.log(this.state.dollars);
    }
    if (this.state.dollars >= 1) {
      this.state.ones = Math.trunc(this.state.dollars / 1);
      this.state.dollars = this.state.dollars - (this.state.ones * 1);
      // console.log(this.state.dollars);
    }
    //calculate cents
    if (totalOwed <= .99) {
      this.state.cents = Math.round(totalOwed * 100) / 100;
    }
    if (this.state.cents > .24) {
      this.state.cents = Math.round(this.state.cents * 100) / 100;
      this.state.quarters = Math.floor(this.state.cents / .25);
      this.state.cents = this.state.cents - (this.state.quarters * .25);
    }
    if (this.state.cents > .09) {
      this.state.cents = Math.round(this.state.cents * 100) / 100;
      this.state.dimes = Math.floor(this.state.cents / .1);
      this.state.cents = this.state.cents - (this.state.dimes * .1);
    }
    if (this.state.cents > .04) {
      this.state.cents = Math.round(this.state.cents * 100) / 100;
      this.state.nickles = Math.floor(this.state.cents / .05);
      this.state.cents = this.state.cents - (this.state.nickles * .05);
    }
    if (this.state.cents > .001) {
      this.state.cents = Math.round(this.state.cents * 100) / 100;
      this.state.pennies = Math.floor(this.state.cents / .01 + .001);
      this.state.cents = this.state.cents - (this.state.pennies * .25);
    }
    if (isNaN(totalOwed)) {
      this.setState({change: <div className="alert alert-danger" role="alert">Please only enter numeric values!</div>});
      console.log(totalOwed);
    }

  }


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
              {/* $ Due */}
              <p>Amount due for sale.</p>
              <input id="amount-due" className="col-sm-12" placeholder="Amount Due" value={this.state.amountDue} onChange={this.handleAmountDue} />
            </div>
            <div className="panel-body">
              {/* $ Given */}
              <p>Amount recieved for sale.</p>
              <input id="amount-given" className="col-sm-12" placeholder="Amount Given" value={this.state.amountGiven} onChange={this.handleAmountGiven} />
            </div>
            <br/>
            <button type="button" onClick={this.changeCalc} className="btn btn-primary btn-block">Calculate</button>
            <button type="button" onClick={this.handleReset} className="btn btn-success btn-block">Reset</button>
          </div>
          {/* <!-- Output --> */}
          <div id="outputContainer" className="col-sm-7">
            <div>
              <div className="change-heading" >{this.state.change}</div>
            </div>
            {/* <!-- dollarChange --> */}
            <div className="d-flex justify-content-center">
              <div className="change">
                <p><center>Twenties</center></p>
                <center> <p id="twenties-output" className="column">{this.state.tweenies}</p></center>
              </div>
              <div className="change">
                <p><center>Tens</center></p>
                <center><p id="tens-output" className="column">{this.state.tens}</p></center>
              </div>
              <div className="change">
                <p><center>Fives</center></p>
                <center><p id="fives-output" className="column">{this.state.fives}</p></center>
              </div>
              <div className="change">
                <p><center>Ones</center></p>
                <center><p id="dollars-output" className="column">{this.state.ones}</p></center>
              </div>
            </div>
            {/* <-- coinChange --> */}
            <div className="d-flex justify-content-center">
              <div className="change">
                <p><center>Quaters</center></p>
                <center><p id="quarters-output" className="column">{this.state.quarters}</p></center>
              </div>
              <div className="change">
                <p><center>Dimes</center></p>
                <center><p id="dimes-output" className="column">{this.state.dimes}</p></center>
              </div>
              <div className="change">
                <p><center>Nickles</center></p>
                <center><p id="nickles-output" className="column">{this.state.nickles}</p></center>
              </div>
              <div className="change">
                <p><center>Pennies</center></p>
                <center><p id="pennies-output" className="column">{this.state.pennies}</p></center>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

