import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "./images/avatar.jpeg";
import react from "./images/logo192.png";
import HTML from "./images/HTML-logo.png";
import CSS from "./images/CSS-logo.png";
import nodejs from "./images/nodejs-logo.svg";
import mongodb from "./images/mongodb-logo.svg";
import flutter from "./images/flutter-logo.png";
import openai from "./images/openai-logo.png";
import bootstrap from "./images/bootstrap-logo.png";
import vite from "./images/vite-icon.png";
import proje1 from "./images/project-image-1.png";
import proje2 from "./images/project-image-2.png";
import proje3 from "./images/project-image-3.png";
import proje4 from "./images/project-image-4.png";
import proje42 from "./images/project-image-4-2.png";
import React, { useState } from "react";
import "./App.css";
import CoffeeButton from "./coffeeButton";

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dogan.kubranurr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

const downloadCV = () => {
    const fileUrl = "/My_CV.pdf "; 
    const fileName = "Kubranur_dogan_CV.pdf"; 

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container space-top">
      <div className="available-btn">
        <ul>
          <li>AVAILABLE FOR WORK</li>
        </ul>
      </div>
      <span className="background-section bg-1"></span>
      <span className="background-section bg-2"></span>
      <span className="background-section bg-3"></span>
      <span className="background-section bg-4"></span>
      <span className="background-section bg-5"></span>
      <span className="background-section bg-6"></span>
      <span className="background-section bg-7"></span>
      <CoffeeButton/>


      <div className="row m-5">
        <div className="col-md-9 col-sm-12">
          <h1 className="pb-3">Hi, I'm Kubranur Dogan!</h1>
          <p className="text-justify">
            Hi! I’m a computer engineering graduate passionate about web development and new technologies.
            I love learning, solving problems and working as part of a creative team.
            <br></br> I’m always ready to take on new challenges and grow in the tech world.{" "}
          </p>
          <div className=" d-flex justify-content-start align-items-center gap-3">
            <button className="btn btn-type" onClick={downloadCV}>My CV</button>
          <button
            className={`btn btn-type2  ${copied ? "copied" : ""}`}
            onClick={copyEmail}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
          </div>
          
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="avatar-border p-3">
            <img
              src={avatar}
              alt="Avatar"
              className="img-fluid img-round"
              width="150"
            />
          </div>
        </div>
      </div>
      <div className="row tech-stack container">
        <div className="col-md-2 tech-logo ">
          <img
            src={HTML}
            alt="html-logo"
            className="img-fluid logo-hover"
            
          />
        </div>

        <div className="col-md-2 tech-logo ">
          <img
            src={CSS}
            alt="css-logo"
            className="img-fluid logo-hover "
            
          />
        </div>
        <div className="col-md-2 tech-logo ">
          <img
            src={react}
            alt="react-logo"
            className="img-fluid logo-hover img-react"
            
          />
        </div>
        <div className="col-md-2 tech-logo ">
          <img
            src={nodejs}
            alt="nodejs-logo"
            className="img-fluid logo-hover "
           
          />
        </div>
        <div className="col-md-2 tech-logo ">
          <img
            src={mongodb}
            alt="mongodb-logo"
            className="img-fluid logo-hover "
            
          />
        </div>
        <div className="col-md-2 tech-logo ">
          <img
            src={flutter}
            alt="flutter-logo"
            className="img-fluid logo-hover"
            
          />
        </div>
      </div>
      <div className="padding-y padding-x">
        <h2 className="list-mark pb-3">My Works</h2>
        <div className="row projects">
          <div className="col-md-6 col-sm-12">
            <div className="project-card">
              <img
                src={proje1}
                alt="proje-img"
                className="img-fluid project-image"
              />
              <button
                type="button"
                class="detail-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View Details
              </button>
              <div
                class="modal fade modal-lg"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Movie Searching With AI
                      </h1>
                    </div>
                    <div class="modal-body ">
                      <div className="pb-3 px-3">
                        <img
                          src={proje1}
                          alt="proje-img"
                          className="img-fluid "
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="modal-text">
                          An AI-powered movie recommendation web app that
                          leverages OpenAI Embeddings to understand the semantic
                          meaning behind user input.<br></br> It converts
                          natural language queries into vector representations,
                          calculates similarity scores, and lists the top 10
                          most relevant movies based on context rather than
                          simple keyword matching.
                        </p>
                        <div>
                          <h5>Technologies Used</h5>
                          <ul>
                            <li>
                              <img
                                src={bootstrap}
                                alt="bootstrap-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>
                            <li>
                              <svg
                                className="h-full max-w-full"
                                viewBox="50 1 206 32.7"
                              >
                                <defs>
                                  <linearGradient
                                    id="grad1"
                                    x1="0%"
                                    y1="16%"
                                    x2="100%"
                                    y2="84%"
                                  >
                                    <stop
                                      offset="0%"
                                      style={{
                                        stopColor: "rgb(71,136,255)",
                                        stopOpacity: 1,
                                      }}
                                    ></stop>
                                    <stop
                                      offset="100%"
                                      style={{
                                        stopColor: "rgb(255,93,93)",
                                        stopOpacity: 1,
                                      }}
                                    ></stop>
                                  </linearGradient>
                                </defs>
                                <g
                                  transform="matrix(0.9137426614761353,0,0,0.9137426614761353,52.99999956429354,-5.964909421855872)"
                                  fill="url(#grad1)"
                                >
                                  <path d="M19.6 12 l-7 14 l7 13.96 l-7 0 l-5.6 -11.16 l0 11.16 l-7 0 l0 -27.96 l7 0 l0 11.16 l5.6 -11.16 l7 0 z M40.396 18.16 l-11.2 0 l0 4.76 l9.8 0 l0 6.16 l-9.8 0 l0 4.76 l11.2 0 l0 6.16 l-18.2 0 l0 -28 l18.2 0 l0 6.16 z M61.19200000000001 18.16 l-11.2 0 l0 4.76 l9.8 0 l0 6.16 l-9.8 0 l0 4.76 l11.2 0 l0 6.16 l-18.2 0 l0 -28 l18.2 0 l0 6.16 z M76.388 12 l7 0 l0 27.96 l-7 0 l-5.6 -13.96 l0 13.96 l-7 0 l0 -27.96 l7 0 l5.6 14 l0 -14 z M85.98400000000001 24.48 l18 0 l0 7.04 l-18 0 l0 -7.04 z M126.14000000000001 21.84 l-7 0 l0 -1.16 c0 -1.4 -0.6 -1.68 -1.68 -1.68 l-2.2 0 c-1.32 0 -1.68 0.36 -1.68 2.2 c0 2.6 12.56 0.8 12.56 7.8 l0 5.12 c0 3.4 -2.44 5.84 -5.88 5.84 l-2.48 0 l-5.32 0 c-3.44 0 -5.88 -2.44 -5.88 -5.84 l0 -3.96 l7 0 l0 1.12 c0 1.4 0.6 1.68 1.68 1.68 l2.2 0 c1.08 0 1.68 -0.28 1.68 -1.68 l-0.04 -0.52 c0 -2.16 -12.52 -0.76 -12.52 -7.76 l0 -5.12 c0 -3.44 2.44 -5.88 5.88 -5.88 l2.52 0 l5.28 0 c3.44 0 5.88 2.44 5.88 5.88 l0 3.96 z M144.096 33.8 l0 6.16 l-15.36 0 l0 -27.96 l7 0 l0 21.8 l8.36 0 z M146.692 12 l7 0 l0 27.96 l-7 0 l0 -27.96 z M170.008 12 c3.44 0 5.88 2.44 5.88 5.88 l0 16.24 c0 3.4 -2.44 5.84 -5.88 5.84 l-13.72 0 l0 -27.96 l13.72 0 z M168.888 31.28 l0 -10.6 c0 -1.4 -0.6 -1.68 -1.68 -1.68 l-3.92 0 l0 13.96 l3.92 0 c1.08 0 1.68 -0.28 1.68 -1.68 z M196.684 18.16 l-11.2 0 l0 4.76 l9.8 0 l0 6.16 l-9.8 0 l0 4.76 l11.2 0 l0 6.16 l-18.2 0 l0 -28 l18.2 0 l0 6.16 z M218.88 25.72 c0 2.52 -1.28 4.48 -3.36 5.4 l3.36 8.84 l-7 0 l-3.16 -8.36 l-2.44 0 l0 8.36 l-7 0 l0 -27.96 l13.72 0 c3.44 0 5.88 2.44 5.88 5.88 l0 7.84 z M211.88 22.92 l0 -2.24 c0 -1.4 -0.6 -1.68 -1.68 -1.68 l-3.92 0 l0 5.6 l3.92 0 c1.08 0 1.68 -0.28 1.68 -1.68 z"></path>
                                </g>
                              </svg>
                            </li>
                            <li>
                              <img
                                alt="The Movie Database (TMDB)"
                                className="rm-Logo-img Header-logo-img3YvV4lcGKkeb p-2"
                                src="https://files.readme.io/29c6fee-blue_short.svg"
                              />
                            </li>

                            <li>
                              <img
                                src={react}
                                alt="react-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>
                            <li>
                              <img
                                src={openai}
                                alt="openai-logo"
                                className="img-fluid logo-hover m-2"
                                width="40"
                              />
                            </li>
                            <li>
                              <img
                                src={nodejs}
                                alt="nodejs-logo"
                                className="img-fluid logo-hover m-2"
                                width="70"
                              />
                            </li>
                            <li>
                              <img
                                src={mongodb}
                                alt="mongodb-logo"
                                className="img-fluid logo-hover m-2"
                                width="80"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/kubranurdogann/movie_search_with_AI",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type2 d-flex align-items-center  p-2"
                      >
                        <svg
                          className="source-code-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        Source Code
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://movie-search-with-ai.vercel.app/",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type  d-flex align-items-center  p-2"
                      >
                        <svg
                          className="w-demo-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <span className="project-header">Movie Searching With AI</span>
            </div>
            <div className="project-card">
              <img
                src={proje3}
                alt="proje-img"
                className="img-fluid project-image"
              />
              <button
                type="button"
                class="detail-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                View Details
              </button>
              <div
                class="modal fade modal-lg"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Dessert Shop - E-commerce Application
                      </h1>
                    </div>
                    <div class="modal-body ">
                      <div className="pb-3 px-3">
                        <img
                          src={proje3}
                          alt="proje-img"
                          className="img-fluid "
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="modal-text">
                          Dessert Shop is a visually appealing, design-focused
                          e-commerce web application where users can explore and
                          purchase delicious desserts. Built with React,
                          TypeScript, and Vite, the project emphasizes
                          responsive and interactive UI elements — featuring
                          hover animations, adaptive images, and a clean modern
                          layout. It includes shopping cart functionality with
                          quantity control, performance optimization with Vite,
                          and a fully responsive Bootstrap-based design tailored
                          for an engaging user experience.
                        </p>
                        <div>
                          <h5>Technologies Used</h5>
                          <ul>
                            <li>
                              <img
                                src={bootstrap}
                                alt="bootstrap-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>

                            <li>
                              <img
                                src={vite}
                                alt="vite-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>

                            <li>
                              <img
                                src={react}
                                alt="react-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/kubranurdogann/desserts-app-with-reactjs",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type2 d-flex align-items-center  p-2"
                      >
                        <svg
                          className="source-code-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <span className="project-header">
                Dessert Shop - E-commerce Application
              </span>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="project-card">
              <img
                src={proje2}
                alt="proje-img"
                className="img-fluid project-image"
              />
              <span className="project-header">
                Full-Stack Bookstore Application
              </span>
              <button
                type="button"
                class="detail-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                View Details
              </button>
              <div
                class="modal fade modal-lg"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Full-Stack Bookstore Application
                      </h1>
                    </div>
                    <div class="modal-body ">
                      <div className="pb-3 px-3">
                        <img
                          src={proje2}
                          alt="proje-img"
                          className="img-fluid "
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="modal-text">
                          A modern full-stack web application designed for an
                          online bookstore. Built with React, TypeScript,
                          Node.js, and MongoDB, it provides a seamless and
                          secure shopping experience. Key features include user
                          authentication, dynamic book listing, shopping cart
                          management, and real-time search by title. <br></br>
                          The homepage highlights best-selling books, while an
                          integrated contact form allows users to send messages
                          directly stored in the database. The project follows a
                          clean architecture, separating the React frontend and
                          Node.js backend for scalability and maintainability.
                        </p>
                        <div>
                          <h5>Technologies Used</h5>
                          <ul>
                            <li>
                              <img
                                src={bootstrap}
                                alt="bootstrap-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>

                            <li>
                              <img
                                src={react}
                                alt="react-logo"
                                className="img-fluid logo-hover"
                                width="45"
                              />
                            </li>

                            <li>
                              <img
                                src={nodejs}
                                alt="nodejs-logo"
                                className="img-fluid logo-hover m-2"
                                width="70"
                              />
                            </li>
                            <li>
                              <img
                                src={mongodb}
                                alt="mongodb-logo"
                                className="img-fluid logo-hover m-2"
                                width="80"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/kubranurdogann/Bookstore-Website",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type2 d-flex align-items-center  p-2"
                      >
                        <svg
                          className="source-code-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        Source Code
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/posts/activity-7353758351089897473-7N6G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSayqQBE_78fv1TjJKcVxQKDVXAQ0bwn9U",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type  d-flex align-items-center  p-2"
                      >
                        <svg
                          className="w-demo-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src={proje4}
                alt="proje-img"
                className="img-fluid project-image"
              />
              <span className="project-header">Coffe Shop App</span>
              <button
                type="button"
                class="detail-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                View Details
              </button>
              <div
                class="modal fade modal-lg"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        ☕Coffe Shop App
                      </h1>
                    </div>
                    <div class="modal-body ">
                      <div className="pb-3 px-3">
                        <img
                          src={proje42}
                          alt="proje-img"
                          className="img-fluid "
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="modal-text">
                          This Flutter-based mobile application offers a smooth
                          and modern coffee shopping experience. It features
                          secure user authentication and real-time cart
                          management powered by Firebase Authentication and
                          Cloud Firestore. <br></br>Users can browse various
                          coffee types, view details like price and ingredients,
                          and add, update, or remove items from their personal
                          cart — all synced across devices in real time. The app
                          also displays user profile information such as name
                          and email, ensuring a personalized experience with
                          dynamic data refresh on login.
                        </p>
                        <div>
                          <h5>Technologies Used</h5>

                          <img
                            src={flutter}
                            alt="flutter-logo"
                            className="img-fluid logo-hover"
                            width="75"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/kubranurdogann/Flutter-Coffee-Shop-App",
                            "_blank"
                          )
                        }
                        type="button"
                        class="btn btn-type2 d-flex align-items-center  p-2"
                      >
                        <svg
                          className="source-code-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="currentColor"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-type"
            onClick={() =>
              window.open(
                "https://github.com/kubranurdogann?tab=repositories",
                "_blank"
              )
            }
          >
            For More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
