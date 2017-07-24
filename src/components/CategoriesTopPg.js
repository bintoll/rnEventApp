/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, I18nManager } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements'
import { BlurView } from 'react-native-blur';

class CategoriesTopPg extends Component {
    constructor(props){
        super(props)
        this.state = {
            authorized: true,
            superUser: true
        }
    }
    _checkAuthorization = () => {
        let icon =
            <View style={styles.avatar}>
                <View style={styles.underlayWrapper}>
                    <Image
                        style={styles.image}
                        source={require('./../resources/images/avatar.png')}/>
                </View>
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                    />
                <View style={styles.avatarWrapper}>
                    <Image
                        style={styles.image}
                        source={require('./../resources/images/avatar.png')} />
                </View>
            </View>
        if(this.state.authorized)
        {
            if(this.state.superUser) {
                    return(
                    <View style={styles.topPage}>
                        {icon}
                        <View style={styles.nameWrapper}>
                            <Text style={[styles.nameItem, {marginTop:25}]}>כינוי</Text>
                            <Text style={[styles.nameItem, {color:'#FF0505'}]}>משתמש סופר</Text>
                            <Text style={[styles.nameItem, {color:'#FF0505'}]}>לאשר אירועים</Text>
                            <Text style={[styles.nameItem]}>האירועים שלי</Text>
                        </View>
                    </View>
                    )
            }//superuser

            else//authorized, but not superuser (picture and nickname)
            {
                return(
                    <View style={styles.topPage}>
                        {icon}
                        <Text style={{marginTop:25}}>כינוי</Text>
                    </View>
            )
            }
        }
        else//non-authorized (just button log on)
        {
            return(
            <View style={styles.buttons}>
                <SocialIcon
                    title='Log In With Facebook'
                    button
                    type='facebook'
                    borderRadius={0}
                />
            </View >
            )
        }
    }



    render() {
        return (
            <View>
                {this._checkAuthorization()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    avatar:{
        height:70,
        width:170,
        marginRight:10,

    },
    topPage:{
        marginTop:10,
        flex:1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    nameWrapper: {
        // textAlign: 'left'
    },
    nameItem: {
        textAlign: 'left'
    },
    underlayWrapper: {
        width: 160,
        height: 100
    },
    avatarWrapper: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 50,
        position: "absolute",
        top: 20, left: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    absolute: {
        position: "absolute",
        width: 160,
        height: 100,
        top: 0, left: 0, bottom: 0, right: 0,
    },
})
export default CategoriesTopPg;
