import { Component } from "react";
import Template from "../components/template";

export default class Interest extends Component {
  render() {
    return (
      <Template title="Interest">
        <h1 className="text-purple-500 text-center text-2xl mb-4 py-3">
          My Course Completed
        </h1>
        <p className="mb-4 text-center">Showcasing my Completed Curse</p>
        <div className="flex flex-wrap justify-between">
          <div className="p-2 w-full rounded lg:w-[49%] border border-2-purple-500">
            <img src="/images/hacktive.png" alt="" />
            <div className="my-2">
              <h3 className="text-purple-500 font-semibold my-2">
                Kampus Merdeka - Hacktive8 - React and React Native for Front
                End Developer
              </h3>
              <p>
                I am very happy to take this training, because here I was taught
                how to use the ReactJS and React Native frameworks for frontend
                development, here I was also taught Redux as state management.
              </p>
            </div>
          </div>
          <div className="p-2 w-full rounded lg:w-[49%] border border-2-purple-500">
            <img src="/images/bangkit.jpg" alt="" />

            <div className="my-2">
              <h3 className="text-purple-500 font-semibold my-2">
                Kampus Merdeka - Bangkit 2024 Batch 2 - Machine Learning
              </h3>
              <p>
                Joining Bangkit Academy 2024 Batch 2 with the Machine Learning
                pathway provided a very valuable experience. This training
                taught me the basics of Machine Learning, as well as how to
                implement algorithms using Python and TensorFlow. I learned how
                to build and train deep learning models such as neural networks,
                CNNs, and RNNs for image and sequence data processing. With
                in-depth materials, mentoring sessions, and practical projects,
                I was able to deepen my understanding and skills in this field.
                Although the learning process was challenging, this experience
                opened up many opportunities and provided a mindset to continue
                growing. Thank you Bangkit Academy for this opportunity, which
                is very beneficial for my career development in the technology
                world.
              </p>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
