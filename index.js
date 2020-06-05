class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playPad = this.playPad.bind(this);
  }

  playPad() {
    document.getElementById(this.props.padName).play();
  }

  render() {
    // let audioPath = "audio/" + this.props.padName + ".mp3";
    let audioPath =
      "https://raw.githubusercontent.com/jiparkdev/drum-machine/master/audio/" +
      this.props.padName +
      ".mp3";
    let uniqueID = "pad" + this.props.padName;
    return (
      <div
        className="drum-pad"
        id={uniqueID}
        onClick={(event) => {
          this.playPad();
          this.props.padClick(event);
        }}
      >
        {this.props.padName}
        <audio className="clip" id={this.props.padName} src={audioPath}></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
    };
    document.addEventListener("keydown", (event) => {
      document.getElementById(event.key.toUpperCase()).play();
      this.setState({
        displayText: event.key,
      });
    });
    this.handlePadClick = this.handlePadClick.bind(this);
  }

  handlePadClick(event) {
    this.setState({
      displayText: event.target.id,
    });
  }

  render() {
    return (
      <div className="drum-platform">
        <div className="drum-machine-title">Drum Machine</div>
        <div className="drum-pad-group">
          <DrumPad padName="Q" padClick={this.handlePadClick} />
          <DrumPad padName="W" padClick={this.handlePadClick} />
          <DrumPad padName="E" padClick={this.handlePadClick} />
          <DrumPad padName="A" padClick={this.handlePadClick} />
          <DrumPad padName="S" padClick={this.handlePadClick} />
          <DrumPad padName="D" padClick={this.handlePadClick} />
          <DrumPad padName="Z" padClick={this.handlePadClick} />
          <DrumPad padName="X" padClick={this.handlePadClick} />
          <DrumPad padName="C" padClick={this.handlePadClick} />
        </div>
        <div className="drum-display" id="display">
          {this.state.displayText}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
