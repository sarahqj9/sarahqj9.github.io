var wms_layers = [];

var format_pov_percent2014_0 = new ol.format.GeoJSON();
var features_pov_percent2014_0 = format_pov_percent2014_0.readFeatures(json_pov_percent2014_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pov_percent2014_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pov_percent2014_0.addFeatures(features_pov_percent2014_0);
var lyr_pov_percent2014_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pov_percent2014_0, 
                style: style_pov_percent2014_0,
                interactive: true,
    title: 'pov_percent2014<br />\
    <img src="styles/legend/pov_percent2014_0_0.png" /> 0 - 6<br />\
    <img src="styles/legend/pov_percent2014_0_1.png" /> 6 - 16<br />\
    <img src="styles/legend/pov_percent2014_0_2.png" /> 16 - 31<br />\
    <img src="styles/legend/pov_percent2014_0_3.png" /> 31 - 52<br />\
    <img src="styles/legend/pov_percent2014_0_4.png" /> 52 - 100<br />'
        });

lyr_pov_percent2014_0.setVisible(true);
var layersList = [lyr_pov_percent2014_0];
lyr_pov_percent2014_0.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'ttl_ppE': 'ttl_ppE', 'ttl_ppM': 'ttl_ppM', 'ttl_nrE': 'ttl_nrE', 'ttl_nrM': 'ttl_nrM', 'undrg_E': 'undrg_E', 'undrg_M': 'undrg_M', 'grd_ppE': 'grd_ppE', 'grd_ppM': 'grd_ppM', 'Total_stu': 'Total_stu', 'GEOID_2': 'GEOID_2', 'NAME_2': 'NAME_2', 'ttl_lvE': 'ttl_lvE', 'ttl_lvM': 'ttl_lvM', 'tlncm_E': 'tlncm_E', 'tlncm_M': 'tlncm_M', 'undrg_E_2': 'undrg_E_2', 'undrg_M_2': 'undrg_M_2', 'grd_p_E': 'grd_p_E', 'grd_p_M': 'grd_p_M', 'Stud_Pov': 'Stud_Pov', 'Pov_percen': 'Pov_percen', 'percen_pov': 'percen_pov', });
lyr_pov_percent2014_0.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'TextEdit', 'ttl_ppE': 'Hidden', 'ttl_ppM': 'Hidden', 'ttl_nrE': 'Hidden', 'ttl_nrM': 'Hidden', 'undrg_E': 'Hidden', 'undrg_M': 'Hidden', 'grd_ppE': 'Hidden', 'grd_ppM': 'Hidden', 'Total_stu': 'Hidden', 'GEOID_2': 'Hidden', 'NAME_2': 'Hidden', 'ttl_lvE': 'Hidden', 'ttl_lvM': 'Hidden', 'tlncm_E': 'Hidden', 'tlncm_M': 'Hidden', 'undrg_E_2': 'Hidden', 'undrg_M_2': 'Hidden', 'grd_p_E': 'Hidden', 'grd_p_M': 'Hidden', 'Stud_Pov': 'Hidden', 'Pov_percen': 'Hidden', 'percen_pov': 'TextEdit', });
lyr_pov_percent2014_0.set('fieldLabels', {'NAME': 'inline label', 'percen_pov': 'inline label', });
lyr_pov_percent2014_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});