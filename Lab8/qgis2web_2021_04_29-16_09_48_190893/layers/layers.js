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
var format_PGjoin_data_1 = new ol.format.GeoJSON();
var features_PGjoin_data_1 = format_PGjoin_data_1.readFeatures(json_PGjoin_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PGjoin_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PGjoin_data_1.addFeatures(features_PGjoin_data_1);
var lyr_PGjoin_data_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PGjoin_data_1, 
                style: style_PGjoin_data_1,
                interactive: true,
    title: 'PGjoin_data<br />\
    <img src="styles/legend/PGjoin_data_1_0.png" /> 1-1<br />\
    <img src="styles/legend/PGjoin_data_1_1.png" /> 1-2<br />\
    <img src="styles/legend/PGjoin_data_1_2.png" /> 1-3<br />\
    <img src="styles/legend/PGjoin_data_1_3.png" /> 2-1<br />\
    <img src="styles/legend/PGjoin_data_1_4.png" /> 2-2<br />\
    <img src="styles/legend/PGjoin_data_1_5.png" /> 2-3<br />\
    <img src="styles/legend/PGjoin_data_1_6.png" /> 3-1<br />\
    <img src="styles/legend/PGjoin_data_1_7.png" /> 3-2<br />\
    <img src="styles/legend/PGjoin_data_1_8.png" /> 3-3<br />\
    <img src="styles/legend/PGjoin_data_1_9.png" /> <br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_PGjoin_data_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_PGjoin_data_1];
lyr_PGjoin_data_1.set('fieldAliases', {'GEOID.x': 'GEOID.x', 'NAME.x': 'Census Tract Name', 'incomeE': 'MedianHousehold Income', 'BlAfm_pop': 'Percent Population', 'bi_class': 'bi_class', });
lyr_PGjoin_data_1.set('fieldImages', {'GEOID.x': 'Hidden', 'NAME.x': 'TextEdit', 'incomeE': 'UniqueValues', 'BlAfm_pop': 'Range', 'bi_class': 'TextEdit', });
lyr_PGjoin_data_1.set('fieldLabels', {'NAME.x': 'header label', 'incomeE': 'header label', 'BlAfm_pop': 'header label', 'bi_class': 'no label', });
lyr_PGjoin_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});