import React, { Component } from 'react';
import { View, Image } from 'react-native';

const logo = () => (
    <Image source =
   {require("/home/aig/Desktop/MediBeacon/assets/MEDI.png")}
    style = {{ 
        flex: 1,
        position: "absolute",
        bottom: "60%",
        right: "25%",
        left: "25%",
        width: "50%", 
        height: "50%" 
    }}/>
)



export default logo;