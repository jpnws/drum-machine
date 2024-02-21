import { useState } from "react";

import "./App.module.css";

import DrumPad from "./DrumPad/DrumPad";

import styles from "./App.module.css";

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const handlePadClick = (event) => {
    setDisplayText(event.target.id);
  };
  return (
    <div className={styles.drumPlatform}>
      <div className={styles.drumMachineTitle}>Drum Machine</div>
      <div className={styles.drumPadGroup}>
        <DrumPad
          padName="Q"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="W"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="E"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="A"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="S"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="D"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="Z"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="X"
          padClick={handlePadClick}
        />
        <DrumPad
          padName="C"
          padClick={handlePadClick}
        />
      </div>
      <div
        className={styles.drumDisplay}
        id="display"
      >
        {displayText}
      </div>
    </div>
  );
}
