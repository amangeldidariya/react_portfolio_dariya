import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Являюсь студентом 3-го курса <br/> по специальности: 'Digital management and design'",
          "университетa Narxoz <br /> -school of digital technologies "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
