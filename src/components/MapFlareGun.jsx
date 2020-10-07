import React from 'react';
import map_f_erang from '../assets/img/map_f_erang.png';
import map_f_san from '../assets/img/map_f_san.png';
import map_f_mir from '../assets/img/map_f_mir.png';

const MapFlareGun = () => {
    const [zoomImg, setZoomImg] = React.useState([
        { isSwitchOn: false, isSwitchOn1: false, isSwitchOn2: false },
      ]);
  return (
    <div className="map-f">
      <div className="list-img">
        <img
          className={zoomImg.isSwitchOn ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn: !zoomImg.isSwitchOn })}
          src={map_f_erang}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn1 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn1: !zoomImg.isSwitchOn1 })}
          src={map_f_san}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn2 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn2: !zoomImg.isSwitchOn2 })}
          src={map_f_mir}
          alt=""
        />
      </div>
    </div>
  );
};

export default MapFlareGun;
