import React, { component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Platform,
    Linking,
    TouchableOpacity,
} from 'react-native';

//const KakaoTalk_Link = 'instagram://user?username=ssubokji';  //인스타 설치되어 있을시 링크
//const KakaoTalk_WebLInk='https://www.instagram.com/ssubokji/'; //인스타 설치 안되어 있을시 링크
//const Instagram_Link=''; //카카오톡 설치되어 있을시 링크
//const Instagram_WebLink = 'http://pf.kakao.com/_rxnxenC';  //카카오톡 설치 안되어 있을시 링크

export default class Notice extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={style.header} />
                <Image
                    style={{ width: 60, width: 60, justifyContent: "center", alignItems: "center" }}
                    source={require('../assets/AccountCircle.png')} />

                <View style={styles.content} >
                    <View style={styles.elem}>
                        <View style={styles.info}>
                            {/*   <View styles={styles.image} />  */}
                            <Image
                                style={styles.image}
                                source={require('../assets/Notice.png')}
                            />
                            {/* <TouchableOpacity
                                styles={styles.touchable}
                                onpress={this.이용안내페이지}>  {/*이용안내페이지 완성되면 연결하기*
                                <Text styles={styles.text}>이용안내</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>

                    <View style={styles.elem}>
                        <View style={styles.info}>
                            {/*    <View styles={styles.image} />  */}
                            <Image
                                style={styles.image}
                                source={require('../assets/Message.png')}
                            />
                            <TouchableOpacity
                                style={styles.touchable}
                                onpress={() => Linking.openURL('http://pf.kakao.com/_rxnxenC')}>
                                <Text style={styles.text}>문의사항 및 신고접수</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.elem}>
                        <View style={styles.info}>
                            <Image
                                style={styles.image}
                                source={require('../assets/Instagram.png')}
                            />
                            <TouchableOpacity
                                style={styles.touchable}
                                onpress={() => Linking.openURL('https://www.instagram.com/ssubokji/')}>
                                <Text style={styles.text}>인스타그램</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        height: 100,
        backgroundColor: "#68CDC1",
    },

    content: {
        flex: 1,
        backgroundColor: "white",
    },

    elem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#eee',
        borderBottonWidth: 0.5,
        padding: 5,
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        paddingLeft: 15,
    },
    touchable: {
    },
    image: {
        height: 60,
        width: 60,
    }

});
//이미지 넣기, 링크 연결
//ts로 한 것
