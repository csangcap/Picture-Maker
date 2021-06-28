//import React from 'React';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      pic_info: {
        img_src: props.link,
        img_quote: props.quote
      }
    }
  }

  handleSourceChange(event) {
    //get the current info
    var pic_info = this.state.pic_info;

    //get the modified value
    var modVal = event.target.value;
    
    //set the state
    pic_info.img_src = modVal;

    this.setState({
      pic_info: pic_info
    }); 
  }

  handleQuoteChange(event) {
    //get the current info
    var pic_info = this.state.pic_info;

    //get the modified value
    var modVal = event.target.value;
    
    //set the state
    pic_info.img_quote = modVal;

    this.setState({
      pic_info: pic_info
    });
  }

  handleButtonClicked() {
    console.log(this.state.pic_info);
  }

  render() {
    return (
      <div className="App">
        <form>
          <br/>
          <label>
            Link:
            <input type="text" name="link" value={this.state.pic_info.img_src} onChange={this.handleSourceChange.bind(this)}/>
          </label>
          <br/>
          <label>
            Quote:
            <input type="text" name="quote" value={this.state.pic_info.img_quote} onChange={this.handleQuoteChange.bind(this)}/>
          </label>
          <br/>
          <button onClick={this.handleButtonClicked.bind(this)}>Console Log</button>
        </form>
      </div>
    );
  }
}

export default App;
