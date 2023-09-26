import Template from "../components/template";
import Card from "../components/CardComponent";
import { projects } from "../utils/project";
import { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <Template title="Project">
        <h1 className="text-purple-500 text-2xl mb-4 py-3">Project</h1>
        <p>
          Showcasing my passion for technology, design, and problem-solving
          through code
        </p>
        <div className="flex py-6 flex-wrap justify-between">
          {projects.map((project) => (
            <Card project={project} key={project.title} />
          ))}
        </div>
      </Template>
    );
  }
}
