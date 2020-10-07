import React from 'react';
import map_loot_erang from '../assets/img/map_loot_erang.png';
import map_loot_san from '../assets/img/map_loot_san.png';
import map_loot_mir from '../assets/img/map_loot_mir.png';

const Map = () => {
  const [zoomImg, setZoomImg] = React.useState([
    { isSwitchOn: false, isSwitchOn1: false, isSwitchOn2: false },
  ]);
  return (
    <div className="map-loot">
      <div className="list-img">
        <img
          className={zoomImg.isSwitchOn ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn: !zoomImg.isSwitchOn })}
          src={map_loot_erang}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn1 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn1: !zoomImg.isSwitchOn1 })}
          src={map_loot_san}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn2 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn2: !zoomImg.isSwitchOn2 })}
          src={map_loot_mir}
          alt=""
        />
      </div>
    </div>
  );
};

export default Map;
