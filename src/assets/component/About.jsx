import PropTypes from "prop-types";
import React, { Component } from "react";
import img from "../img/sunny.jpg";

export class About extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        {" "}
        <div class="flex flex-col-reverse sm:flex-row items-center overflow-hidden bg-[#0A192F] text-gray-100  sm:py-10 sm:pr-24">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-full ">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-xl font-semibold leading-7 text-green-500 pt-9">
                    <span className="text-rose-500">01.</span> About Me .......
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl">
                    A better workflow
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-400">
                    Hello! My name is{" "}
                    <span className="text-green-500 font-semibold">
                      Sunny Kumar
                    </span>{" "}
                    and I enjoy creating things that live on the internet. My
                    interest in web development started back in 2022 when I just
                    entered in my college. At that time I learned the basics
                    about HTML & CSS and it's look like macgic for me!
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-400">
                    Fast-forward to today, and I’ve the privilege of working as{" "}
                    <span className="text-green-500 font-semibold">
                      {" "}
                      a freelancer
                    </span>
                    . My main focus these days is to make myself more capaible
                    to give my best result.
                  </p>

                  <p class="mt-6 text-lg leading-8 text-gray-400">
                    Currently, I also Learning{" "}
                    <span className="text-green-500 font-semibold">
                      javascript & React
                    </span>{" "}
                    so that covers everything you need from me as a fullstack
                    web-developer.
                  </p>

                  <p class="mt-6 text-lg leading-8 text-gray-400">
                    Here are a few technologies I’ve been working with recently:
                  </p>

                  <div className="flex justify-around pb-9">
                    <div>
                      <p class="mt-6 text-lg leading-8 ">
                        <ul className="list-disc text-green-500 font-semibold">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>javascript</li>
                        </ul>
                      </p>
                    </div>
                    <div>
                      <p class="mt-6 text-lg leading-8 ">
                        <ul className="list-disc text-green-500 font-semibold">
                          <li>Node Js</li>
                          <li>React Js</li>
                          
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" opacity-50 py-6 border-2 rounded-t-full border-dashed border-rose-600 px-6 hover:scale-105 hover:animate-bounce ">
            <img
              src={img}
              alt=""
              srcset=""
              className="w-36 sm:w-72 rounded-t-full "
            />
          </div>
        </div>
      </>
    );
  }
}

export default About;
