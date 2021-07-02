//import React from 'React';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      img_link: "",
      book_title: "",
      book_quote: "",
      n_colors: 1, //default number of colors
      colors: ['#ffffff'], //default color
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    //console.log(target, name, value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <br/>
          <label>
            Link:
            <input type="url" name="img_link" value={this.state.img_link} onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Book Title:
            <input type="text" name="book_title" value={this.state.book_title} onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Quote:
            <input type="text" name="book_quote" value={this.state.book_quote} onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number of colors:
            <input type="number" name="n_colors" min="1" max="10" value={this.state.n_colors} onChange={this.handleInputChange}/>
          </label>
        </form>

        <div class="container">
          <div class="image">
            <img src={this.state.img_link} alt={this.state.book_title}/>
          </div>
          <div class="text"style={{ background: "linear-gradient(red 0%, orange 20%, yellow 50%, green 75%, blue 100%)" }}>
            <h1 >{this.state.book_quote}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
