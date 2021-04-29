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
var format_PGjoin_datacopy_1 = new ol.format.GeoJSON();
var features_PGjoin_datacopy_1 = format_PGjoin_datacopy_1.readFeatures(json_PGjoin_datacopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PGjoin_datacopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PGjoin_datacopy_1.addFeatures(features_PGjoin_datacopy_1);
var lyr_PGjoin_datacopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PGjoin_datacopy_1, 
                style: style_PGjoin_datacopy_1,
                interactive: false,
    title: 'PGjoin_data copy<br />\
    <img src="styles/legend/PGjoin_datacopy_1_0.png" /> 35991 - 85869<br />\
    <img src="styles/legend/PGjoin_datacopy_1_1.png" /> 85869 - 135747<br />\
    <img src="styles/legend/PGjoin_datacopy_1_2.png" /> 135747 - 185625<br />'
        });
var format_PGjoin_data_2 = new ol.format.GeoJSON();
var features_PGjoin_data_2 = format_PGjoin_data_2.readFeatures(json_PGjoin_data_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PGjoin_data_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PGjoin_data_2.addFeatures(features_PGjoin_data_2);
var lyr_PGjoin_data_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PGjoin_data_2, 
                style: style_PGjoin_data_2,
                interactive: true,
    title: 'PGjoin_data<br />\
    <img src="styles/legend/PGjoin_data_2_0.png" /> 4 - 35<br />\
    <img src="styles/legend/PGjoin_data_2_1.png" /> 35 - 66<br />\
    <img src="styles/legend/PGjoin_data_2_2.png" /> 66 - 97<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_PGjoin_datacopy_1.setVisible(true);lyr_PGjoin_data_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_PGjoin_datacopy_1,lyr_PGjoin_data_2];
lyr_PGjoin_datacopy_1.set('fieldAliases', {'GEOID.x': 'GEOID.x', 'NAME.x': 'NAME.x', 'incomeE': 'incomeE', 'incomeM': 'incomeM', 'GEOID.y': 'GEOID.y', 'NAME.y': 'NAME.y', 'total_raceE': 'total_raceE', 'total_raceM': 'total_raceM', 'not_horlE': 'not_horlE', 'not_horlM': 'not_horlM', 'BlAfmE': 'BlAfmE', 'BlAfmM': 'BlAfmM', 'BlAfm_pop': 'BlAfm_pop', 'bi_class': 'bi_class', 'Percent': 'Percent', });
lyr_PGjoin_data_2.set('fieldAliases', {'GEOID.x': 'GEOID.x', 'NAME.x': 'NAME.x', 'incomeE': 'incomeE', 'incomeM': 'incomeM', 'GEOID.y': 'GEOID.y', 'NAME.y': 'NAME.y', 'total_raceE': 'total_raceE', 'total_raceM': 'total_raceM', 'not_horlE': 'not_horlE', 'not_horlM': 'not_horlM', 'BlAfmE': 'BlAfmE', 'BlAfmM': 'BlAfmM', 'BlAfm_pop': 'BlAfm_pop', 'bi_class': 'bi_class', 'Percent': 'Percent', });
lyr_PGjoin_datacopy_1.set('fieldImages', {'GEOID.x': 'Hidden', 'NAME.x': 'TextEdit', 'incomeE': 'Range', 'incomeM': 'Hidden', 'GEOID.y': 'Hidden', 'NAME.y': 'Hidden', 'total_raceE': 'Hidden', 'total_raceM': 'Hidden', 'not_horlE': 'Hidden', 'not_horlM': 'Hidden', 'BlAfmE': 'Hidden', 'BlAfmM': 'Hidden', 'BlAfm_pop': 'Hidden', 'bi_class': 'Hidden', 'Percent': 'Range', });
lyr_PGjoin_data_2.set('fieldImages', {'GEOID.x': 'Hidden', 'NAME.x': 'TextEdit', 'incomeE': 'UniqueValues', 'incomeM': 'Hidden', 'GEOID.y': 'Hidden', 'NAME.y': 'Hidden', 'total_raceE': 'Hidden', 'total_raceM': 'Hidden', 'not_horlE': 'Hidden', 'not_horlM': 'Hidden', 'BlAfmE': 'Hidden', 'BlAfmM': 'Hidden', 'BlAfm_pop': 'Hidden', 'bi_class': 'Hidden', 'Percent': 'UniqueValues', });
lyr_PGjoin_datacopy_1.set('fieldLabels', {'NAME.x': 'no label', 'incomeE': 'no label', 'Percent': 'no label', });
lyr_PGjoin_data_2.set('fieldLabels', {'NAME.x': 'header label', 'incomeE': 'inline label', 'Percent': 'inline label', });
lyr_PGjoin_data_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});