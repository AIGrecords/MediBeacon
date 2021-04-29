import React, { Component } from 'react';
import { View, Image } from 'react-native';

const BgImage = () => (
    <Image source =
   {require("/home/aig/Desktop/MediBeacon/assets/doctor-consulting-with-patient-vector.webp")}
    style = {{ 
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center", width: "100%", 
        height: "100%" 
    }}/>
)

export default BgImage;