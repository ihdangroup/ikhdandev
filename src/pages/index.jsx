import { Component } from "react";
import { NavLink } from "react-router-dom";
import Code from "../components/Code";
import Template from "../components/template";

export default class Portfolio extends Component {
  render() {
    return (
      <Template title="Home">
        <div className="flex items-center flex-wrap">
          <div className="w-full text-left pt-6 lg:w-1/2">
            <span className="text-xl">Hello World 👋, I am</span>
            <h1 className="my-4 text-3xl">Ikhdan Maghfuron</h1>
            <ul className="slide">
              <li>
                <span className="text-xl pb-4 text-purple-400">
                  Frontend Developer
                </span>
              </li>
              <li>
                <span className="text-xl pb-4 text-purple-400">Student</span>
              </li>
            </ul>
            <p>
              Hello, my name is ikhdan, I am a student at peradaban university,
              I have experience in developing website appearance especially
              using React JS technology, I like problem solving and programming.
            </p>
            <p className="my-4">Let's Connect</p>
            <div className="flex items-center">
              <a href="https://www.tiktok.com/@ikh_dn" target="_blank">
                <img src="/icon/tiktok.svg" width="50px" alt="" />
              </a>
              <a
                href="https://id.linkedin.com/in/ikhdan-maghfuron-8952a4220"
                target="_blank"
                className="mx-3"
              >
                <img src="/icon/linkedin.svg" width="38px" alt="" />
              </a>
              <a href="https://github.com/ihdangroup" target="_blank">
                <img src="/icon/github.svg" width="38px" alt="" />
              </a>
            </div>
            <NavLink to="/project">
              <button className="py-2 my-6 px-4 bg-purple-500 rounded">
                My Project
              </button>
            </NavLink>
          </div>
          <Code />
        </div>
      </Template>
    );
  }
}
