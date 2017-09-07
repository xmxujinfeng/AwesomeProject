import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';

// 实现自定义IconFont更好用，取消引入Ionicons
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { IconFont } from './IconFont';

// // 首页
// import { HomeScreen } from '../views/HomeScreen';
// // 打卡页面
// import { CardScreen } from '../views/CardScreen';
// // 清单页面
// import { ListScreen } from '../views/ListScreen';
// // 记账页面
// import { AccountScreen } from '../views/AccountScreen';
// // 我的页面
// import { MyScreen } from '../views/MyScreen';
// // 登录页面
// import { LoginScreen } from '../views/LoginScreen';

// // 添加卡片
// import { AddCard } from '../views/Card/AddCard';
// // 添加清单
// import { AddList } from '../views/List/AddList';
// // 清单列表
// import { ListContent } from '../views/List/ListContent';
// // 清单详情
// import { ListDetail } from '../views/List/ListDetail';

import Splash from '../Splash';
import Login from './Login.js';
import AppMain from './AppMain.js';
import Register from './Register.js';
/*
 * stackNavigator
 * 四个主页面
*/
const stackOption = {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6495ED',//矢车菊蓝
      }
  }
}

// 我的导航
const MyStack = StackNavigator({
    MyScreen: {
      screen: AppMain,
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons 
            name={'md-create'} 
            size={28} 
            style={{ color: tintColor }} 
          />
        ),
      },
    },
},stackOption);

/*
 * tabNavigator
 * 
*/
const AppTabNav = TabNavigator({
    Home: { 
      screen: Login,
      navigationOptions: {
        title: '梦想助手',
        tabBarLabel: '首页',
        // tabBarIcon: ({ tintColor, focused }) => (
        //   <IconFont
        //     font="&#xe7d8;"
        //     style={{ color: tintColor, fontSize: 26 }}
        //   />
        // ),
      },
    },
    Card: { 
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        title: '梦想打卡',
        tabBarLabel: '打卡',
        // tabBarIcon: ({ tintColor, focused }) => (
        //   <IconFont
        //     font="&#xe751;"
        //     style={{ color: tintColor, fontSize: 26 }}
        //   />
        // ),
        // headerRight: <IconFont 
        //                 font="&#xe6da;" 
        //                 style={{color: '#fff', marginRight: 15, fontSize: 30}} 
        //                 onPress={() => navigation.navigate('AddCard') } 
        //              />,
      }),
    }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,

      activeTintColor: '#6495ED',
      inactiveTintColor: '#666',

      indicatorStyle: {
        backgroundColor: '#fff',
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
      }
    }
});



const AppStack = StackNavigator({
    Home: {
      screen: AppTabNav,
    },
    // AddCard: { 
    //   screen: AddCard,
    //   navigationOptions: {
    //       title: '添加卡片'
    //   }
    // },
    // AddList: {
    //   screen: AddList,
    //   navigationOptions: {
    //       title: '添加清单'
    //   }
    // },
    // ListContent: {
    //   screen: ListContent,
    //   navigationOptions: {
    //       title: '列表标题'
    //   }
    // },
    // ListDetail: {
    //   screen: ListDetail,
    //   navigationOptions: {
    //       title: '列表标题',
    //       headerRight: <IconFont 
    //                     font="&#xe645;" 
    //                     style={{color: '#fff', marginRight: 15, fontSize: 28}} 
    //                     onPress={() => alert("ok") } 
    //                  />,
    //   }
    // },
}, stackOption);




/*
 * drawerNavigator
 * 
*/
// 自定义侧边导航栏
const DrawerContent = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>欢迎</Text>
      </View>
      <DrawerItems {...props} />
    </View>
  )
};
class navigations extends React.Component {
    /**
     * 构造器初始化
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppNav />
        );
    }
}

export const AppNav = DrawerNavigator({
  App: {
      screen: AppStack,
      navigationOptions: {
        title: '',
        tabBarLabel: '',
      },
  },
  MyScreen: {
    screen: MyStack,
  },
//   LoginScreen: {
//       screen: LoginScreen
//   },
},{
  contentComponent: props => <ScrollView><DrawerContent {...props} /></ScrollView>
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});

export default navigations;