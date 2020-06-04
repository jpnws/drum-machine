class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playPad = this.playPad.bind(this);
  }

  playPad() {
    console.log(this.props.padName);
    document.getElementById(this.props.padName).play();
  }

  render() {
    let audioPath = "audio/" + this.props.padName + ".mp3";
    let uniqueID = "pad" + this.props.padName;
    return (
      <div className="drum-pad" id={uniqueID} onClick={this.playPad}>
        {this.props.padName}
        <audio className="clip" id={this.props.padName} src={audioPath}></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="drum-platform">
        <div className="drum-machine-title">Drum Machine</div>
        <div className="drum-pad-group" id="display">
          <DrumPad padName="Q" />
          <DrumPad padName="W" />
          <DrumPad padName="E" />
          <DrumPad padName="A" />
          <DrumPad padName="S" />
          <DrumPad padName="D" />
          <DrumPad padName="Z" />
          <DrumPad padName="X" />
          <DrumPad padName="C" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
