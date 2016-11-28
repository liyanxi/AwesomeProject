/**
 * Created by liyanxi on 2016/11/28.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class ImageDimension extends Component {
    render() {
        let pic = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        }
        return (
            <View style={styles.container}>
                <Image source={pic} style={styles.imgStyle}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',//vertical
        alignItems: 'center',   //horizontal
        backgroundColor: '#F5FCFF',
    },
    imgStyle: {
        width: 193,
        height: 110
    }
});