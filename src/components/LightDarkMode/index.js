// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {inDarkMode: true}

  clickButton = () => {
    this.setState(prevState => ({inDarkMode: !prevState.inDarkMode}))
  }

  render() {
    const {inDarkMode} = this.state
    const buttonText = inDarkMode ? 'Light Mode' : 'Dark Mode'
    const containerClassName = inDarkMode ? 'dark-container' : 'light-container'
    return (
      <div className={containerClassName}>
        <h1>Click To Change Mode</h1>
        <button className="button-1" onClick={this.clickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
