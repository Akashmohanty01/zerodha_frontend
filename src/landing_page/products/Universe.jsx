import React from "react";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3 mt-5">
          <div>
            <img
              src="media\images\zerodhaFundhouse.png"
              style={{ width: "60%" }}
            />
            <p className="text-muted text-small mt-3 mb-4">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            <img
              src="media\images\streakLogo.png "
              style={{ width: "60%" }}
              className="mt-5"
            />
            <p className="text-muted text-small mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        <div className="col-4 p-3  mt-5">
          <div>
            <img
              src="media\images\sensibullLogo.svg"
              style={{ width: "60%" }} className="mb-3"
            />
            <p className="text-muted text-small mt-3 ">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
            <img
              src="media\images\smallcaseLogo.png "
              style={{ width: "60%" }}
              className="mt-5"
            />
            <p className="text-muted text-small mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>

        <div className="col-4 p-3  mt-5">
          <div>
            <img src="media\images\goldenpiLogo.png" style={{ width: "60%" }} />
            <p className="text-muted text-small mt-3 mb-4">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
            <img
              src="media\images\dittoLogo.png"
              style={{ width: "60%" }}
              className="mt-5"
            />
            <p className="text-muted text-small mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}
