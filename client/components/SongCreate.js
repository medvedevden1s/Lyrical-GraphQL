import React, {Component} from 'react';
import ggl from 'graphql-tag';

class SongCreate extends Component {
    constructor(props){
        super(props)

        this.state = { title: ''};
    }

    onSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                        onChange={e => this.setState({title: e.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
mutation {
    addSong(title: )
}
`

export default SongCreate;