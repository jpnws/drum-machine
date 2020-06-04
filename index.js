class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playPad = this.playPad.bind(this);
  }

  playPad() {
    document.getElementById(this.props.padName).play();
  }

  render() {
    let audioPath = "audio/" + this.props.padName + ".mp3";
    console.log(audioPath);
    return (
      <div>
        <button onClick={this.playPad}>{this.props.padName}</button>
        <audio id={this.props.padName} src={audioPath}></audio>
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
      <div>
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
