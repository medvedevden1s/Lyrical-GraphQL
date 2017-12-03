import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {


        const { song } = this.props.data; // if (this.props.data.loading) { return <div>Loading....</div> }
        if (!song) { return <div>Loading....</div> } // If it's quite fast do not display anything at all as a case

        return (
            <div>
                <h3>{song.title}</h3>
                <Link to="/">Back</Link>
                {/*<form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input
                        onChange={e => this.setState({ title: e.target.value })}
                        value={this.state.title}
                    />
                </form> */}
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);;