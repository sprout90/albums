import React, {useEffect, useState} from "react";
import './App.css';

function PhotoList({clickedAlbumId, albumId}) {

  const [photos, setPhotos] = useState([]);


  useEffect(() => {
      
    async function loadPhotos(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      const photos = await response.json();
      setPhotos(photos);
    }

    loadPhotos();

    }
  )

  const limit10 = photos.slice(0, 10);

    if (clickedAlbumId === albumId){

        return (
          <div>
            <h3>Thumbnails</h3>
            <div>
              { limit10.map((photo, index) => 
                  <div>
                  <img id={photo.id} key={index} src={photo.url} width="100" height="100" alt="thumbnail"/><br/>
                  </div>
              )}

            </div>
          </div>
        );
    }
}

export default PhotoList;
