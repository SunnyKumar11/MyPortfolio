import PropTypes from "prop-types";
import React, { Component } from "react";
import img2 from "../img/file.svg";
import git from "../img/github.svg";
import proj1 from "../img/proj1.png";
import proj2 from "../img/proj2.png";
import proj3 from "../img/proj3.png";
import proj4 from "../img/proj4.png";
import proj5 from "../img/proj5.png";
import proj6 from "../img/proj6.png";
import proj7 from "../img/proj7.png";
import proj8 from "../img/proj8.png";
import proj9 from "../img/proj9.png";

export class Cards extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <section className="bg-[#0A192F] text-gray-100 sm:p-20 p-9 ">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl font-bold text-green-500 hover:underline underline-offset-8">
              <span className="text-rose-500">02.</span> Some Things I've Build
            </h1>
            <hr className="hidden sm:block w-96 h-px my-8 bg-gray-100  dark:bg-gray-700 " />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-9 animate-pulse">

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" className=""/>
                  </a>

                  <a href="https://sunnylearning.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    01.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Student Learning Web Page <br />#HTML #Tailwind Css #Responsive</h3>
              </div>
              <figure>
                <img src={proj1} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning2.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    02.
                  </span>
                </h2>
                <h3 className=" text-gray-400">India Tourism Web Page <br />#HTML #Tailwind Css #Responsive</h3>
              </div>
              <figure>
                <img src={proj2} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning3.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    03.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Street Style Landing Page <br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj3} alt="Shoes" />
              </figure>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-9 animate-pulse">

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning4.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    04.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Food Restaurant Home Page<br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj4} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning5.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    05.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Law Home Page <br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj5} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning6.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    06.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Digital Marketing Home Page<br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj6} alt="" />
              </figure>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-9 animate-pulse">

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning7.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    07.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Crypto Landing Page<br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj7} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning8.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    08.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Plant Home Page <br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj8} alt="" />
              </figure>
            </div>

            <div className="card w-80 bg-[#112240] shadow-xl mt-16 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#">
                    <img src={img2} alt="" className="" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/SunnyKumar11">
                    <img src={git} alt="" srcset="" />
                  </a>

                  <a href="https://sunnylearning9.netlify.app/">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      srcset=""
                      className="w-12 rounded-full"
                    />
                  </a>
                </div>
              </div>
              <hr className="hidden sm:block w-66 h-px mt-4 bg-gray-100  dark:bg-gray-700 " />
              <div className="card-body px-0">
                <h2 className="card-title">
                  Project{" "}
                  <span className="text-[#5CF5D5] hover:text-rose-500">
                    09.
                  </span>
                </h2>
                <h3 className=" text-gray-400">Product Home Page<br />#HTML #Css</h3>
              </div>
              <figure>
                <img src={proj9} alt="" />
              </figure>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cards;
