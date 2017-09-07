
import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
    BackHandler,
    InteractionManager,
    Keyboard
} from 'react-native';

import {AppMain} from './AppMain.js';
import { toastShort } from '../utils/ToastUtil';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
        };
    }

    static navigationOptions = {
        //header: null
        headerTitle:'注册',
        headerBackTitle:'返回',
        headerStyle: {
            backgroundColor: '#96E4DA'
        }
    };

    saveUserName = (text) => {
        this.setState({username:text});
    }
    savePassWord = (text) => {
        this.setState({password:text});
    }

    /**
     * 其它的登录方法
     * @param postion
     * @returns {*}
     */
    otherLogin(postion) {
        //weixin
        if (postion == 0) {
            toastShort('微信登录');
            //qq
        } else if (postion == 1) {
            //toastShort('QQ');
            Alert.alert(
                '提示',
                'QQ登录',
                [
                    { text: '确认', onPress: () => console.log('确认') },
                ],
                { cancelable: false }
            )
            //weibo
        } else if (postion == 2) {

        }
    };

    btn_register = () => {
        if(this.state.username === ''){
            toastShort('用户名不能为空...');
            return;
        }
        if(this.state.password === ''){
            toastShort('密码不能为空...');
            return;
        }
        if(this.state.username == '' && this.state.password == ''){
            toastShort('注册成功');
            Keyboard.dismiss();
            //跳转到首页
            InteractionManager.runAfterInteractions(() => {
                this.props.navigation.navigate('AppMain');
            });
        }else{
            // Alert.alert(this.state.username);
            toastShort('用户名或密码错误');
            return;
        }
    };

    render() {
        return (
            <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>

                <View style={styles.input_item}>
                    <Text style={{ marginLeft: 5 }}> 账号：</Text>
                    <TextInput
                        style={styles.text_input}
                        placeholder="手机号码/邮箱"
                        placeholderTextColor="#aaaaaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'username'}
                        multiline={true}
                        onChangeText={(text) => {
                            this.saveUserName(text);
                        }}
                    />
                </View>

                <View style={styles.input_item}>
                    <Text style={{ marginLeft: 5 }}> 密码：</Text>
                    <TextInput
                        style={styles.text_input}
                        placeholder="密码"
                        placeholderTextColor="#aaaaaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'password'}
                        multiline={true}
                        secureTextEntry={true}/**设计输入的文字不可见*/
                        onChangeText={(text) => {
                            this.savePassWord(text);
                        }}
                    />
                </View>

                <TouchableOpacity onPress={() => { this.buttonBackAction() }}
                    style={{ height: 48, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>忘记密码？</Text>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => { this.btn_register() }}>
                    <View style={styles.btn_login}>
                        <Text style={{ color: 'white', fontSize: 18 }}>登录</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ flex: 2 }}></View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, color: '#777' }}>第三方账号登录</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => { this.otherLogin(0) }}>
                            <Image source={require('../image/ic_login_weixin.png')} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.otherLogin(1) }} style={{ marginLeft: 15 }}>
                            <Image source={require('../image/ic_login_qq.png')} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.otherLogin(2) }} style={{ marginLeft: 15 }}>
                            <Image source={require('../image/ic_login_weibo.png')} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    input_item: {
        backgroundColor: 'white',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title_bar: {
        height: 48,
        flexDirection: 'row',
    },
    topbar_left_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btn_login: {
        height: 48,
        backgroundColor: '#96E4DA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    text_input: { fontSize: 15, flex: 1, textAlign: 'left', textAlignVertical: 'bottom' }

});

export default Register;