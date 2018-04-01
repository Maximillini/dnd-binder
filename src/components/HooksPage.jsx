import React from 'react';
import Hook from './Hook';
import './HooksPage.scss';
import '../styles/grid.scss';

export default class HooksPage extends React.Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      hooks: [],
      hookText: '',
      formShow: false
    };
  }

  showForm() {
    this.setState(() => { return { formShow: true } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const hookText = this.state.hookText;
    debugger;
    const hook = {
      hookText
    };
    this.setState((prevState) => { 
      return { 
        hooks: prevState.hooks.concat(hook),
        hookText: '',
        formShow: false 
      } 
    });
  }

  // TODO: Get this shit to work
  handleChange(e) {
    // debugger;
    this.setState(() => { return { hookText: e.target.value}});
  }

  render() {
    return (
      <div className="HooksPage container">
        <button className="add-button" onClick={this.showForm}>Add Hook</button>
        {this.state.formShow && 
          <form className="row" onSubmit={this.handleSubmit}>
            <textarea 
              autoFocus 
              rows="10" 
              cols="60"
              name="hookText" 
              placeholder="Type Hook Here..."
              onChange={this.handleChange}
              value={this.state.hookText}
            ></textarea>
            <input className="add-button row" type="submit" value="Save Hook" />
          </form>
        }
        { this.state.hooks[0] && <Hook hookText={this.state.hooks[0].hookText} />}
        {this.state.hooks.map((hook) => {
          <p>{hook.hookText}</p>
        })}
      </div>
    )
  }
}