import React from 'react';
import './Hook.scss';

export default class Hook extends React.Component {
  render(props) {
    return (
      <div className="Hook">
        <div className="Hook-text">{this.props.hookText}</div>
      </div>
    )
  }
}