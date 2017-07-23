/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, StatusBar, I18nManager } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements'

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
                <Image
                    style={{width:'100%', height:'100%'}}
                    source={require('./../resources/images/avatar.png')}>
                    <Image
                        style={{width:'80%', height:'80%'}}
                        source={require('./../resources/images/avatar.png')}>
                    </Image>
                </Image>
            </View>
        if(this.state.authorized)
        {
            if(this.state.superUser) {
                    return(
                    <View style={styles.topPage}>
                        {icon}
                        <View>
                            <Text style={{marginTop:25}}>כינוי</Text>
                            <Text style={{color:'#FF0505'}}>משתמש סופר</Text>
                            <Text style={{color:'#FF0505'}}>לאשר אירועים</Text>
                            <Text>האירועים שלי</Text>
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
    }
})
export default CategoriesTopPg;
