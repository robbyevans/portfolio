import React from "react";
import { RoughNotation } from "react-rough-notation";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <span className="home-page-content">
        <h1 className="title">Hi, i'm Evans 👋🏿👋🏿</h1>
        <p>
          <RoughNotation color="#a30000" type="highlight" show={true}>
            I am a Software Developer 🧑🏿‍💻
          </RoughNotation>
        </p>
        <p>
          Front-end developer for most part ( React). Typescript Nerd, Ruby on
          Rails once in a while. learning Node js.😎
        </p>
        <p>
          Currently a remote developer at{" "}
          <RoughNotation color="#ff7700" type="underline" show={true}>
            Vinhood Italy 🤖 <br />
          </RoughNotation>
        </p>
        <p>
          Trying to build a startup with my friends at
          <RoughNotation color="#ff7700" type="underline" show={true}>
            {" "}
            Mekanic🤞
          </RoughNotation>
        </p>
        <p>
          Technical Writer and passionate about building
          <RoughNotation color="#5dfdcb" type="underline" show={true}>
            {" "}
            awesome stuff 💚💚
          </RoughNotation>
          <br />{" "}
        </p>
        <p>
          Now that we are friends 👀, you have my permission to roam around
          <br /> 👻
        </p>
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
