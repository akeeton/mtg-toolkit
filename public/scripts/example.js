/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

/*
window.mtgjsoncallback = function(data, name) {
    console.log(name);
    console.log(data["AWOL"]);
}
*/


var CardDetails = React.createClass({
    render: function() {
        return (
            <div className="cardDetails">
                <h2>Card Details</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{this.props.card.id}</td>
                        </tr>
                        <tr>
                            <td>Layout</td>
                            <td>{this.props.card.layout}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.props.card.name}</td>
                        </tr>
                        <tr>
                            <td>Names</td>
                            <td>{this.props.card.names}</td>
                        </tr>
                        <tr>
                            <td>Mana cost</td>
                            <td>{this.props.card.manaCost}</td>
                        </tr>
                        <tr>
                            <td>Converted mana cost</td>
                            <td>{this.props.card.cmc}</td>
                        </tr>
                        <tr>
                            <td>Colors</td>
                            <td>{this.props.card.colors}</td>
                        </tr>
                        <tr>
                            <td>Color identity</td>
                            <td>{this.props.card.colorIdentity}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{this.props.card.type}</td>
                        </tr>
                        <tr>
                            <td>Supertypes</td>
                            <td>{this.props.card.supertypes}</td>
                        </tr>
                        <tr>
                            <td>Types</td>
                            <td>{this.props.card.types}</td>
                        </tr>
                        <tr>
                            <td>Subtypes</td>
                            <td>{this.props.card.subtypes}</td>
                        </tr>
                        <tr>
                            <td>Rarity</td>
                            <td>{this.props.card.rarity}</td>
                        </tr>
                        <tr>
                            <td>Text</td>
                            <td>{this.props.card.text}</td>
                        </tr>
                        <tr>
                            <td>Flavor</td>
                            <td>{this.props.card.flavor}</td>
                        </tr>
                        <tr>
                            <td>Artist</td>
                            <td>{this.props.card.artist}</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>{this.props.card.number}</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td>{this.props.card.power}</td>
                        </tr>
                        <tr>
                            <td>Toughness</td>
                            <td>{this.props.card.toughness}</td>
                        </tr>
                        <tr>
                            <td>Loyalty</td>
                            <td>{this.props.card.loyalty}</td>
                        </tr>
                        <tr>
                            <td>Multiverse ID</td>
                            <td>{this.props.card.multiverseid}</td>
                        </tr>
                        <tr>
                            <td>Variations</td>
                            <td>{this.props.card.variations}</td>
                        </tr>
                        <tr>
                            <td>Image name</td>
                            <td>{this.props.card.imageName}</td>
                        </tr>
                        <tr>
                            <td>Watermark</td>
                            <td>{this.props.card.watermark}</td>
                        </tr>
                        <tr>
                            <td>Border</td>
                            <td>{this.props.card.border}</td>
                        </tr>
                        <tr>
                            <td>Timeshifted</td>
                            <td>{this.props.card.timeshifted}</td>
                        </tr>
                        <tr>
                            <td>Hand modifier (Vanguard)</td>
                            <td>{this.props.card.hand}</td>
                        </tr>
                        <tr>
                            <td>Life modifier (Vanguard)</td>
                            <td>{this.props.card.life}</td>
                        </tr>
                        <tr>
                            <td>On the Reserved List</td>
                            <td>{this.props.card.reserved}</td>
                        </tr>
                        <tr>
                            <td>Promo card release date</td>
                            <td>{this.props.card.releaseDate}</td>
                        </tr>
                        <tr>
                            <td>Released in a core box set</td>
                            <td>{this.props.card.starter}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

var CardBox = React.createClass({
    loadCardsFromServer: function() {
        $.ajax({
            type: 'GET',
            url: this.props.url,
            async: false,
            jsonpCallback: 'mtgjsoncallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(cards) {
                console.log(cards[this.props.cardName]);
                this.setState({cards: cards});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {cards: {name: "Null Card"}}
    },

    componentDidMount: function() {
        this.loadCardsFromServer();
        // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    // <CardDetails card={this.state.cards[this.props.cardName]} />
    render: function() {
        var card = this.state.cards[this.props.cardName] || {name: "Null Card"};
        return (
            <div className="cardBox">
                <h1>Cards</h1>
                <CardDetails card={card} />
            </div>
        );
    }
});

ReactDOM.render(
  <CardBox url="http://mtgjson.com/json/AllCards.jsonp" cardName="Lightning Bolt" />,
  document.getElementById('content')
);
/*
var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
*/
