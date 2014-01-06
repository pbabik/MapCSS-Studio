
(function (MapCSS) {
    'use strict';

    function restyle(style, tags, zoom, type, selector) {
        var s_default = {}, s_centerline = {}, s_ticks = {}, s_label = {};

        if ((selector == 'canvas')) {
            s_default['fill-color'] = '#C4D4F5';
        }

        if (((selector == 'area' && tags['natural'] == 'coastline'))) {
            s_default['fill-color'] = '#fcf8e4';
            s_default['-x-mapnik-layer'] = 'bottom';
        }

        if (((selector == 'area' && tags['natural'] == 'glacier') && zoom >= 3)) {
            s_default['fill-color'] = '#fcfeff';
        }

        if (((selector == 'area' && tags['place'] == 'city') && zoom >= 10) || ((selector == 'area' && tags['place'] == 'town') && zoom >= 10)) {
            s_default['fill-color'] = '#FAF7F7';
            s_default['fill-opacity'] = 0.6;
            s_default['z-index'] = 1;
        }

        if (((selector == 'area' && tags['place'] == 'hamlet') && zoom >= 10) || ((selector == 'area' && tags['place'] == 'village') && zoom >= 10) || ((selector == 'area' && tags['place'] == 'locality') && zoom >= 10)) {
            s_default['fill-color'] = '#f3eceb';
            s_default['fill-opacity'] = 0.6;
            s_default['z-index'] = 1;
        }

        if (((selector == 'area' && tags['landuse'] == 'residential') && zoom >= 10) || ((selector == 'area' && tags['residential'] == 'urban') && zoom >= 10)) {
            s_default['fill-color'] = '#F7EFEB';
            s_default['z-index'] = 2;
        }

        if (((selector == 'area' && tags['residential'] == 'rural') && zoom >= 10)) {
            s_default['fill-color'] = '#f4d7c7';
            s_default['z-index'] = 2;
        }

        if (((selector == 'area' && tags['landuse'] == 'residential') && zoom >= 16)) {
            s_default['width'] = 0.3;
            s_default['color'] = '#cb8904';
            s_default['z-index'] = 2;
        }

        if (((selector == 'area' && tags['landuse'] == 'allotments') && zoom >= 10) || ((selector == 'area' && tags['leisure'] == 'garden') && zoom >= 10 && zoom <= 15) || ((selector == 'area' && tags['landuse'] == 'orchard') && zoom >= 10 && zoom <= 15)) {
            s_default['fill-color'] = '#edf2c1';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['leisure'] == 'park') && zoom >= 10)) {
            s_default['fill-color'] = '#c4e9a4';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['leisure'] == 'garden') && zoom >= 16) || ((selector == 'area' && tags['landuse'] == 'orchard') && zoom >= 16)) {
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'scrub') && zoom >= 12)) {
            s_default['fill-color'] = '#e5f5dc';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'heath') && zoom >= 12)) {
            s_default['fill-color'] = '#ecffe5';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['landuse'] == 'industrial') && zoom >= 10) || ((selector == 'area' && tags['landuse'] == 'military') && zoom >= 10)) {
            s_default['fill-color'] = '#ddd8da';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['amenity'] == 'parking') && zoom >= 15)) {
            s_default['fill-color'] = '#ecedf4';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'forest') && zoom >= 4) || ((selector == 'area' && tags['natural'] == 'wood') && zoom >= 4) || ((selector == 'area' && tags['landuse'] == 'forest') && zoom >= 4) || ((selector == 'area' && tags['landuse'] == 'wood') && zoom >= 4)) {
            s_default['fill-color'] = '#d6f4c6';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['landuse'] == 'garages') && zoom >= 10)) {
            s_default['fill-color'] = '#ddd8da';
            s_default['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'forest') && zoom >= 10) || ((selector == 'area' && tags['natural'] == 'wood') && zoom >= 10) || ((selector == 'area' && tags['landuse'] == 'forest') && zoom >= 10) || ((selector == 'area' && tags['landuse'] == 'wood') && zoom >= 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Serif Italic';
            s_default['text-color'] = 'green';
            s_default['text-allow-overlap'] = 'false';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0 ';
        }

        if (((selector == 'area' && tags['landuse'] == 'grass') && zoom >= 12) || ((selector == 'area' && tags['natural'] == 'grass') && zoom >= 12) || ((selector == 'area' && tags['natural'] == 'meadow') && zoom >= 12) || ((selector == 'area' && tags['landuse'] == 'meadow') && zoom >= 12) || ((selector == 'area' && tags['landuse'] == 'recreation_ground') && zoom >= 12)) {
            s_default['fill-color'] = '#f4ffe5';
            s_default['z-index'] = 4;
        }

        if (((selector == 'area' && tags['natural'] == 'wetland') && zoom >= 10)) {
            s_default['z-index'] = 4;
        }

        if (((selector == 'area' && tags['landuse'] == 'farmland') && zoom >= 10) || ((selector == 'area' && tags['landuse'] == 'farm') && zoom >= 10) || ((selector == 'area' && tags['landuse'] == 'field') && zoom >= 10)) {
            s_default['fill-color'] = '#fff5c4';
            s_default['z-index'] = 5;
        }

        if (((selector == 'area' && tags['place'] == 'city') && zoom >= 6 && zoom <= 9) || ((selector == 'area' && tags['place'] == 'town') && zoom >= 6 && zoom <= 9)) {
            s_default['fill-color'] = '#ffe1d0';
            s_default['fill-opacity'] = 0.6;
            s_default['z-index'] = 5;
        }

        if (((selector == 'area' && tags['landuse'] == 'cemetery') && zoom >= 10)) {
            s_default['fill-color'] = '#e5f5dc';
            s_default['z-index'] = 5;
        }

        if (((selector == 'area' && tags['aeroway'] == 'aerodrome') && zoom >= 13)) {
            s_default['color'] = '#008ac6';
            s_default['width'] = 0.8;
            s_default['z-index'] = 5;
        }

        if (((selector == 'area' && tags['leisure'] == 'stadium') && zoom >= 12) || ((selector == 'area' && tags['leisure'] == 'pitch') && zoom >= 12)) {
            s_default['fill-color'] = '#e3deb1';
            s_default['z-index'] = 5;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 7 && zoom <= 10)) {
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.6;
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 9 && zoom <= 10)) {
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.3;
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 10 && zoom <= 14)) {
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.7;
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 15)) {
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.9;
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 10)) {
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.5;
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'canal') && zoom >= 10)) {
            s_default['color'] = '#abc4f5';
            s_default['width'] = 0.6;
            s_default['z-index'] = 9;
        }

        if (((selector == 'area' && tags['waterway'] == 'riverbank') && zoom >= 5) || ((selector == 'area' && tags['natural'] == 'water') && zoom >= 5) || ((selector == 'area' && tags['landuse'] == 'reservoir') && zoom >= 10)) {
            s_default['fill-color'] = '#C4D4F5';
            s_default['color'] = '#C4D4F5';
            s_default['width'] = 0.1;
            s_default['z-index'] = 9;
        }

        if (((selector == 'area' && tags['natural'] == 'water') && zoom >= 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 1;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Serif Italic';
            s_default['text-color'] = '#285fd1';
            s_default['text-allow-overlap'] = 'false';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
        }

        if (((type == 'way' && tags['highway'] == 'construction') && zoom >= 15 && zoom <= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['width'] = 2;
            s_default['color'] = '#ffffff';
            s_default['z-index'] = 10;
            s_default['dashes'] = [9, 9];
        }

        if (((type == 'way' && tags['highway'] == 'construction') && zoom >= 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['width'] = 3;
            s_default['color'] = '#ffffff';
            s_default['z-index'] = 10;
            s_default['dashes'] = [9, 9];
        }

        if (((type == 'way' && tags['highway'] == 'footway') && zoom >= 15) || ((type == 'way' && tags['highway'] == 'path') && zoom >= 15) || ((type == 'way' && tags['highway'] == 'cycleway') && zoom >= 15) || ((type == 'way' && tags['highway'] == 'pedestrian') && zoom >= 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['casing-width'] = 0.3;
            s_default['casing-color'] = '#bf96ce';
            s_default['width'] = 0.2;
            s_default['color'] = '#ffffff';
            s_default['z-index'] = 10;
            s_default['dashes'] = [2, 2];
        }

        if (((type == 'way' && tags['highway'] == 'steps') && zoom >= 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['casing-width'] = 0.3;
            s_default['casing-color'] = '#ffffff';
            s_default['width'] = 3;
            s_default['color'] = '#bf96ce';
            s_default['z-index'] = 10;
            s_default['dashes'] = [1, 1];
            s_default['linecap'] = 'butt';
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom === 12) || ((type == 'way' && tags['highway'] == 'track') && zoom === 12) || ((type == 'way' && tags['highway'] == 'residential') && zoom === 12) || ((type == 'way' && tags['highway'] == 'secondary') && zoom === 9) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 9 && zoom <= 10) || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom === 14)) {
            s_default['width'] = 0.3;
            s_default['opacity'] = 0.6;
            s_default['color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom === 13) || ((type == 'way' && tags['highway'] == 'track') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 0.6;
            s_default['opacity'] = 0.5;
            s_default['color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 14 && zoom <= 16) || ((type == 'way' && tags['highway'] == 'track') && zoom >= 14 && zoom <= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 1.5;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 16) || ((type == 'way' && tags['highway'] == 'track') && zoom >= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 2.5;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 9;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 1.2;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.3;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '1' || tags['living_street'] == 'true' || tags['living_street'] == 'yes')) && zoom === 15) || ((type == 'way' && tags['highway'] == 'service' && tags['service'] == 'parking_aisle') && zoom === 15)) {
            s_default['width'] = 0.2;
            s_default['opacity'] = 0.5;
            s_default['color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '1' || tags['living_street'] == 'true' || tags['living_street'] == 'yes')) && zoom >= 16) || ((type == 'way' && tags['highway'] == 'service' && tags['service'] == 'parking_aisle') && zoom >= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 1.2;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.3;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 14 && zoom <= 15) || ((type == 'way' && tags['highway'] == 'unclassified') && zoom >= 14 && zoom <= 15) || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom === 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 2.5;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom === 16) || ((type == 'way' && tags['highway'] == 'unclassified') && zoom === 16) || ((type == 'way' && tags['highway'] == 'living_street') && zoom === 16) || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom === 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 3.5;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 17) || ((type == 'way' && tags['highway'] == 'unclassified') && zoom >= 17) || ((type == 'way' && tags['highway'] == 'living_street') && zoom >= 17) || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom >= 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 4.5;
            s_default['color'] = '#ffffff';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['width'] = 1.2;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.35;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 11) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 1.4;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.35;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 12) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 12) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 12) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 3;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.35;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 13) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 13) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 13) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 4;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.35;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 14) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 14) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 14) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 5;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 15) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 15) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 15) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 6;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 16) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 16) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 16) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 7;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 17) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 17) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 17) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 8;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom === 18) || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom === 18) || ((type == 'way' && tags['highway'] == 'tertiary') && zoom === 18) || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom === 18)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 9;
            s_default['color'] = '#fcffd1';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 7)) {
            s_default['width'] = 1;
            s_default['color'] = '#fcea97';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 8)) {
            s_default['width'] = 2;
            s_default['color'] = '#fcea97';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 9) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 2;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 10) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 3;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 11) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 4;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 12) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 5;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 13) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 6;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 14) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 7;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 15) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 8;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 16) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 9;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 17) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 10;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom === 18) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom === 18)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 11;
            s_default['color'] = '#fcea97';
            s_default['casing-width'] = 0.5;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 6)) {
            s_default['width'] = 0.9;
            s_default['color'] = '#fbcd40';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom === 6)) {
            s_default['width'] = 1;
            s_default['color'] = '#fc9265';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 7)) {
            s_default['width'] = 1;
            s_default['color'] = '#fbcd40';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom === 7)) {
            s_default['width'] = 1.2;
            s_default['color'] = '#fc9265';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 8)) {
            s_default['width'] = 2;
            s_default['color'] = '#fbcd40';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom === 8)) {
            s_default['width'] = 2;
            s_default['color'] = '#fc9265';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 9) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 3;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 10) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 4;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 11) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 5;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 12) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 7;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 13) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 8;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 14) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom === 14) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 14) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom === 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 9;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 15) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom === 15) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 15) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom === 15)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 10;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 16) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom === 16) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 16) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom === 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 11;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 17) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom === 17) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 17) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom === 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 12;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom === 18) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom === 18) || ((type == 'way' && tags['highway'] == 'motorway') && zoom === 18) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom === 18)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-position'] = 'line';
            s_default['text-color'] = '#404040';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['width'] = 13;
            s_default['color'] = '#ffd780';
            s_default['casing-width'] = 1;
            s_default['casing-color'] = '#996703';
            s_default['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 9) || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 9) || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 9) || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 9) || ((type == 'way' && tags['highway'] == 'primary') && zoom >= 13) || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 13)) {
            s_centerline['width'] = 0.3;
            s_centerline['color'] = '#fa6478';
            s_centerline['z-index'] = 14;
            s_centerline['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && (tags['oneway'] == '1' || tags['oneway'] == 'true' || tags['oneway'] == 'yes')) && zoom >= 17)) {
            s_default['line-style'] = 'arrows';
            s_default['z-index'] = 15;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom === 7)) {
            s_default['width'] = 0.5;
            s_default['color'] = '#303030';
            s_default['z-index'] = 15;
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom === 7)) {
            s_ticks['width'] = 0.3;
            s_ticks['color'] = '#ffffff';
            s_ticks['dashes'] = [3, 3];
            s_ticks['z-index'] = 16;
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom === 8)) {
            s_default['width'] = 0.6;
            s_default['color'] = '#303030';
            s_default['z-index'] = 15;
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom === 8)) {
            s_ticks['width'] = 0.35;
            s_ticks['color'] = '#ffffff';
            s_ticks['dashes'] = [3, 3];
            s_ticks['z-index'] = 16;
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom >= 9)) {
            s_default['width'] = 1.4;
            s_default['color'] = '#606060';
            s_default['z-index'] = 15;
        }

        if (((type == 'way' && tags['railway'] == 'rail') && zoom >= 9)) {
            s_ticks['width'] = 1;
            s_ticks['color'] = '#ffffff';
            s_ticks['dashes'] = [6, 6];
            s_ticks['z-index'] = 16;
        }

        if (((type == 'way' && tags['railway'] == 'subway') && zoom >= 12)) {
            s_default['width'] = 3;
            s_default['color'] = '#072889';
            s_default['z-index'] = 15;
            s_default['dashes'] = [3, 3];
            s_default['opacity'] = 0.3;
            s_default['linecap'] = 'butt';
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['barrier'] == 'fence') && zoom >= 16)) {
            s_default['width'] = 0.3;
            s_default['color'] = 'black';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['barrier'] == 'wall') && zoom >= 16)) {
            s_default['width'] = 0.5;
            s_default['color'] = 'black';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && (!tags.hasOwnProperty('colour')) && (!tags.hasOwnProperty('color'))) && zoom >= 15)) {
            s_default['width'] = 0.5;
            s_default['color'] = '#a0a0a0';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'white') && zoom >= 15) || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'white') && zoom >= 15)) {
            s_default['width'] = 1;
            s_default['color'] = 'white';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'red') && zoom >= 15) || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'red') && zoom >= 15)) {
            s_default['width'] = 1;
            s_default['color'] = '#c00000';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'black') && zoom >= 15) || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'black') && zoom >= 15)) {
            s_default['width'] = 1;
            s_default['color'] = 'black';
            s_default['z-index'] = 16;
            s_default['-x-mapnik-layer'] = 'top';
        }



      

        if (((type == 'node' && tags['amenity'] == 'place_of_worship') && zoom >= 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-color'] = '#623f00';
            s_default['font-family'] = 'DejaVu Serif Italic';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-offset'] = 3;
            s_default['max-width'] = 70;
        }

        if (((selector == 'area' && tags['amenity'] == 'place_of_worship') && zoom >= 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-color'] = '#623f00';
            s_default['font-family'] = 'DejaVu Serif Italic';
            s_default['font-size'] = '9';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-offset'] = 3;
            s_default['max-width'] = 70;
            s_default['z-index'] = 16;
            s_default['width'] = 0.1;
            s_default['color'] = '#111111';
            s_default['text-opacity'] = '1';
            s_default['fill-color'] = '#777777';
            s_default['fill-opacity'] = 0.5;
        }

       

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '2'))) {
            s_default['width'] = 0.5;
            s_default['color'] = '#202020';
            s_default['dashes'] = [6, 4];
            s_default['opacity'] = 0.7;
            s_default['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom === 3)) {
            s_default['width'] = 0.4;
            s_default['color'] = '#7e0156';
            s_default['dashes'] = [3, 3];
            s_default['opacity'] = 0.5;
            s_default['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom >= 4)) {
            s_default['width'] = 1.3;
            s_default['color'] = '#ff99cc';
            s_default['opacity'] = 0.5;
            s_default['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '6') && zoom >= 10)) {
            s_default['width'] = 0.5;
            s_default['color'] = '#101010';
            s_default['dashes'] = [1, 2];
            s_default['opacity'] = 0.6;
            s_default['z-index'] = 16.1;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 4 && zoom <= 5)) {
            s_default['width'] = 0.3;
            s_default['color'] = '#000000';
            s_default['dashes'] = [1, 2];
            s_default['opacity'] = 0.8;
            s_default['z-index'] = 16.3;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 6)) {
            s_default['width'] = 0.7;
            s_default['color'] = '#000000';
            s_default['dashes'] = [1, 2];
            s_default['opacity'] = 0.8;
            s_default['z-index'] = 16.3;
        }



        if (((type == 'node' && tags['railway'] == 'station' && tags['transport'] !== 'subway') && zoom >= 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 7;
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Mono Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#000d6c';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }



        if (((type == 'node' && tags['railway'] == 'station' && tags['transport'] == 'subway') && zoom >= 12 && zoom <= 15)) {
            s_label['text'] = MapCSS.e_localize(tags, 'name');
            s_label['text-offset'] = 11;
            s_label['font-size'] = '9';
            s_label['font-family'] = 'DejaVu Sans Book';
            s_label['text-halo-radius'] = 2;
            s_label['text-color'] = '#1300bb';
            s_label['text-halo-color'] = '#ffffff';
            s_label['text-allow-overlap'] = 'false';
            s_label['-x-mapnik-min-distance'] = '0';
        }


        if (((type == 'node' && tags['railway'] == 'subway_entrance' && (tags.hasOwnProperty('name'))) && zoom >= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 11;
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 2;
            s_default['text-color'] = '#1300bb';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['aeroway'] == 'aerodrome') && zoom >= 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 12;
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Condensed Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#1e7ca5';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['z-index'] = 17;
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom >= 3 && zoom <= 6)) {
            s_default['allow-overlap'] = 'true';
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom === 3)) {
            s_default['text-offset'] = 4;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#505050';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['text-align'] = 'left';
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom >= 4 && zoom <= 6)) {
            s_default['text-offset'] = 6;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#303030';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['text-align'] = 'left';
        }

        if (((type == 'node' && (tags.hasOwnProperty('place')) && tags['population'] < '100000' && (tags.hasOwnProperty('capital')) && tags['admin_level'] < '5') && zoom >= 4 && zoom <= 5)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '7';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#404040';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && (tags.hasOwnProperty('place')) && tags['population'] >= '100000' && tags['population'] <= '5000000' && (tags.hasOwnProperty('capital')) && tags['admin_level'] < '5') && zoom >= 4 && zoom <= 5)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#404040';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['z-index'] = 1;
        }


        if (((type == 'node' && tags['place'] == 'city' && tags['population'] < '100000') && zoom === 6) || ((type == 'node' && tags['place'] == 'town' && tags['population'] < '100000' && (tags.hasOwnProperty('admin_level'))) && zoom === 6)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] < '100000') && zoom === 7) || ((type == 'node' && tags['place'] == 'town' && tags['population'] < '100000') && zoom === 7)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'town' && (!tags.hasOwnProperty('population'))) && zoom === 7) || ((type == 'node' && tags['place'] == 'city' && (!tags.hasOwnProperty('population'))) && zoom === 7)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom === 8)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom >= 6 && zoom <= 8) || ((type == 'node' && tags['place'] == 'town' && tags['population'] >= '100000' && tags['population'] <= '1000000' && (tags.hasOwnProperty('admin_level'))) && zoom === 6)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#303030';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom >= 7 && zoom <= 8) || ((type == 'node' && tags['place'] == 'town' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom === 7)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#303030';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] > '1000000') && zoom === 6)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#404040';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['z-index'] = 1;
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] > '1000000' && tags['population'] < '5000000') && zoom >= 7 && zoom <= 8)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '11';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#404040';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['z-index'] = 2;
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '5000000') && zoom >= 7 && zoom <= 8)) {
            s_default['text-offset'] = 5;
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '12';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#404040';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['z-index'] = 3;
        }

        if (((type == 'node' && tags['place'] == 'city' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes')) && zoom >= 9 && zoom <= 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -20;
            s_default['font-size'] = '14';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 4;
            s_default['text-color'] = '#101010';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '50';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city' && (tags['capital'] == '-1' || tags['capital'] == 'false' || tags['capital'] == 'no')) && zoom >= 9 && zoom <= 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -20;
            s_default['font-size'] = '14';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 2;
            s_default['text-color'] = '#101010';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['z-index'] = 1;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom === 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '12';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom === 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '20';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.2';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom === 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '25';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.3';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '40';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.2';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom === 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '50';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.3';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '80';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.2';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom >= 14)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '100';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-color'] = '#101010';
            s_default['text-opacity'] = '0.3';
            s_default['text-allow-overlap'] = 'true';
            s_default['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'village') && zoom >= 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 1;
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#606060';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
        }

        if (((type == 'node' && tags['place'] == 'hamlet') && zoom >= 9)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 1;
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#505050';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
        }

        if (((selector == 'area' && tags['landuse'] == 'nature_reserve') && zoom >= 9) || ((selector == 'area' && tags['leisure'] == 'park') && zoom >= 11)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 1;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Serif Italic';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#3c8000';
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-allow-overlap'] = 'false';
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 10) || ((type == 'way' && tags['waterway'] == 'river') && zoom >= 9) || ((type == 'way' && tags['waterway'] == 'canal') && zoom >= 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '9';
            s_default['font-family'] = 'DejaVu Sans Oblique';
            s_default['text-color'] = '#547bd1';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = '#ffffff';
            s_default['text-position'] = 'line';
        }

        if (((type == 'node' && tags['place'] == 'continent') && zoom <= 3)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -10;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = -1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'continent') && zoom >= 2 && zoom <= 3)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -10;
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = -1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'ocean') && zoom <= 6)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Oblique';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = -1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'ocean') && zoom >= 7)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '11';
            s_default['font-family'] = 'DejaVu Sans Oblique';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = -1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'sea') && zoom <= 6)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans Oblique';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#4976d1';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'sea') && zoom >= 7)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans Oblique';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#4976d1';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '4500') && zoom >= 3 && zoom <= 4)) {
            s_default['text'] = MapCSS.e_localize(tags, 'ele');
            s_default['text-offset'] = 3;
            s_default['font-size'] = '7';
            s_default['font-family'] = 'DejaVu Sans Mono Book';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#664229';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '3500') && zoom >= 5 && zoom <= 6)) {
            s_default['text'] = MapCSS.e_localize(tags, 'ele');
            s_default['text-offset'] = 3;
            s_default['font-size'] = '7';
            s_default['font-family'] = 'DejaVu Sans Mono Book';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#664229';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '2500') && zoom >= 7 && zoom <= 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'ele');
            s_default['text-offset'] = 3;
            s_default['font-size'] = '7';
            s_default['font-family'] = 'DejaVu Sans Mono Book';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#664229';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak') && zoom >= 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 3;
            s_default['font-size'] = '7';
            s_default['font-family'] = 'DejaVu Sans Mono Book';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#664229';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 2 && zoom <= 3)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '10';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#dd5875';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = 1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 4 && zoom <= 8)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '13';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = 'red';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = 1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 8 && zoom <= 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 0;
            s_default['font-size'] = '16';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = 'red';
            s_default['text-halo-color'] = '#ffffff';
            s_default['z-index'] = 1;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom >= 3 && zoom <= 5)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -5;
            s_default['font-size'] = '8';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-halo-radius'] = 0;
            s_default['text-color'] = '#101010';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
            s_default['max-width'] = 50;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 6 && zoom <= 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = 17;
            s_default['font-size'] = '14';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#606060';
            s_default['text-halo-color'] = '#ffffff';
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '6') && zoom >= 10)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['text-offset'] = -10;
            s_default['font-size'] = '12';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#7848a0';
            s_default['text-halo-color'] = '#ffffff';
        }

        if (((type == 'node' && tags['place'] == 'suburb') && zoom >= 12)) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '12';
            s_default['font-family'] = 'DejaVu Sans ExtraLight';
            s_default['text-color'] = '#7848a0';
            s_default['z-index'] = 20;
        }

        if (((selector == 'area' && (tags.hasOwnProperty('building'))) && zoom >= 13)) {
            s_default['width'] = 0.3;
            s_default['color'] = '#cca352';
            s_default['z-index'] = 17;
        }

        if (((selector == 'area' && (tags['building'] == '1' || tags['building'] == 'true' || tags['building'] == 'yes')) && zoom >= 15)) {
            s_default['fill-color'] = '#E7CCB4';
            s_default['z-index'] = 17;
        }

        if (((selector == 'area' && tags['building'] == 'public') && zoom >= 15)) {
            s_default['fill-color'] = '#edc2ba';
            s_default['z-index'] = 17;
        }

        if (((selector == 'area' && (tags.hasOwnProperty('building')) && (tags['building '] == '-1' || tags['building '] == 'false' || tags['building '] == 'no') && tags['building'] !== 'public') && zoom >= 15)) {
            s_default['fill-color'] = '#D8D1D1';
            s_default['z-index'] = 17;
        }

        if (((selector == 'area' && (tags.hasOwnProperty('building'))) && zoom >= 15 && zoom <= 16)) {
            s_default['text'] = MapCSS.e_localize(tags, 'addr:housenumber');
            s_default['text-halo-radius'] = 1;
            s_default['text-position'] = 'center';
            s_default['font-size'] = '7';
            s_default['-x-mapnik-min-distance'] = '10';
            s_default['opacity'] = 0.8;
        }

        if (((selector == 'area' && (tags.hasOwnProperty('building'))) && zoom >= 17)) {
            s_default['text'] = MapCSS.e_localize(tags, 'addr:housenumber');
            s_default['text-halo-radius'] = 1;
            s_default['text-position'] = 'center';
            s_default['font-size'] = '8';
            s_default['-x-mapnik-min-distance'] = '10';
            s_default['opacity'] = 0.8;
        }

        if (((type == 'node' && tags['highway'] == 'milestone' && (tags.hasOwnProperty('pk'))) && zoom >= 13)) {
            s_default['text'] = MapCSS.e_localize(tags, 'pk');
            s_default['font-size'] = '7';
            s_default['text-halo-radius'] = 5;
            s_default['-x-mapnik-min-distance'] = '0';
        }

        if (Object.keys(s_default).length) {
            style['default'] = s_default;
        }
        if (Object.keys(s_centerline).length) {
            style['centerline'] = s_centerline;
        }
        if (Object.keys(s_ticks).length) {
            style['ticks'] = s_ticks;
        }
        if (Object.keys(s_label).length) {
            style['label'] = s_label;
        }
        return style;
    }
    
    var sprite_images = {
    }, external_images = [], presence_tags = ['shop'], value_tags = ['color', 'amenity', 'pk', 'building ', 'marking', 'service', 'addr:housenumber', 'population', 'leisure', 'waterway', 'aeroway', 'landuse', 'barrier', 'colour', 'railway', 'oneway', 'religion', 'tourism', 'admin_level', 'transport', 'name', 'building', 'place', 'residential', 'highway', 'ele', 'living_street', 'natural', 'boundary', 'capital'];

    MapCSS.loadStyle('osmosnimki', restyle, sprite_images, external_images, presence_tags, value_tags);
})(MapCSS);
    
