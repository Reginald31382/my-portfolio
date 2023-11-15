import React from "react";
import Model from "./Model";
import Drink from "../images/DrinkAppMobile.png";

function Portfolio() {
  return (
    <>
      <Model
        paragraph={"Angular"}
        title={"My Portfolio"}
        img={Drink}
        paragraph1={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur. Maecenas pharetra convallis posuere morbi leo. Non nisi est sit amet facilisis magna etiam. Et egestas quis ipsum suspendisse ultrices. Mauris rhoncus aenean vel elit scelerisque. Duis at tellus at urna condimentum. Felis eget nunc lobortis mattis aliquam. Eget felis eget nunc lobortis mattis aliquam faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula."
        }
        paragraph2={"That's okay. Yo mama like it."}
      />
      <div>
        <img src={Drink} className="drink" />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis
          dis parturient montes nascetur. Maecenas pharetra convallis posuere
          morbi leo. Non nisi est sit amet facilisis magna etiam. Et egestas
          quis ipsum suspendisse ultrices. Mauris rhoncus aenean vel elit
          scelerisque. Duis at tellus at urna condimentum. Felis eget nunc
          lobortis mattis aliquam. Eget felis eget nunc lobortis mattis aliquam
          faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam
          vehicula."
        </p>
      </div>
    </>
  );
}

export default Portfolio;
