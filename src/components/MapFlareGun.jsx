import React from 'react';
import map_f_erang from '../assets/img/map_f_erang.png';
import map_f_san from '../assets/img/map_f_san.png';
import map_f_mir from '../assets/img/map_f_mir.png';

const MapFlareGun = () => {
    return (
        <div className="map-f">
            <div className="list-img">
                <img src={map_f_erang} alt=""/>
                <img src={map_f_san} alt=""/>
                <img src={map_f_mir} alt=""/>
            </div>
        </div>
    )
}

export default MapFlareGun;
