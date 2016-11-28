/**
 * //flexBox 盒子模型
 * Created by liyanxi on 2016/11/28.
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class FlexDimensionBasic extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.container}>
                    <View style={styles.childOne}></View>
                    <View style={styles.childTwo}></View>
                    <View style={styles.childThree}></View>
                </View>
                {/*<View style={[styles.container, styles.verticalDirection]}>*/}
                    {/*<View style={styles.childOne}></View>*/}
                    {/*<View style={styles.childThree}></View>*/}
                    {/*<View style={styles.childTwo}></View>*/}
                {/*</View>*/}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',   //此时标记水平居中（根据次轴：即flexDirection 的垂直方向）
        justifyContent: 'center',
        flexDirection: 'column'
    },
    container: {
        // flex: 1,
        height: 300,
        width: 300,
        flexDirection: 'row', //子类child horizontal 排列方式
        borderWidth:3,
        borderColor:'#388bed'
    },
    childOne: {
        flex: 1,
        backgroundColor: 'powderblue',
        // width: 200
        borderWidth:1,
        borderColor:'red'
    },
    childTwo: {
        flex: 1,
        backgroundColor: 'skyblue',
        // width: 200
        borderWidth:1,
        borderColor:'green'
    },
    childThree: {
        flex: 1,
        backgroundColor: 'steelblue',
        // width: 200
        borderWidth:1,
        borderColor:'black'
    },
    verticalDirection: {
        flexDirection: 'column-reverse',//vertical reverse
        borderColor:'#bbbbbb'
    }
});