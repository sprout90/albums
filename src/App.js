import React, {useEffect, useState} from "react";
import PhotoList from "./PhotoList";
import './App.css';

function App() {

  const [albums, setAlbums] = useState([]);
  const [clickedAlbumId, setClickedAlbumId] = useState();

  useEffect(() => {
      
    async function loadAlbums(){
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const albums = await response.json();
      console.log("albums count", albums.length)
      setAlbums(albums);
    }

    loadAlbums();

    }
  )

  const clickHandler = (event) => {
    const element = event.target;
    const id = parseInt(element.id);
    setClickedAlbumId(id);
    console.log(id);
  }



  return (
    <div>
      <h3>Albums</h3>
      <div>
      { albums.map((album) => 
          <div>
          <p id={album.id} key={album.id} onClick={clickHandler}> {album.title}</p>
          <PhotoList clickedAlbumId={clickedAlbumId} albumId={album.id} />
          </div>
         )}
      </div>
    </div>
  );
}

export default App;
