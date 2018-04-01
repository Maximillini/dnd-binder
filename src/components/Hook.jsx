import React from 'react';
import './Hook.scss';

export default class Hook extends React.Component {
  constructor(props) {
    super(props);

    this.finish = this.finish.bind(this);
    this.state = {
      finished: false
    };
  }

  finish() {
    debugger;
    this.setState(() => { return { finished: true }});
  }

  render() {
    return (
      <div className="Hook">
        <div className={`Hook-text ${this.state.finished ? 'finished' : ''}`}><span className="close" onClick={this.finish}>x</span>{this.props.hookText}</div>
      </div>
    )
  }
}
