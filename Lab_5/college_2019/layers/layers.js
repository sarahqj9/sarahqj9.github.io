var wms_layers = [];

var format_pov_percent2019_0 = new ol.format.GeoJSON();
var features_pov_percent2019_0 = format_pov_percent2019_0.readFeatures(json_pov_percent2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pov_percent2019_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pov_percent2019_0.addFeatures(features_pov_percent2019_0);
var lyr_pov_percent2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pov_percent2019_0, 
                style: style_pov_percent2019_0,
                interactive: true,
    title: 'pov_percent2019<br />\
    <img src="styles/legend/pov_percent2019_0_0.png" /> 0 - 6<br />\
    <img src="styles/legend/pov_percent2019_0_1.png" /> 6 - 16<br />\
    <img src="styles/legend/pov_percent2019_0_2.png" /> 16 - 31<br />\
    <img src="styles/legend/pov_percent2019_0_3.png" /> 31 - 52<br />\
    <img src="styles/legend/pov_percent2019_0_4.png" /> 52 - 100<br />'
        });

lyr_pov_percent2019_0.setVisible(true);
var layersList = [lyr_pov_percent2019_0];
lyr_pov_percent2019_0.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'ttl_lvE': 'ttl_lvE', 'ttl_lvM': 'ttl_lvM', 'tlncm_E': 'tlncm_E', 'tlncm_M': 'tlncm_M', 'undrg_E': 'undrg_E', 'undrg_M': 'undrg_M', 'grd_p_E': 'grd_p_E', 'grd_p_M': 'grd_p_M', 'stupov_19': 'stupov_19', 'GEOID_2': 'GEOID_2', 'NAME_2': 'NAME_2', 'ttl_ppE': 'ttl_ppE', 'ttl_ppM': 'ttl_ppM', 'ttl_nrE': 'ttl_nrE', 'ttl_nrM': 'ttl_nrM', 'undrg_E_2': 'undrg_E_2', 'undrg_M_2': 'undrg_M_2', 'grd_ppE': 'grd_ppE', 'grd_ppM': 'grd_ppM', 'total_stu': 'total_stu', 'perc_pov': 'perc_pov', });
lyr_pov_percent2019_0.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'TextEdit', 'ttl_lvE': 'Hidden', 'ttl_lvM': 'Hidden', 'tlncm_E': 'Hidden', 'tlncm_M': 'Hidden', 'undrg_E': 'Hidden', 'undrg_M': 'Hidden', 'grd_p_E': 'Hidden', 'grd_p_M': 'Hidden', 'stupov_19': 'Hidden', 'GEOID_2': 'Hidden', 'NAME_2': 'Hidden', 'ttl_ppE': 'Hidden', 'ttl_ppM': 'Hidden', 'ttl_nrE': 'Hidden', 'ttl_nrM': 'Hidden', 'undrg_E_2': 'Hidden', 'undrg_M_2': 'Hidden', 'grd_ppE': 'Hidden', 'grd_ppM': 'Hidden', 'total_stu': 'Hidden', 'perc_pov': 'TextEdit', });
lyr_pov_percent2019_0.set('fieldLabels', {'NAME': 'no label', 'perc_pov': 'no label', });
lyr_pov_percent2019_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});