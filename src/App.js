import React, { Component } from 'react';
import './css/App.css';
//import Button from './button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: (12,43,98),
      sentence: 'Life is what happens to you while you’re busy making other plans.',
      author: 'John Lennon'
    } 
    this.handleClick = this.handleClick.bind(this);
    this.getRandomSentence = this.getRandomSentence.bind(this);
  }
    
  handleClick() {
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
    colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      color: colory,
      sentence: this.getRandomSentence().sentence,
      author: this.getRandomSentence().author
    });  
     
  }

  getRandomSentence() {
    var sentences = [
      {
        sentence: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
        author: 'Christopher Columbus'
      },
      {
        sentence: 'I would rather die of passion than of boredom.',
        author: 'Vincent van Gogh'
      },
      {
        sentence: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
        author: 'Aristotle'
      },
      {
        sentence: 'Life shrinks or expands in proportion to one’s courage.',
        author: 'Anais Nin'
      },
      {
        sentence: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart'
      },
      {
        sentence: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
        author: 'Sheryl Sandberg'
      }
    ]
    var index = Math.floor(Math.random() * (sentences.length-1));

    return sentences[index];
  }

  render() {
    return (
      <div className='main-page' style={{backgroundColor: this.state.color}}>
        <div id="quote-box">
          <div className="quote-text">
              <i className="fas fa-quote-left" style={{color: this.state.color}}></i>
              <span id="text" style={{color: this.state.color}} > {this.state.sentence}</span>
          </div>
          <div className="quote-author" style={{color: this.state.color}}>
             - 
            <span id="author">{this.state.author}</span>
          </div>
          <div className="buttons">
              <a style={{backgroundColor: this.state.color}} id="tweet-quote" href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank" ><i className="fab fa-twitter"></i></a>
              <a style={{backgroundColor: this.state.color}}  onClick={this.handleClick} id="tumblr-quote" href="https://twitter.com/intent/tweet/?text={this.state.sentence}" rel="noopener noreferrer" target="_blank"><i className="fab fa-tumblr"></i></a>
              <button style={{backgroundColor: this.state.color}} id="new-quote" onClick={this.handleClick} >New quote</button>
          </div>
        </div>
        <footer>
          <a href="https://adaxing.github.io" rel="noopener noreferrer" target="_blank">by adaxing</a>
        </footer>
    </div>
    );
  }
}



 
