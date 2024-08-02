import React from "react";
import "../../../assets/css/Services.css";
import {
  Brush,
  Language,
  PhoneAndroid,
  TravelExplore,
} from "@mui/icons-material";

function Services() {
  return (
    <>
      <h1 className="text-black font-serif font-bold mt-[2rem] mb-[4rem]">
        Our Services
      </h1>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="my-[1.5rem] md:mt-[3rem] md:mb-[4rem] lg:my-10">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <Language
                    style={{ height: "50px", width: "50px" }}
                    className="icon text-blue-600"
                  />
                </div>
                <h4>Website Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[1.5rem] md:mt-[3rem] md:mb-[4.5rem] lg:my-10">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <PhoneAndroid
                    style={{ height: "50px", width: "50px" }}
                    className="text-blue-600 icon"
                  />
                </div>
                <h4>Application Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[1.5rem] md:mt-[3rem] md:mb-[4.5rem] lg:my-10">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <TravelExplore
                    style={{ height: "50px", width: "50px" }}
                    className="text-blue-600 icon"
                  />
                </div>
                <h4>Search Engine Optimzation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[1.5rem] md:mt-[3rem] md:mb-[4.5rem] lg:my-10">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <Brush
                    style={{ height: "50px", width: "50px" }}
                    className="text-blue-600 icon"
                  />
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[1.5rem] md:mt-[3rem] md:mb-[4.5rem] lg:my-10">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <svg
                    style={{ height: "50px", width: "50px" }}
                    className="flex-shrink-0 text-blue-600 icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4>Marketing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                  aut tempore cum iste nesciunt repudiandae sapiente, et
                  suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
