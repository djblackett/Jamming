import React from 'react';

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
  this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    return <button className="Track-action" onClick={this.addTrack}>{isRemoval? "-" : "+"}</button>
  }

// todo #55 - not sure where it wanta me to put onClick

  render() {
    return (
      <div className="Track">
      <div className="Track-information"> 
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <button className="Track-action" onClick={this.props.removeTrack}><!-- + or - will go here --></button>
    </div>
    )
  }

}