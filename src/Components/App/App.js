import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
  );
}

export default App;
