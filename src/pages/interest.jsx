import { Component } from "react";
import Template from "../components/template";

export default class Interest extends Component {
  render() {
    return (
      <Template title="Interest">
        <h1 className="text-purple-500 text-2xl mb-4 py-3">My Interest</h1>
        <p className="mb-4">Showcasing my Interest</p>
        <div className="flex">
          <div className="p-2 w-full rounded lg:w-[49%] border border-2-purple-500">
            <div className="flex bg-slate-500 py-12 rounded justify-center items-center">
              <img src="/icon/code.svg" width="40px" alt="" />
            </div>
            <div className="my-2">
              <h3 className="text-purple-500 font-semibold my-2">
                Programming
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                repellendus, corporis, reiciendis nemo eaque perferendis
                provident magnam dolores harum laboriosam laudantium repellat
                maiores?
              </p>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
