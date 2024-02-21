import PropTypes from "prop-types";

import styles from "./DrumPad.module.css";
import { useRef } from "react";

function getAudioUrl(padName) {
  return new URL(`../assets/${padName}.mp3`, import.meta.url).href;
}

export default function DrumPad({ padName, padClick }) {
  const audioPath = getAudioUrl(padName);
  const uniqueId = `pad${padName}`;
  const padRef = useRef(null);

  return (
    <div
      className={styles.drumPad}
      id={uniqueId}
      onClick={(event) => {
        padRef.current.play();
        padClick(event);
      }}
    >
      {padName}
      <audio
        src={audioPath}
        ref={padRef}
      ></audio>
    </div>
  );
}

DrumPad.propTypes = {
  padName: PropTypes.string,
  padClick: PropTypes.func,
};
