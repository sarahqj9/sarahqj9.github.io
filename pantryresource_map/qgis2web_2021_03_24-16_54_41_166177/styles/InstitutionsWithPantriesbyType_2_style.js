var size = 0;
var placement = 'point';
function categories_InstitutionsWithPantriesbyType_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '2p':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.200000000000001 + size,
             fill: new ol.style.Fill({color: 'rgba(204,106,53,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4i':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.200000000000001 + size,
             fill: new ol.style.Fill({color: 'rgba(198,123,211,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4p':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.200000000000001 + size,
             fill: new ol.style.Fill({color: 'rgba(78,165,212,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_InstitutionsWithPantriesbyType_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_Type");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_InstitutionsWithPantriesbyType_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
