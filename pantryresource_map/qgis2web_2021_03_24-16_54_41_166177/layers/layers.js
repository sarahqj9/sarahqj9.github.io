var wms_layers = [];


        var lyr_BasemapESRIGraylight_0 = new ol.layer.Tile({
            'title': 'Basemap: ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MarylandCountyBoundaries_1 = new ol.format.GeoJSON();
var features_MarylandCountyBoundaries_1 = format_MarylandCountyBoundaries_1.readFeatures(json_MarylandCountyBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarylandCountyBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarylandCountyBoundaries_1.addFeatures(features_MarylandCountyBoundaries_1);
var lyr_MarylandCountyBoundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarylandCountyBoundaries_1, 
                style: style_MarylandCountyBoundaries_1,
                interactive: false,
                title: '<img src="styles/legend/MarylandCountyBoundaries_1.png" /> Maryland County Boundaries'
            });
var format_InstitutionsWithPantriesbyType_2 = new ol.format.GeoJSON();
var features_InstitutionsWithPantriesbyType_2 = format_InstitutionsWithPantriesbyType_2.readFeatures(json_InstitutionsWithPantriesbyType_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitutionsWithPantriesbyType_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitutionsWithPantriesbyType_2.addFeatures(features_InstitutionsWithPantriesbyType_2);
var lyr_InstitutionsWithPantriesbyType_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InstitutionsWithPantriesbyType_2, 
                style: style_InstitutionsWithPantriesbyType_2,
                interactive: true,
    title: 'Institutions With Pantries by Type<br />\
    <img src="styles/legend/InstitutionsWithPantriesbyType_2_0.png" /> 2 Year Public<br />\
    <img src="styles/legend/InstitutionsWithPantriesbyType_2_1.png" /> 4 Year Private<br />\
    <img src="styles/legend/InstitutionsWithPantriesbyType_2_2.png" /> 4 Year Public<br />'
        });

lyr_BasemapESRIGraylight_0.setVisible(true);lyr_MarylandCountyBoundaries_1.setVisible(true);lyr_InstitutionsWithPantriesbyType_2.setVisible(true);
var layersList = [lyr_BasemapESRIGraylight_0,lyr_MarylandCountyBoundaries_1,lyr_InstitutionsWithPantriesbyType_2];
lyr_MarylandCountyBoundaries_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'county': 'county', 'district': 'district', 'county_fip': 'county_fip', 'countynum': 'countynum', 'creation_d': 'creation_d', 'last_updat': 'last_updat', });
lyr_InstitutionsWithPantriesbyType_2.set('fieldAliases', {'Name': 'Name', 'Pantry': 'Pantry', 'Type': 'Type', 'Survey_Res': 'Survey_Res', 'Program_Na': 'Program Name', 'Site': 'Website', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MarylandCountyBoundaries_1.set('fieldImages', {'OBJECTID': 'Hidden', 'county': 'Hidden', 'district': 'Hidden', 'county_fip': 'Hidden', 'countynum': 'Hidden', 'creation_d': 'Hidden', 'last_updat': 'Hidden', });
lyr_InstitutionsWithPantriesbyType_2.set('fieldImages', {'Name': 'TextEdit', 'Pantry': 'Hidden', 'Type': 'Hidden', 'Survey_Res': 'Hidden', 'Program_Na': 'TextEdit', 'Site': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_MarylandCountyBoundaries_1.set('fieldLabels', {});
lyr_InstitutionsWithPantriesbyType_2.set('fieldLabels', {'Name': 'header label', 'Program_Na': 'inline label', 'Site': 'inline label', });
lyr_InstitutionsWithPantriesbyType_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});