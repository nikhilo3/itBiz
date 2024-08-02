import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import {
  ArrowDropDown,
  Book,
  Brush,
  CastForEducation,
  DoneAll,
  Language,
  LibraryBooks,
  MenuOpen,
  PhoneAndroid,
  TravelExplore,
} from "@mui/icons-material";

const NavBar = ({ contactPage , aboutPage }) => {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const threshold = 50;

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > threshold;
      if (scrolled) {
        setIsScrolled(scrolled);
      } else {
        setIsScrolled("");
      }
    });
  }, []);

  return (
    <>
      <div
        className={`navbar mb-1 w-full fixed top-0 z-50  text-white ${
          isScrolled || contactPage || aboutPage ? "bg-black/95 shadow-md" : "bg-transparent "
        }`}
        id="mainNavbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="flex items-center">
                <img
                  className="rounded m-4 h-8 sm:h-10 w-auto"
                  src={logo}
                  alt="logo"
                />
                <span className="text-lg font-bold z-10">ITBiz</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <MenuOpen />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative ">
                <button
                  type="button"
                  className={`
                   group rounded-md inline-flex items-center text-base font-medium text-white pb-8' ${
                     isScrolled
                       ? "hover:text-gray-400"
                       : "bg-transparent hover:text-white/75"
                   }`}
                  onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                >
                  <span>Services</span>

                  <ArrowDropDown
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                  />
                </button>

                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : "hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="/web-development"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <Language className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Website Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/seo"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <TravelExplore className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Search Engine optimization
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/digital-marketing"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Digital-Marketing
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Your customers' data will be safe and secure.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/app-development"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <PhoneAndroid className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Application-Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Connect with third-party tools that you're already
                            using.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/ul-ux-design"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <Brush className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            UI/UX Design
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
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
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="ml-3">Watch Demo</span>
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="ml-3">Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/about"
                className={`text-base font-medium text-white ${
                  isScrolled
                    ? " hover:text-gray-400"
                    : " bg-transparent hover:text-white/75"
                }`}
              >
                About
              </a>
              <a
                href="/contact"
                className={`text-base font-medium text-white ${
                  isScrolled
                    ? " hover:text-gray-400"
                    : " bg-transparent hover:text-white/75"
                }`}
              >
                Contact
              </a>
              <div className="relative">
                <button
                  type="button"
                  className={`group rounded-md inline-flex items-center text-base font-medium text-white${
                    isScrolled
                      ? " hover:text-gray-400"
                      : "bg-transparent hover:text-white/75"
                  }`}
                  onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                >
                  <span>Resources</span>

                  <ArrowDropDown
                    className={
                      flyerTwo === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                  />
                </button>

                <div
                  onMouseLeave={() => setFlyerTwo(false)}
                  className={
                    flyerTwo
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="/blog"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <Book className="text-blue-600" />

                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Blog
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered in our forums or
                            contact support.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/case-study"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <CastForEducation className="text-blue-600" />

                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Case Studies
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn how to maximize our platform to get the most
                            out of it.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/e-books"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <LibraryBooks className="text-blue-600" />

                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            E-Books
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            See what meet-ups and other events we might be
                            planning near you.
                          </p>
                        </div>
                      </a>
                      <a
                        href="/complate-project"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <DoneAll className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Complate Project
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Understand how we take your privacy seriously.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                          <li className="text-base truncate">
                            <a
                              href="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Boost your conversion rate
                            </a>
                          </li>
                          <li className="text-base truncate">
                            <a
                              href="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              How to use search engine optimization to drive
                              traffic to your site
                            </a>
                          </li>
                          <li className="text-base truncate">
                            <a
                              href="/"
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              Improve your customer experience
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <a
                          href="/"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {" "}
                          View all posts <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button className="btn bg-[#ff3e34] text-white lg:ml-8 font-semibold px-3 py-1 rounded duration-500 lg:static">
                Schedule A Meeting Call
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 z-20 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "hidden scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="rounded m-4 h-8 sm:h-10 w-auto"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/web-development"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <Language className="text-blue-600" />

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Website Development
                    </span>
                  </a>
                  <a
                    href="/seo"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <TravelExplore className="text-blue-600" />

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Search Engine optimization
                    </span>
                  </a>
                  <a
                    href="/digital-marketing"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Digital-Marketing
                    </span>
                  </a>
                  <a
                    href="/app-development"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <PhoneAndroid className="text-blue-600" />

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Application-Development
                    </span>
                  </a>
                  <a
                    href="/ul-ux-design"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <Brush className="text-blue-600" />

                    <span className="ml-3 text-base font-medium text-gray-900">
                      UI/UX Design
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </a>

                <a
                  href="/blog"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>
                <a
                  href="/case-study"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Case Studies
                </a>
                <a
                  href="/e-books"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  E-Books
                </a>
                <a
                  href="/complate-project"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Complate Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
