import { Component } from 'react';

// let counter = 0

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toCount = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
    console.log(state);
  };

  render() {
    return (
      <div>
        {/* <h2>Please leave feedback</h2> */}
        <div>
          <button type="button" onClick={this.toCount}>
            Good
          </button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
      </div>
    );
  }
}
