/**导包*/
import React from 'react';
import { StyleSheet, StatusBar, BackHandler, View, Text, Platform } from 'react-native';
import { StackNavigator, } from 'react-navigation';
/**导包*/
import Splash from '../Splash';
import Login from './Login.js';
import AppMain from './AppMain.js';
import Register from './Register.js';

// 注册导航
const Navs = StackNavigator({
    Home: { screen: Splash },
    Login: { screen: Login },
    Register: { screen: Register },
    AppMain: { screen: AppMain }
    //HomeThree: { screen: HomeThree },
    //HomeFour: { screen: HomeFour }
}, {
        initialRouteName: 'Home', // 默认显示界面
        /** navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
             header: {  // 导航栏相关设置项
                 backTitle: '返回',  // 左上角返回键文字
                 style: {
                     backgroundColor: '#fff'
                 },
                 titleStyle: {
                     color: 'green'
                 }
             },
             cardStack: {
                 gesturesEnabled: true
             }
         },*/
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        onTransitionStart: () => { console.log('导航栏切换开始'); },  // 回调
        onTransitionEnd: () => { console.log('导航栏切换结束'); }  // 回调
    });

class Welcome extends React.Component {
    /**
     * 构造器初始化
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navs />
        );
    }
}

/**
 * 弹性（Flex）宽高:
 *
 * 使用flex:1来指定某个组件扩张以撑满所有剩余的空间
 *如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
 * 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大
 *
 * 注意：
 * 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
 * */
let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default Welcome;