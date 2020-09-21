import React from 'react';
import map_t_erang from '../assets/img/map_t_erang.png';
import map_t_san from '../assets/img/map_t_san.png';
import map_t_mir from '../assets/img/map_t_mir.png';

const MapTransporters = () => {
    return (
        <div className="map-t">
            <div className="list-img">
                <img src={map_t_erang} alt=""/>
                <img src={map_t_san} alt=""/>
                <img src={map_t_mir} alt=""/>
            </div>
        </div>
    )
}

export default MapTransporters;
