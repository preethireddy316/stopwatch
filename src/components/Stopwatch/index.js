// Write your code here

import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    timeElapsed: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  displayTimer = () => {
    const {timeElapsed} = this.state
    const min = Math.floor(timeElapsed / 60)
    const sec = timeElapsed % 60
    const minute = min < 10 ? `0${min}` : min
    const second = sec < 10 ? `0${sec}` : sec
    return `${minute}:${second}`
  }

  increaseTimeElapse = () => {
    this.setState(prevState => ({timeElapsed: prevState.timeElapsed + 1}))
  }

  onStart = () => {
    this.timerId = setInterval(this.increaseTimeElapse, 1000)
    this.setState({isTimerRunning: true})
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsed: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state
    const time = this.displayTimer()
    return (
      <>
        <h1>Stopwatch</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
        <p>Timer</p>
        <h1>{time}</h1>
        <button type="button" disabled={isTimerRunning} onClick={this.onStart}>
          Start
        </button>
        <button type="button" onClick={this.onStop}>
          Stop
        </button>
        <button type="button" onClick={this.onReset}>
          Reset
        </button>
      </>
    )
  }
}

export default Stopwatch
