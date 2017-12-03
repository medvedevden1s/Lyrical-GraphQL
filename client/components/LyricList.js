import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';
// import { Link } from 'react-router';
// import query from '../queries/fetchSongs';

class LyricList extends Component {

  // onSongDelete(id) {
  //   this.props.mutate({ variables: { id } })
  //     .then(() => this.props.data.refetch());
  // }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className={"collection-item"}>
          {content}
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

// const mutation = gql`
// mutation DeleteSong($id: ID){
//     deleteSong(id: $id) {
//         id
//     }
// }`;

// export default graphql(mutation)(
//   graphql(query)(LyricList)
// );

export default (LyricList);