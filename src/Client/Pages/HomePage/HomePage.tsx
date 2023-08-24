import React from "react";
import { RoughNotation } from "react-rough-notation";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <h1 className="title">Hi i'm Kiprop 👋🏿👋🏿</h1>

      <p>
        <RoughNotation color="#a30000" type="highlight" show={true}>
          I am a Software Engineer 🧑🏿‍💻
        </RoughNotation>
      </p>
      <span>
        Front-end developer for most part ( React). Typescript Nerd, Ruby on
        Rails once in a while. <br />
        <span>
          Front-end developer at
          <RoughNotation color="#ff7700" type="underline" show={true}>
            Vinhood Italy 🤖
          </RoughNotation>
        </span>
        Trying to build a startup with my friends at
        <RoughNotation color="#ff7700" type="underline" show={true}>
          Mec🤞
        </RoughNotation>
        Technical Writer at{" "}
        <RoughNotation color="#ff7700" type="underline" show={true}>
          Section
        </RoughNotation>{" "}
        and passionate about building awesome stuff 💚💚 Now that we are friends
        👀, you have my permission to roam around 👻
      </span>
      <blockquote>
        {" "}
        <p className="reset">
          Hint: Press the Command Button or ⌘K to Get Started
        </p>
      </blockquote>
    </div>
  );
};

export default HomePage;
