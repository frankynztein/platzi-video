import { useState, useEffect } from 'react';

const useInitialState = (API) => { // API como parámetro
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => { //recibe función anónima
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos; //retorno el estado
};

export default useInitialState;
