import React from 'react';
import map_t_erang from '../assets/img/map_t_erang.png';
import map_t_san from '../assets/img/map_t_san.png';
import map_t_mir from '../assets/img/map_t_mir.png';

const MapTransporters = () => {
    const [zoomImg, setZoomImg] = React.useState([
        { isSwitchOn: false, isSwitchOn1: false, isSwitchOn2: false },
      ]);
    return (
        <div className="map-t">
            <div className="list-img">
            <img
          className={zoomImg.isSwitchOn ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn: !zoomImg.isSwitchOn })}
          src={map_t_erang}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn1 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn1: !zoomImg.isSwitchOn1 })}
          src={map_t_san}
          alt=""
        />
        <img
          className={zoomImg.isSwitchOn2 ? 'img active' : 'img'}
          onClick={() => setZoomImg({ isSwitchOn2: !zoomImg.isSwitchOn2 })}
          src={map_t_mir}
          alt=""
        />
            </div>
        </div>
    )
}

export default MapTransporters;
