
(function (MapCSS) {
    'use strict';

    function restyle(style, tags, zoom, type, selector) {
        var s_default = {};

        if ((selector == 'canvas')) {
            s_default['fill-color'] = '#fff';
        }

        if (((type == 'way' && (tags.hasOwnProperty('highway'))))) {
            s_default['color'] = '#000';
            s_default['width'] = 1;
        }

        if (((selector == 'area' && tags['natural'] == 'wood')) || ((selector == 'area' && tags['landuse'] == 'forest'))) {
            s_default['fill-color'] = '#69c077';
        }

        if (((selector == 'area' && tags['natural'] == 'water'))) {
            s_default['fill-color'] = '#9c0f8';
        }

        if (((type == 'node' && tags['place'] == 'town')) || ((type == 'node' && tags['place'] == 'city'))) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '16';
            s_default['font-family'] = 'DejaVu Sans Bold';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
        }

        if (((type == 'node' && tags['place'] == 'village'))) {
            s_default['text'] = MapCSS.e_localize(tags, 'name');
            s_default['font-size'] = '14';
            s_default['font-family'] = 'DejaVu Sans Book';
            s_default['text-halo-radius'] = 1;
            s_default['text-color'] = '#202020';
            s_default['text-halo-color'] = '#ffffff';
        }

        if (Object.keys(s_default).length) {
            style['default'] = s_default;
        }
        return style;
    }
    
    var sprite_images = {
    }, external_images = [], presence_tags = ['highway'], value_tags = ['natural', 'landuse', 'place', 'name'];

    MapCSS.loadStyle('converted', restyle, sprite_images, external_images, presence_tags, value_tags);
    MapCSS.preloadExternalImages('converted');
})(MapCSS);
    