import { combineReducers } from 'redux'
//LIKE FOR ACTION CREATORS ALL IN ONE FILE

const songListReducer = () => {
  return [
    {title: 'This is a song', length: 5, artist: 'Lisa'},
    {title: 'Another song!', length: 4, artist: 'Bob'},
    {title: 'Wait a sec', length: 3.5, artist: 'Someone'},
    {title: 'All these are fake', length: 10, artist: 'Nolan'}
  ]
}

const songSelectReducer = (selectedSong = null/*piece of state i wanna change*/, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songList: songListReducer,
  selectedSong: songSelectReducer
})