import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";

const AutoType = (props) => {
  return (
    <>
      <AutoTyping
        active // <boolean>
        textRef={props.text} // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000} // <number>
        delayToDelete={2000} // <number>
      />
      <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      />
    </>
  );
};

export default AutoType;
