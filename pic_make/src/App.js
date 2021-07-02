//import React from 'React';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pic_info: {
        img_src: "",
        img_quote: "",
        img_title: "",
        img_bc1: props.backColor1,
      }
    }
  }

  handleSourceChange(event) {
    //get the current info
    var pic_info = this.state.pic_info;

    //get the modified value
    var modVal = event.target.value;
    //console.log(modVal);
    
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

  handleTitleChange(event) {
    //get the current info
    var pic_info = this.state.pic_info;

    //get the modified value
    var modVal = event.target.value;
    console.log("Title",modVal);
    
    //set the state
    pic_info.img_title = modVal;

    this.setState({
      pic_info: pic_info
    });
  }
  handleBackChange(event) {
    //get the current info
    var pic_info = this.state.pic_info;

    //get the modified value
    var modVal = event.target.value;
    //console.log("Title",modVal);
    
    //set the state
    pic_info.img_bc1 = modVal;

    this.setState({
      pic_info: pic_info
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <br/>
          <label>
            Link:
            <input type="url" name="link" value={this.state.pic_info.img_src} onChange={this.handleSourceChange.bind(this)}/>
          </label>
          <br/>
          <label>
            Book Title:
            <input type="text" name="title" value={this.state.pic_info.img_title} onChange={this.handleTitleChange.bind(this)}/>
          </label>
          <br/>
          <label>
            Quote:
            <input type="text" name="quote" value={this.state.pic_info.img_quote} onChange={this.handleQuoteChange.bind(this)}/>
          </label>
          <br/>
        </form>

        <h2>Color picker:</h2>
        Choose your first color: <input type="color" id="fc" name="color1" value={this.state.pic_info.img_bc1} onChange={this.handleBackChange.bind(this)}/>
        <br/>
        Choose your second color: <input type="color" id="sc" name="color2"/>
        <br/>
        <br/>

        <div class="container">
          <div class="image">
            <img src={this.state.pic_info.img_src} alt={this.state.pic_info.img_title}/>
          </div>
          <div class="text"style={{ background: "linear-gradient(red 0%, orange 20%, yellow 50%, green 75%, blue 100%)" }}>
            <h1 >{this.state.pic_info.img_quote}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
