var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_dissolved_percentcopy_1 = new ol.format.GeoJSON();
var features_dissolved_percentcopy_1 = format_dissolved_percentcopy_1.readFeatures(json_dissolved_percentcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dissolved_percentcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dissolved_percentcopy_1.addFeatures(features_dissolved_percentcopy_1);
var lyr_dissolved_percentcopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dissolved_percentcopy_1, 
                style: style_dissolved_percentcopy_1,
                interactive: false,
    title: 'dissolved_percent copy<br />\
    <img src="styles/legend/dissolved_percentcopy_1_0.png" /> 40697 - 72575<br />\
    <img src="styles/legend/dissolved_percentcopy_1_1.png" /> 72575 - 104453<br />\
    <img src="styles/legend/dissolved_percentcopy_1_2.png" /> 104453 - 136331<br />'
        });
var format_dissolved_percent_2 = new ol.format.GeoJSON();
var features_dissolved_percent_2 = format_dissolved_percent_2.readFeatures(json_dissolved_percent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dissolved_percent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dissolved_percent_2.addFeatures(features_dissolved_percent_2);
var lyr_dissolved_percent_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dissolved_percent_2, 
                style: style_dissolved_percent_2,
                interactive: true,
    title: 'dissolved_percent<br />\
    <img src="styles/legend/dissolved_percent_2_0.png" /> 4 - 35<br />\
    <img src="styles/legend/dissolved_percent_2_1.png" /> 35 - 66<br />\
    <img src="styles/legend/dissolved_percent_2_2.png" /> 66 - 97<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_dissolved_percentcopy_1.setVisible(true);lyr_dissolved_percent_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_dissolved_percentcopy_1,lyr_dissolved_percent_2];
lyr_dissolved_percentcopy_1.set('fieldAliases', {'GEOID.x': 'GEOID.x', 'NAME.x': 'NAME.x', 'incomeE': 'incomeE', 'incomeM': 'incomeM', 'GEOID.y': 'GEOID.y', 'NAME.y': 'NAME.y', 'total_race': 'total_race', 'total_ra_1': 'total_ra_1', 'not_horlE': 'not_horlE', 'not_horlM': 'not_horlM', 'BlAfmE': 'BlAfmE', 'BlAfmM': 'BlAfmM', 'BlAfm_pop': 'BlAfm_pop', 'bi_class': 'bi_class', 'Percent': 'Percent', });
lyr_dissolved_percent_2.set('fieldAliases', {'GEOID.x': 'GEOID.x', 'NAME.x': 'NAME.x', 'incomeE': 'incomeE', 'incomeM': 'incomeM', 'GEOID.y': 'GEOID.y', 'NAME.y': 'NAME.y', 'total_race': 'total_race', 'total_ra_1': 'total_ra_1', 'not_horlE': 'not_horlE', 'not_horlM': 'not_horlM', 'BlAfmE': 'BlAfmE', 'BlAfmM': 'BlAfmM', 'BlAfm_pop': 'BlAfm_pop', 'bi_class': 'bi_class', 'Percent': 'Percent', });
lyr_dissolved_percentcopy_1.set('fieldImages', {'GEOID.x': 'Hidden', 'NAME.x': 'TextEdit', 'incomeE': 'TextEdit', 'incomeM': 'Hidden', 'GEOID.y': 'Hidden', 'NAME.y': 'Hidden', 'total_race': 'Hidden', 'total_ra_1': 'Hidden', 'not_horlE': 'Hidden', 'not_horlM': 'Hidden', 'BlAfmE': 'Hidden', 'BlAfmM': 'Hidden', 'BlAfm_pop': 'Hidden', 'bi_class': 'Hidden', 'Percent': 'Range', });
lyr_dissolved_percent_2.set('fieldImages', {'GEOID.x': 'Hidden', 'NAME.x': 'TextEdit', 'incomeE': 'TextEdit', 'incomeM': 'Hidden', 'GEOID.y': 'Hidden', 'NAME.y': 'Hidden', 'total_race': 'Hidden', 'total_ra_1': 'Hidden', 'not_horlE': 'Hidden', 'not_horlM': 'Hidden', 'BlAfmE': 'Hidden', 'BlAfmM': 'Hidden', 'BlAfm_pop': 'Hidden', 'bi_class': 'Hidden', 'Percent': 'Range', });
lyr_dissolved_percentcopy_1.set('fieldLabels', {'NAME.x': 'no label', 'incomeE': 'no label', 'Percent': 'no label', });
lyr_dissolved_percent_2.set('fieldLabels', {'NAME.x': 'header label', 'incomeE': 'header label', 'Percent': 'header label', });
lyr_dissolved_percent_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});