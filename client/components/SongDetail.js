import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data; // if (this.props.data.loading) { return <div>Loading....</div> }
        if (!song) { return <div>Loading....</div> } // If it's quite fast do not display anything at all as a case

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricCreate songId={this.props.params.id}/>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);;