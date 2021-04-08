import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: "EnterSandman",
        artist: "Metallica",
        album: "Black Album",
        id: 1
      }, {
        name: "Goat head",
        artist: "Goat leg",
        album: "Nope",
        id: 2
      }, {
        name: "foo",
        artist: "foof",
        album: "foofe",
        id: 3
      }],
      playlistName: "bobo",
      playlistTracks: 
        [{
          name: "EnterSandman",
          artist: "Metallica",
          album: "Black Album",
          id: 1
        }, {
          name: "Goat head",
          artist: "Goat leg",
          album: "Nope",
          id: 2
        }, {
          name: "foo",
          artist: "foof",
          album: "foofe",
          id: 3
        }]
    };

    

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.trackUris = this.trackUris.bind(this);
    this.search = this.search.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack =>  savedTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track);
  }

  removeTrack(track) {
    this.setState(this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id));
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    Spotify.savePlaylist(this.state.playlistName, this.state.playlistTracks);

    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: {}
    })
  }

  search(searchTerm) {
    this.setState({
      searchResults: Spotify.search(searchTerm)
    });
  }

  render() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist onSave={this.savePlaylist} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
    </div>
  </div>
</div>
  );
}

}

export default App;