import React from "react";
import "./DrumPad.css";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.clipId} onClick={this.playSound}>
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
