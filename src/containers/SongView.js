import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongView extends Component {
  render() {
    const song = this.props.selectedSong
    
    return song ? 
      <div className="seven wide column">
        <div className="ui segment">
          <h1>{song.title}</h1>
          <div>Stats for "{song.title}":</div>
          <div>artist: {song.artist}</div>
          <div>length: {song.length} mins</div>
        </div>
      </div>  
     :
      <div className="seven wide column">
        <h3>Please pick a song</h3>
      </div>
  }
}
//The view only needs to READ the state, so no connection of actions needed
function mapStateToProps(state) {
  return {
    selectedSong: state.selectedSong
  }
}

export default connect (mapStateToProps)(SongView)

