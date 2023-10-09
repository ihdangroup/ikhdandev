import { Component } from "react";
import Template from "../components/template";
import { certificate } from "../utils/certivicate";

export default class Awards extends Component {
  render() {
    return (
      <Template title="Awards">
        <h1 className="text-center text-purple-500 text-2xl mb-4 py-3">
          My Awards and Setificate
        </h1>
        <p className="mb-4 text-center">Showcasing my sertivicate</p>
        <div className="flex flex-wrap w-full justify-between">
          {certificate.map((serti) => (
            <div className="flex p-2 my-2 w-full bg-[#333] rounded lg:w-[49%]">
              <div className="w-[30%] flex items-center justify-center">
                <img src={`/icon/${serti.icon}`} width="50px" alt="" />
              </div>
              <div className="bg-slate-700 w-[70%] p-4 rounded">
                <h4 className="font-bold">{serti.name}</h4>
                <p className="my-1">{serti.institut}</p>
                <a
                  href={`${serti.link}`}
                  className="font-bold text-purple-500 text-sm"
                  target="_blank"
                >
                  Show Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </Template>
    );
  }
}
