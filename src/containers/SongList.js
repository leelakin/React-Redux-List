/* I don't really need container folder anymore, just put all in COMPONENTS */

import React, { Component } from 'react'
import { connect } from 'react-redux'
//I don't really ned bindActionCreators!
// import { bindActionCreators } from 'redux'
import { selectSong } from '../actions';


class SongList extends Component {
//The song list needs to READ and CHANGE the state, connection of actions needed
  render() {
    const songs = this.props.songList.map(song => {
      return (
        <div 
          key={song.title} 
          onClick={() => this.props.selectSong(song)}>
          <div>{song.title}</div>
        </div>
      )
    })
    return (
      <div className="seven wide column">
        <div className="ui segment">
          <h4>SongList</h4>
          {songs}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state/*the whole app state*/) {
  //here the state will go into this.props....
  return {
    songList: state.songList
  }
}
//I don't need this function when I pass the object directly into connect
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     selectSong: selectSong
//   }, dispatch)
// }

//connect communicates with the Provider component in index
//export default connect(mapStateToProps, mapDispatchToProps)(SongList)
export default connect(mapStateToProps, { selectSong })(SongList)
//to connect action pass in shortened syntax for {selectSong: selectSong}