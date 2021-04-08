import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {




  render() {
    return (
      <div className="TrackList">
    {this.props.tracks.map((track) =>  (<Track key={track.id} onAdd={this.props.onAdd}/>))    }
      </div>
    )
  }
}

export default Tracklist;