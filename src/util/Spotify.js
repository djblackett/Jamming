
let accessToken = '';
const clientId = '7cbe10d09c6c4e938461b6e1fa99e51f';
const redirectUri = 'http://localhost:3000/';

const Spotify = {

getAccessToken() {
  if (accessToken !== '') {
    return accessToken;
  }

 window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type={token}&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

  const url = window.location.href;
  if (url.find('/access_token=([^&]*)/') && url.find('/expires_in=([^&]*)/')) {
  accessToken = url.match('/access_token=([^&]*)/');
  let expiresIn = url.match('/expires_in=([^&]*)/');

  window.setTimeout(() => accessToken = '', expiresIn * 1000);
  window.history.pushState('Access Token', null, '/');
  }
  
},

async search(parameter) {
const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${parameter}`,
{
  headers: {Authorization: `Bearer ${accessToken}`}
})

const jsonResponse = response.json();

return jsonResponse.map((track) => ({
  ID: track.id,
  Name: track.name,
  Artist: track.artists[0].name,
  Album: track.album.name,
  URI: track.uri
}))
},

  async savePlaylist(playlistName, trackArray) {
    if (playlistName === '' || trackArray === '') {
      return;
    }

    let userToken = accessToken;
    let headers = {
      headers: {Authorization: `Bearer ${accessToken}`}
    };
    let userId = '';

    const response = fetch('https://api.spotify.com/v1/me', {headers: headers});
    const jsonResponse = response.json();
    userId = jsonResponse.ID;
    

    const response1 = await fetch(`/v1/users/${userId}/playlists`, {
      headers: {Authorization: `Bearer ${accessToken}`},
      method: 'POST',
      body: {name: playlistName}
    });

    const playlistID = response1.json().id;

    const response2 = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: {name: playlistName,
      uris: trackArray}
    }
    )



  }

}




export default Spotify;