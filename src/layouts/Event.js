/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, I18nManager } from 'react-native'
import { Button } from 'react-native-elements'

import NavBar from 'components/NavBar'

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: 'שם האירוע',
                price: 'אֲסִימוֹן', key: 'item1',
                pic: './src/event.jpg',
                time: '20-30',
                distance: '30 ק"מ',
                place:'שם המקום',
                host: 'דף הפייסבוק שלי',
                category:'אֲסִימוֹן',
                participants:['./../resources/images/avatar.png','./../resources/images/avatar.png']
            }
        }
    }

    componentWillMount() {
        // this.props.navigation.navigate('DrawerOpen')
    }

    goToMap = () => {
        this.props.navigation.navigate('EventMap')
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <NavBar navName="back" handleBack={() => this.props.navigation.goBack() } />    
                <View style={{flex:1,height:250, marginTop:10}}>
                    <Image style={{width:'100%', height:'100%'}}
                           source={require('./../resources/images/event.jpg')}></Image>
                </View>
                <View style={{marginHorizontal:30, marginTop:10}}>
                    <Text style={[styles.textFirstCol,{fontSize:22}]}>{this.state.data.name}</Text>
                    <Text style={[styles.textSecCol,{fontSize:30,textAlign:'left'}]}>{this.state.data.time}</Text>
                    <View style={styles.rowElements}>
                        <View>
                            <Text style={styles.textFirstCol}>בחסו</Text>
                            <Text style={styles.textFirstCol}>נוצר על ידי</Text>
                            <Text style={styles.textFirstCol}>מחיר</Text>
                            <Text style={styles.textFirstCol}>קטגוריה</Text>

                        </View>
                        <View style={{marginLeft:30}}>
                            <Text
                                style={[styles.textSecCol,styles.downElements]}>{this.state.data.place+' '+this.state.data.distance}</Text>
                            <Text
                                style={[styles.textSecCol,styles.downElements]}>{this.state.data.host}</Text>
                            <Text
                                style={[styles.textSecCol,styles.downElements]}>{this.state.data.price}</Text>
                            <Text
                                style={[styles.textSecCol,styles.downElements]}>{this.state.data.category}</Text>
                        </View>
                    </View>
                    <View style={[styles.rowElements, styles.partcipContainer]}>
                        <View style={styles.rowElements}>
                        {
                            this.state.data.participants.map((participant,i) => {
                                return (
                                    <View key={'cat'+i}>
                                        <Image style={styles.partcipImg} source={require('./../resources/images/avatar.png')}></Image>
                                    </View>
                                )
                            })
                        }
                        </View>
                        <Text style={styles.downElements}>מספר משתתפים</Text>
                    </View>
                    <View style={styles.buttons}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="לְאַשֵׁר"/></View>
                    <Text style={styles.aboutEvent}>קצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת
                    קצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטקצת טקסטטקסט</Text>
                    <View style={styles.columnElements}>
                        <View style={styles.bottomButts}>
                            <Button backgroundColor='#FFFFFF' color="#A8ABAC" title="הוסף ללוח השנה של"/></View>
                        <View style={styles.bottomButts}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="לשתף עם חברים"/></View>
                        <View style={styles.bottomButts}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="הגדרות הודעה"/></View>
                        <View style={styles.bottomButts}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="להגיש תלונה"/></View>
                        <View style={styles.bottomButts}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="למחוק אירוע"/></View>
                        <View style={styles.bottomButts}><Button onPress={() => this.goToMap()} backgroundColor='#FFFFFF' color="#A8ABAC" title="Go to map"/></View>
                    </View>
                </View>

            </ScrollView>
        );
    }
}
    const styles = StyleSheet.create({
    rowElements: {
        flex: 1,
        flexDirection: 'row',
    },

        columnElements: {
        flex: 1,
            flexDirection: 'column',
            marginTop:30,
            marginBottom:10
        },
        downElements: {
            fontSize:20,
            textAlign:'left',
        },
        buttons: {
            width:300,
            alignSelf: 'center',
            marginTop:10,
            marginBottom:10,
            borderWidth: 1,
            borderColor:'#A8ABAC'

        },
        bottomButts:{
            width:300,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor:'#A8ABAC',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        textFirstCol:{
            color:'#A8ABAC',
            fontSize:20
        },
        textSecCol:{
            color:'#7661C6',
            fontSize:20
        },
        partcipContainer:{
            marginTop: 20,
            alignItems:'center',
            justifyContent:'space-between'
        },
        partcipImg:{
            width:50,
            height:40,
            marginRight:2
        },
        aboutEvent:{
            marginTop:15,
            fontSize:18
        }
    })
export default Event;

