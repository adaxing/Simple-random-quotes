import React, {Component} from 'react';

export default class Button extends Component {
	render(){
		return (
			<div className="buttons">
	            <a className="button" id="tweet-quote" href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
	            <a className="button" id="tumblr-quote" href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJohn%2BLennon%26content%3DLife%2Bis%2Bwhat%2Bhappens%2Bto%2Byou%2Bwhile%2Byou%25E2%2580%2599re%2Bbusy%2Bmaking%2Bother%2Bplans.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" rel="noopener noreferrer" target="_blank"><i className="fab fa-tumblr"></i></a>
	            <button className={"button"+(this.props.color)} onClick={this.props.onClick} id="new-quote">New quote</button>
          	</div>

		)
	}
}