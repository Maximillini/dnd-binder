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

    if(!hookText) {
      const error = 'Please enter some text!'
      return this.setState(() => ({error}));
    } else {
      const hook = {
        hookText
      };
      this.setState((prevState) => { 
        return { 
          hooks: [hook].concat(prevState.hooks),
          hookText: '',
          formShow: false, 
          error: ''
        } 
      });
    }
  }

  // TODO: Get this shit to work
  handleChange(e) {
    const text = e.target.value;
    this.setState(() => { return { hookText: text}});
  }

  isEmpty(array) {
    return (array && array.length === 0);
  }

  render() {
    return (
      <div className="HooksPage container">
        <button className="add-button" onClick={this.showForm}>Add Hook</button>
        { (this.isEmpty(this.state.hooks) && !this.state.formShow) && <p>Put some story elements here!</p> }
        { this.state.formShow && 
          <form className="row" onSubmit={this.handleSubmit}>
            <textarea 
              autoFocus 
              rows="10" 
              cols="60"
              name="hookText" 
              placeholder="Type Hook Here..."
              onChange={this.handleChange}
              value={this.state.hookText}
              className={`${this.state.error ? 'error' : ''}`}
            ></textarea>
            <input className="add-button row" type="submit" value="Save" />
            {this.state.error && <p>{this.state.error}</p>}
          </form>
        }
        { this.state.hooks.map((hook, index) => {
          return <Hook key={index} hookText={hook.hookText} />
        })}
      </div>
    )
  }
}
