import { Component } from "react";
import Template from "../components/template";

export default class Interest extends Component {
  render() {
    return (
      <Template title="Interest">
        <h1 className="text-purple-500 text-center text-2xl mb-4 py-3">
          My Interest
        </h1>
        <p className="mb-4 text-center">Showcasing my Interest</p>
        <div className="flex justify-center">
          <div className="p-2 w-full rounded lg:w-[49%] border border-2-purple-500">
            <div className="flex bg-slate-500 py-12 rounded justify-center items-center">
              <img src="/icon/code.svg" width="40px" alt="" />
            </div>
            <div className="my-2">
              <h3 className="text-purple-500 font-semibold my-2">
                Programming
              </h3>
              <p>
                I am very interested in the digital field, especially
                programming because I can innovate and create work with lines of
                code, and with programming I can help people create landing page
                websites to promote their products.
              </p>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
