ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([776129.680469, 8059002.020535, 829998.847191, 8090064.103900]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_Stamen_1 = new ol.layer.Tile({
            'title': 'Stamen',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_4 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_Cbba_Continuo_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM_Cbba_Continuo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_Cbba_Continuo_5.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [788810.421843, 8059437.105524, 811271.421345, 8089744.480852]
                            })
                        });
var lyr_DEM_Cbba_Clasificado_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM_Cbba_Clasificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_Cbba_Clasificado_6.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [788810.421843, 8059437.105524, 811271.421345, 8089744.480852]
                            })
                        });
var lyr_Relieve_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relieve",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Relieve_7.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [788810.421843, 8059437.105524, 811271.421345, 8089744.480852]
                            })
                        });
var format_Densidad_Poblacin_habha_8 = new ol.format.GeoJSON();
var features_Densidad_Poblacin_habha_8 = format_Densidad_Poblacin_habha_8.readFeatures(json_Densidad_Poblacin_habha_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Densidad_Poblacin_habha_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidad_Poblacin_habha_8.addFeatures(features_Densidad_Poblacin_habha_8);
var lyr_Densidad_Poblacin_habha_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidad_Poblacin_habha_8, 
                style: style_Densidad_Poblacin_habha_8,
                interactive: true,
    title: 'Densidad_Población_(hab/ha)<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_8_0.png" /> 0 - 50<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_8_1.png" /> 50 - 100<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_8_2.png" /> 100 - 175<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_8_3.png" /> 175 - 250<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_8_4.png" /> 250 - 595.3307<br />'
        });
var lyr_INDV_Sep_2020_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "INDV_Sep_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/INDV_Sep_2020_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7557172.957917, -2086441.574875, -7312435.677240, -1836514.686398]
                            })
                        });
var lyr_INDV_Ene_2020_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "INDV_Ene_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/INDV_Ene_2020_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7380504.842905, -1984068.008173, -7352699.676097, -1943859.889005]
                            })
                        });
var format_Areas_Verdes_PTDI2016_11 = new ol.format.GeoJSON();
var features_Areas_Verdes_PTDI2016_11 = format_Areas_Verdes_PTDI2016_11.readFeatures(json_Areas_Verdes_PTDI2016_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Areas_Verdes_PTDI2016_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Verdes_PTDI2016_11.addFeatures(features_Areas_Verdes_PTDI2016_11);
var lyr_Areas_Verdes_PTDI2016_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_Verdes_PTDI2016_11, 
                style: style_Areas_Verdes_PTDI2016_11,
                interactive: true,
    title: 'Areas_Verdes_PTDI2016<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_0.png" /> Área Agropecuaria<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_1.png" /> Área de Equipamiento Especial y Preservación Paisajística Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_2.png" /> Área de Equipamientos Especiales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_3.png" /> Área de Equipamientos Sociales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_4.png" /> Área de Equipamientos Urbano Regionales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_5.png" /> Área de Mitigación Ambiental y Jerarquización de la Estructura Natural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_6.png" /> Área de Preservación e Integración Paisajística<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_7.png" /> Área de Preservación Natural y Dinamización Cultural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_8.png" /> Área de Protección y Bioregulación Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_9.png" /> Área forestal<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_10.png" /> Área Industrial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_11.png" /> Áreas Verdes Afectadas<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_12.png" /> Áreas Verdes y de Recreación<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_13.png" /> Residencial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_11_14.png" /> <br />'
        });
var format_Rios_12 = new ol.format.GeoJSON();
var features_Rios_12 = format_Rios_12.readFeatures(json_Rios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Rios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_12.addFeatures(features_Rios_12);
var lyr_Rios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_12, 
                style: style_Rios_12,
                interactive: true,
                title: '<img src="styles/legend/Rios_12.png" /> Rios'
            });
var format_Cuerpos_de_Agua_13 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_13 = format_Cuerpos_de_Agua_13.readFeatures(json_Cuerpos_de_Agua_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuerpos_de_Agua_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_13.addFeatures(features_Cuerpos_de_Agua_13);
var lyr_Cuerpos_de_Agua_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_13, 
                style: style_Cuerpos_de_Agua_13,
                interactive: true,
                title: '<img src="styles/legend/Cuerpos_de_Agua_13.png" /> Cuerpos_de_Agua'
            });
var format_Cuencas_14 = new ol.format.GeoJSON();
var features_Cuencas_14 = format_Cuencas_14.readFeatures(json_Cuencas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuencas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_14.addFeatures(features_Cuencas_14);
var lyr_Cuencas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_14, 
                style: style_Cuencas_14,
                interactive: true,
                title: '<img src="styles/legend/Cuencas_14.png" /> Cuencas'
            });
var format_Canal_de_Riego_15 = new ol.format.GeoJSON();
var features_Canal_de_Riego_15 = format_Canal_de_Riego_15.readFeatures(json_Canal_de_Riego_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Canal_de_Riego_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canal_de_Riego_15.addFeatures(features_Canal_de_Riego_15);
var lyr_Canal_de_Riego_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canal_de_Riego_15, 
                style: style_Canal_de_Riego_15,
                interactive: true,
                title: '<img src="styles/legend/Canal_de_Riego_15.png" /> Canal_de_Riego'
            });
var format_Torrenteras_canales_16 = new ol.format.GeoJSON();
var features_Torrenteras_canales_16 = format_Torrenteras_canales_16.readFeatures(json_Torrenteras_canales_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Torrenteras_canales_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torrenteras_canales_16.addFeatures(features_Torrenteras_canales_16);
var lyr_Torrenteras_canales_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Torrenteras_canales_16, 
                style: style_Torrenteras_canales_16,
                interactive: true,
                title: '<img src="styles/legend/Torrenteras_canales_16.png" /> Torrenteras_canales'
            });
var format_Circuito_Ciclovia_17 = new ol.format.GeoJSON();
var features_Circuito_Ciclovia_17 = format_Circuito_Ciclovia_17.readFeatures(json_Circuito_Ciclovia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Circuito_Ciclovia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuito_Ciclovia_17.addFeatures(features_Circuito_Ciclovia_17);
var lyr_Circuito_Ciclovia_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Circuito_Ciclovia_17, 
                style: style_Circuito_Ciclovia_17,
                interactive: true,
    title: 'Circuito_Ciclovia<br />\
    <img src="styles/legend/Circuito_Ciclovia_17_0.png" /> <br />\
    <img src="styles/legend/Circuito_Ciclovia_17_1.png" /> Existente<br />\
    <img src="styles/legend/Circuito_Ciclovia_17_2.png" /> Posible Trazo<br />'
        });
var format_Lmites_Distritales_18 = new ol.format.GeoJSON();
var features_Lmites_Distritales_18 = format_Lmites_Distritales_18.readFeatures(json_Lmites_Distritales_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Lmites_Distritales_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmites_Distritales_18.addFeatures(features_Lmites_Distritales_18);
var lyr_Lmites_Distritales_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmites_Distritales_18, 
                style: style_Lmites_Distritales_18,
                interactive: true,
                title: '<img src="styles/legend/Lmites_Distritales_18.png" /> Límites_Distritales'
            });
var format_OTB_Cercado_2015_19 = new ol.format.GeoJSON();
var features_OTB_Cercado_2015_19 = format_OTB_Cercado_2015_19.readFeatures(json_OTB_Cercado_2015_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_OTB_Cercado_2015_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTB_Cercado_2015_19.addFeatures(features_OTB_Cercado_2015_19);
var lyr_OTB_Cercado_2015_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTB_Cercado_2015_19, 
                style: style_OTB_Cercado_2015_19,
                interactive: true,
                title: '<img src="styles/legend/OTB_Cercado_2015_19.png" /> OTB_Cercado_2015'
            });
var format_Buffer_Puntos_400m_20 = new ol.format.GeoJSON();
var features_Buffer_Puntos_400m_20 = format_Buffer_Puntos_400m_20.readFeatures(json_Buffer_Puntos_400m_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Buffer_Puntos_400m_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Puntos_400m_20.addFeatures(features_Buffer_Puntos_400m_20);
var lyr_Buffer_Puntos_400m_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Puntos_400m_20, 
                style: style_Buffer_Puntos_400m_20,
                interactive: true,
                title: '<img src="styles/legend/Buffer_Puntos_400m_20.png" /> Buffer_Puntos_400m'
            });
var format_Puntos_Muestreo_21 = new ol.format.GeoJSON();
var features_Puntos_Muestreo_21 = format_Puntos_Muestreo_21.readFeatures(json_Puntos_Muestreo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Puntos_Muestreo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Muestreo_21.addFeatures(features_Puntos_Muestreo_21);
var lyr_Puntos_Muestreo_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Muestreo_21, 
                style: style_Puntos_Muestreo_21,
                interactive: true,
                title: '<img src="styles/legend/Puntos_Muestreo_21.png" /> Puntos_Muestreo'
            });
var format_Data_Loggers_22 = new ol.format.GeoJSON();
var features_Data_Loggers_22 = format_Data_Loggers_22.readFeatures(json_Data_Loggers_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Data_Loggers_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Loggers_22.addFeatures(features_Data_Loggers_22);
var lyr_Data_Loggers_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Loggers_22, 
                style: style_Data_Loggers_22,
                interactive: true,
                title: '<img src="styles/legend/Data_Loggers_22.png" /> Data_Loggers'
            });
var format_Puntos_Jennifer_23 = new ol.format.GeoJSON();
var features_Puntos_Jennifer_23 = format_Puntos_Jennifer_23.readFeatures(json_Puntos_Jennifer_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Puntos_Jennifer_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Jennifer_23.addFeatures(features_Puntos_Jennifer_23);
var lyr_Puntos_Jennifer_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Jennifer_23, 
                style: style_Puntos_Jennifer_23,
                interactive: true,
                title: '<img src="styles/legend/Puntos_Jennifer_23.png" /> Puntos_Jennifer'
            });
var group_LIMITESADMINISTRATIVOS = new ol.layer.Group({
                                layers: [lyr_Lmites_Distritales_18,lyr_OTB_Cercado_2015_19,],
                                title: "LIMITES ADMINISTRATIVOS"});
var group_TRANSPORTE = new ol.layer.Group({
                                layers: [lyr_Circuito_Ciclovia_17,],
                                title: "TRANSPORTE"});
var group_HIDROGRAFA = new ol.layer.Group({
                                layers: [lyr_Rios_12,lyr_Cuerpos_de_Agua_13,lyr_Cuencas_14,lyr_Canal_de_Riego_15,lyr_Torrenteras_canales_16,],
                                title: "HIDROGRAFÍA"});
var group_AREASVERDES = new ol.layer.Group({
                                layers: [lyr_INDV_Sep_2020_9,lyr_INDV_Ene_2020_10,lyr_Areas_Verdes_PTDI2016_11,],
                                title: "AREAS VERDES"});
var group_ASPECTOSSOCIALES = new ol.layer.Group({
                                layers: [lyr_Densidad_Poblacin_habha_8,],
                                title: "ASPECTOS SOCIALES"});
var group_ASPECTOSNATURALES = new ol.layer.Group({
                                layers: [lyr_DEM_Cbba_Continuo_5,lyr_DEM_Cbba_Clasificado_6,lyr_Relieve_7,],
                                title: "ASPECTOS NATURALES"});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_StamenWatercolor_0,lyr_Stamen_1,lyr_OpenStreetMap_2,lyr_GoogleSatellite_3,lyr_GoogleMaps_4,],
                                title: "MAPAS BASE"});

lyr_StamenWatercolor_0.setVisible(true);lyr_Stamen_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleMaps_4.setVisible(true);lyr_DEM_Cbba_Continuo_5.setVisible(true);lyr_DEM_Cbba_Clasificado_6.setVisible(true);lyr_Relieve_7.setVisible(true);lyr_Densidad_Poblacin_habha_8.setVisible(true);lyr_INDV_Sep_2020_9.setVisible(true);lyr_INDV_Ene_2020_10.setVisible(true);lyr_Areas_Verdes_PTDI2016_11.setVisible(true);lyr_Rios_12.setVisible(true);lyr_Cuerpos_de_Agua_13.setVisible(true);lyr_Cuencas_14.setVisible(true);lyr_Canal_de_Riego_15.setVisible(true);lyr_Torrenteras_canales_16.setVisible(true);lyr_Circuito_Ciclovia_17.setVisible(true);lyr_Lmites_Distritales_18.setVisible(true);lyr_OTB_Cercado_2015_19.setVisible(true);lyr_Buffer_Puntos_400m_20.setVisible(true);lyr_Puntos_Muestreo_21.setVisible(true);lyr_Data_Loggers_22.setVisible(false);lyr_Puntos_Jennifer_23.setVisible(true);
var layersList = [group_MAPASBASE,group_ASPECTOSNATURALES,group_ASPECTOSSOCIALES,group_AREASVERDES,group_HIDROGRAFA,group_TRANSPORTE,group_LIMITESADMINISTRATIVOS,lyr_Buffer_Puntos_400m_20,lyr_Puntos_Muestreo_21,lyr_Data_Loggers_22,lyr_Puntos_Jennifer_23];
lyr_Densidad_Poblacin_habha_8.set('fieldAliases', {'manzanas': 'manzanas', 'poblacion': 'poblacion', 'viviendas': 'viviendas', 'agua': 'agua', 'electricid': 'electricid', 'alcantaril': 'alcantaril', 'NBI': 'NBI', 'cos': 'cos', 'm2': 'm2', 'SUPERFICIE': 'SUPERFICIE', 'Densidad_P': 'Densidad_P', 'hab_ha': 'hab_ha', });
lyr_Areas_Verdes_PTDI2016_11.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Uso_Suelo': 'Uso_Suelo', });
lyr_Rios_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DREN_CUENC': 'DREN_CUENC', 'ELEVATION': 'ELEVATION', 'RIOS_PNT': 'RIOS_PNT', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Name': 'Name', });
lyr_Cuerpos_de_Agua_13.set('fieldAliases', {'Id': 'Id', 'USO': 'USO', });
lyr_Cuencas_14.set('fieldAliases', {'TOTAL': 'TOTAL', });
lyr_Canal_de_Riego_15.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'MsLink_DMR': 'MsLink_DMR', 'MsCtlg_DMR': 'MsCtlg_DMR', 'MsLink_D_1': 'MsLink_D_1', 'MsCtlg_D_1': 'MsCtlg_D_1', });
lyr_Torrenteras_canales_16.set('fieldAliases', {'ID': 'ID', });
lyr_Circuito_Ciclovia_17.set('fieldAliases', {'Id': 'Id', 'KM': 'KM', });
lyr_Lmites_Distritales_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'ADDRESS': 'ADDRESS', 'NRO_TEL': 'NRO_TEL', 'SHAPE_LENG': 'SHAPE_LENG', 'DISTRITO': 'DISTRITO', 'DISTRITO_1': 'DISTRITO_1', 'HA': 'HA', 'NOMBRE_D': 'NOMBRE_D', });
lyr_OTB_Cercado_2015_19.set('fieldAliases', {'FID_otbs22': 'FID_otbs22', 'OTB_D9': 'OTB_D9', });
lyr_Buffer_Puntos_400m_20.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Puntos_Muestreo_21.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', });
lyr_Data_Loggers_22.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', });
lyr_Puntos_Jennifer_23.set('fieldAliases', {'Id': 'Id', });
lyr_Densidad_Poblacin_habha_8.set('fieldImages', {'manzanas': 'TextEdit', 'poblacion': 'TextEdit', 'viviendas': 'TextEdit', 'agua': 'TextEdit', 'electricid': 'TextEdit', 'alcantaril': 'TextEdit', 'NBI': 'TextEdit', 'cos': 'TextEdit', 'm2': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Densidad_P': 'TextEdit', 'hab_ha': 'Range', });
lyr_Areas_Verdes_PTDI2016_11.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Uso_Suelo': 'TextEdit', });
lyr_Rios_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'DREN_CUENC': 'TextEdit', 'ELEVATION': 'TextEdit', 'RIOS_PNT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cuerpos_de_Agua_13.set('fieldImages', {'Id': 'TextEdit', 'USO': 'TextEdit', });
lyr_Cuencas_14.set('fieldImages', {'TOTAL': 'TextEdit', });
lyr_Canal_de_Riego_15.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'MsLink_DMR': 'TextEdit', 'MsCtlg_DMR': 'TextEdit', 'MsLink_D_1': 'TextEdit', 'MsCtlg_D_1': 'TextEdit', });
lyr_Torrenteras_canales_16.set('fieldImages', {'ID': 'Range', });
lyr_Circuito_Ciclovia_17.set('fieldImages', {'Id': 'TextEdit', 'KM': 'TextEdit', });
lyr_Lmites_Distritales_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'ADDRESS': 'TextEdit', 'NRO_TEL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_1': 'TextEdit', 'HA': 'TextEdit', 'NOMBRE_D': 'TextEdit', });
lyr_OTB_Cercado_2015_19.set('fieldImages', {'FID_otbs22': 'Range', 'OTB_D9': 'TextEdit', });
lyr_Buffer_Puntos_400m_20.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': 'Range', 'OTB': 'TextEdit', 'Distrito': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Puntos_Muestreo_21.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': '', 'OTB': '', 'Distrito': '', });
lyr_Data_Loggers_22.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': 'Range', 'OTB': 'TextEdit', 'Distrito': 'Range', });
lyr_Puntos_Jennifer_23.set('fieldImages', {'Id': 'Range', });
lyr_Densidad_Poblacin_habha_8.set('fieldLabels', {});
lyr_Areas_Verdes_PTDI2016_11.set('fieldLabels', {});
lyr_Rios_12.set('fieldLabels', {});
lyr_Cuerpos_de_Agua_13.set('fieldLabels', {});
lyr_Cuencas_14.set('fieldLabels', {});
lyr_Canal_de_Riego_15.set('fieldLabels', {});
lyr_Torrenteras_canales_16.set('fieldLabels', {});
lyr_Circuito_Ciclovia_17.set('fieldLabels', {});
lyr_Lmites_Distritales_18.set('fieldLabels', {});
lyr_OTB_Cercado_2015_19.set('fieldLabels', {});
lyr_Buffer_Puntos_400m_20.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'Data_Log': 'no label', 'Corredor': 'no label', 'OTB': 'no label', 'Distrito': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Puntos_Muestreo_21.set('fieldLabels', {'Id': 'header label', 'Name': 'header label', 'X_Este': 'header label', 'Y_Norte': 'header label', 'Prioridad': 'no label', 'Zona': 'header label', 'Data_Log': 'no label', 'Corredor': 'header label', 'OTB': 'header label', 'Distrito': 'header label', });
lyr_Data_Loggers_22.set('fieldLabels', {'Id': 'inline label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'Data_Log': 'no label', 'Corredor': 'no label', 'OTB': 'no label', 'Distrito': 'no label', });
lyr_Puntos_Jennifer_23.set('fieldLabels', {'Id': 'header label', });
lyr_Puntos_Jennifer_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});