import React from 'react';
import map_loot_erang from '../assets/img/map_loot_erang.png';
import map_loot_san from '../assets/img/map_loot_san.png';
import map_loot_mir from '../assets/img/map_loot_mir.png';

const Map = () => {
    return (
        <div className="map-loot">
            <div className="list-img">
                <img src={map_loot_erang} alt=""/>
                <img src={map_loot_san} alt=""/>
                <img src={map_loot_mir} alt=""/>
            </div>
        </div>
    )
}

export default Map;
