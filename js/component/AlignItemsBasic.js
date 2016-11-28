/**
 * 子类相对排列方式
 * Created by liyanxi on 2016/11/28.
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch', //在子类垂直排列，且没有宽度时，自动延展两侧，反之（水平排列，没指定高时，自动上下延展）
            }}>
                <View style={{height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};