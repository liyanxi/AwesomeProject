/**
 * react native 输入组件调试
 * Created by liyanxi on 2016/11/28.
 */

import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

export default class TextInputComponent extends Component {
    /**
     * ES6 构造函数中：state 或 props 初始化
     */
    constructor(props) {
        super(props);
        this.state = {inputText: ""};
    }

    /**
     * 唯一根布局
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"Type here to translate!"}
                    onChangeText={(text)=> this.setState({inputText: text})}>
                </TextInput>
                <Text style={styles.showText}>
                    {this.state.inputText.split(" ").map((word)=> word && 'Q').join(" ")}
                </Text>

                <TextInput style={styles.inputBox} multiline={false}></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'skyblue',
        // padding: 5 系统默认padding简直是个坑
    },
    showText: {
        fontSize: 32
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        padding: 5
        // height: 30
    }
});