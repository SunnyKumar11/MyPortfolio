import PropTypes from "prop-types";
import React, { Component } from "react";

export class Footers extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <div className="hero py-24 bg-[#0A192F] text-gray-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <p className="text-xl font-bold py-3">
                <span className="text-rose-500">03.</span> What's Next?
              </p>
              <h1 className="text-6xl font-bold">Get In Touch</h1>
              <p className="py-6">
              "If given a chance I will do my best for the success of the organization and the decision of hiring me will be the right decision"
              </p>
              <a href="">
                <button className="border py-3 rounded-lg animate-pulse font-semibold bg-[#0A192F] border-green-500 text-green-500 px-9">
                  Say Hello
                </button>
              </a>
              <div className="pt-24 text-center">
                <h1 className="text-xl font-bold">Developed by Sunny with</h1> <span className="t text-5xl text-red-500">♥</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footers;
