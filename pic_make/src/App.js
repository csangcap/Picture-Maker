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

  render() {
    return (
      <div className="App">
        <form>
          <br/>
          <label>
            Link:
            <input type="text" name="link" value={this.state.pic_info.img_src}/>
          </label>
          <br/>
          <label>
            Quote:
            <input type="text" name="quote" value={this.state.pic_info.img_quote}/>
          </label>
          <br/>
          <input type="submit" value="Sumbit"/>
        </form>
      </div>
    );
  }
}

export default App;
