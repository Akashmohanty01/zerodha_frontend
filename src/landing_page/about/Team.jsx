import React from "react";

export default function Team() {
  return (
    <div className="container ">
      <div className="row  p-3 mt-5   border-top">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row  p-3  text-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6">
          <img
            src="media/images/Akash.jpg"
            alt=""
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Akash Mohanty</h4>
          <h6>MERN developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA </a>/{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
