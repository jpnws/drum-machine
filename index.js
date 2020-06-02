class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Drum Machine</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
