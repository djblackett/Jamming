import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


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

  render() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
    </div>
  </div>
</div>
  );
}

}

export default App;