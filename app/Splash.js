import React from 'react';
import { Dimensions, Image, InteractionManager, View, Text, } from 'react-native';

import Login from './page/Login.js';
/**获取手机屏幕的宽和高*/
var { height, width } = Dimensions.get('window');

class Splash extends React.Component {

    /***
     * 构造器
     * 开始了一个定时器setTimeout（），2500豪秒后跳转到AppMain.js
     * @param props
     */
    constructor(props) {
        super(props);
        const { navigate } = this.props.navigation;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigate("Login");
            });
        }, 1000);
    }

    static navigationOptions = {
        header: null
    };
    /**
     * 渲染界面，只有一张图片
     * @returns {XML}
       */
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Image
                    style={{
                        flex: 1,
                        width: width,
                        height: height
                    }}
                    source={require('./image/ic_welcome.png')}
                />
            </View>
        );
    }
}
export default Splash;