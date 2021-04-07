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
  }

  render() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
  );
}

}

export default App;