import React from "react";
import PropTypes from "prop-types";
import AutoTyping, { BlinkCursor } from "react-auto-typing";

const AutoType = ({ text }) => {
  return (
    <>
      <AutoTyping
        active // <boolean>
        textRef={text} // <string>
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

AutoType.propTypes = {
  text: PropTypes.string,
};

export default AutoType;
