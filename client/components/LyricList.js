import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { Link } from 'react-router';
// import query from '../queries/fetchSongs';

class LyricList extends Component {

  onLike(id) {
    this.props.mutate({
      variables: { id }
    })
  }
  //.then(() => this.props.data.refetch());
  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className={"collection-item"}>
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => this.onLike(id)}>thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {
    // if (this.props.data.loading) { return <div>Loading....</div> }
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`
mutation LikeLyric($id: ID){
    likeLyric(id: $id) {
        id
        likes
    }
}`;

export default graphql(mutation)(LyricList);