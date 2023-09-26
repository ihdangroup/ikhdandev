import { Component } from "react";
import Template from "../components/template";
import { skills } from "../utils/skills";

export default class Skills extends Component {
  render() {
    return (
      <Template title="Skill">
        <h1 className="text-purple-500 text-2xl mb-4 py-3">Skill</h1>
        <p>Showcasing my Skills in programming</p>
        <div className="flex text-center mt-8 justify-between flex-wrap">
          {skills.map((skill) => (
            <div key={skill.tech} className="my-2 w-[32%] lg:w-[24%]">
              <div className="flex items-center justify-center p-4 bg-green-800 rounded">
                <img src={`/icon/${skill.images}`} width="70px" alt="" />
              </div>
              <div className="p-4 bg-[#333]">
                <h3 className="text-purple-500 font-bold">{skill.tech}</h3>
              </div>
            </div>
          ))}
        </div>
      </Template>
    );
  }
}
