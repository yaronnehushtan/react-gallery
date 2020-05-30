import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state={
        albums: [],
        photos: []
      }
  }

  componentDidMount () {
      fetch ('https://jsonplaceholder.typicode.com/albums')
      .then (data => data.json())
      .then (albums => {
          this.setState ({albums})
      });
  }

  chooseGallery(e) {
    const url=`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.value}`
    fetch (url)
    .then (data1 => data1.json())
    .then (photos => {
        this.setState ({photos})
    });
  }  
    
  render() {
    return (
        <div className="App">
          <h1>Select an album:</h1>
          <select name="albums" id="albums" onChange={this.chooseGallery.bind(this)}>
          <option >Select...</option>
          {this.state.albums.map(album =>{
                    return ( <option key={album.id} value={album.id}>{album.title}</option> );
                })}
          </select>
          <br/>
          <br/>
          <hr/>
          <br/>
          <div className="gallery">            
            {this.state.photos.map(photo =>{
                      return (<img key={photo.id} src={photo.thumbnailUrl}/>);
                  })}
          </div>

        </div>
    );
  }

}

export default App;
