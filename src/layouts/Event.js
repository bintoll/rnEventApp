import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, I18nManager, TouchableOpacity, StatusBar } from 'react-native'

import { width, height } from 'constants/config'

import NavBar from 'components/NavBar'
import ChooseCategory from 'components/ChooseCategory'

const CategoriesForPopup = [
  {
    name:'Education',
    isActive: false,
  },
  {
    name: 'Kid',
    isActive: false,
  },
  {
    name: 'Music',
    isActive: false,
  },
  {
    name:'Entertaiment',
    isActive: false,
  },
  {
    name: 'Activity',
    isActive: false,
  },
  {
    name: 'Party',
    isActive: false,
  }
]


class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: {
            name: 'הליכה ודיון בארמון הקיץ',
            price: 'אֲסִימוֹן',
            key: 'item1',
            pic: require('resources/images/event.jpg'),
            time: 'יום שבת בשעה 10:00 - 13:00',
            distance: '3km',
            place:'טירת קיץ',
            categories:['מוּסִיקָה', 'הַשׂכָּלָה','מפלגה'],
            amountOfPeople:'יותר מ -50',
            aboutEvent: 'Lol InformationDetail InformationDetail InformationDetail InformationDetail Information' +
            'Detail InformationDetail InformationDetail InformationDetail InformationDetail InformationDetail Information' +
            'Detail InformationDetail InformationDetail InformationDetail InformationDetail InformationDetail InformationDetail Information',
            participants:['./../resources/images/avatar.png','./../resources/images/avatar.png','./../resources/images/avatar.png'
              ,'./../resources/images/avatar.png','./../resources/images/avatar.png','./../resources/images/avatar.png']
          },
          CategoriesForPopup,
          OpenDetails:false,
          willGo: false,
          isAdmin:true,
          isIntrested: false,
          popUpActive: false,
        }
    }

  componentWillMount() {
    // this.props.navigation.navigate('DrawerOpen')
    this.setState({isIntrested:this.state.isAdmin})
  }

  ChangeColorPopup = (indexCategory) => {//change color
    const newState = this.state.CategoriesForPopup
    newState[indexCategory].isActive = !newState[indexCategory].isActive
    this.setState({CategoriesForPopup: newState})
  }

  goToMap = () => {
    this.props.navigation.navigate('EventMap')
  }

  goToSelectCat = () => {
        this.setState({popUpActive:true})
  }

  buttonPress = (nameButton) => {
      this.setState({[nameButton]:!this.state[nameButton]})
  }

    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
              <View>
                <View>
              <StatusBar
                  backgroundColor='transparent'
                  translucent={true}
                  barStyle="light-content"
              />
                <View style={styles.image}>
                    <Image style={{width:'100%', height:'100%'}} source={this.state.data.pic}/>
                </View>
              </View>
              <View style={styles.NavBarStyle}>
                <NavBar navName="backEvents" handleBack={() => this.props.navigation.goBack() } />
              </View>
                <View style={styles.eventWrapper}>
                    <View style={[styles.rowElements,{justifyContent:'space-between'}]}>
                        <Text style={styles.textName}>{this.state.data.name}</Text>
                      <View style={[styles.columnElements]}>
                        <Text style={styles.textPrice}>{this.state.data.price}</Text>
                        {
                          this.state.isAdmin
                            ? <View style={styles.adjustContainer}>
                              <Text style={styles.adjustText}>Adjust</Text>
                            </View>
                            : null
                        }
                      </View>
                    </View>
                    <View style={styles.rowElements}>
                      {
                        this.state.data.categories.map((item) => {
                          return(
                              <View style={styles.categoryWrapper} key={item}>
                                <Text style={styles.categoryText}>{item}</Text>
                              </View>
                          )
                        })
                      }
                      {
                        this.state.isAdmin
                          ? <View style={styles.adjustContainer}>
                              <Text style={styles.adjustText}>Adjust</Text>
                            </View>
                          : null
                      }
                    </View>
                  <View style={[styles.rowElements,{justifyContent:'space-between'}]}>
                    <Text style={this.state.OpenDetails ?[styles.aboutEvent,styles.openDetails]
                                                        :[styles.aboutEvent,styles.closeDetails]}>{this.state.data.aboutEvent}</Text>
                    <TouchableOpacity onPress={()=>this.buttonPress('OpenDetails')} style={{alignSelf:'flex-end'}}>
                      <Text style={styles.seeMore}>{
                        this.state.OpenDetails
                            ? 'close'
                            : 'see more'}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.rowElements,{marginTop:height(2.6)}]}>
                    <Image style={styles.timeIcon}
                           source={require('./../resources/images/blacktime.png')}/>
                    <Text style={styles.timeText}>{this.state.data.time}</Text>
                  </View>
                  <View style={[styles.rowElements]}>
                    <TouchableOpacity style={{marginRight:width(8)}} onPress={() => this.goToSelectCat()}>
                      <Text style={styles.timeButtons}>הוסף ליומן</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:width(8)}}>
                      <Text style={styles.timeButtons}>הגדרות התראה</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => this.goToMap()}>
                    <View style={[styles.rowElements,{marginTop:height(2.6)}]}>
                      <Image style={styles.locationIcon}
                             source={require('./../resources/images/blacklocation.png')}/>
                      <Text style={styles.timeText}>{this.state.data.place}</Text>
                      <Text style={styles.timeText}>{this.state.data.distance} • </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                  <View style={[styles.rowElements,{justifyContent:'space-between',marginHorizontal:5,marginTop:height(2.6)}]}>
                    <TouchableOpacity onPress={() => this.buttonPress('willGo')}>
                      <View style={[styles.button,this.state.willGo ?{opacity:0.6} :{opacity:1}]}>
                        <Text style={styles.buttonText}>{
                          this.state.willGo
                              ? 'Will Go'
                              : 'Going'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.buttonPress('isIntrested')}>
                      <View style={[styles.button,this.state.isIntrested ?{opacity:0.6} :{opacity:1}]}>
                        <Text style={styles.buttonText}>{
                            this.state.isIntrested
                              ? 'Intrested'
                              : 'Interesting'}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              <View style={styles.eventWrapper}>
                <Text style={styles.participantsText}>{this.state.data.amountOfPeople} משתתפים</Text>
                  <View style={[styles.rowElements,{justifyContent:'space-between',marginTop:height(2.6)}]}>
                    {
                      this.state.data.participants.map((participant,i) => {
                        return (
                            <View key={'cat'+i}>
                              <Image style={styles.partcipImg} source={require('./../resources/images/avatar.png')}/>
                            </View>
                        )
                      })
                    }
                  </View>
                <TouchableOpacity style={styles.reportButt}>
                  <Text style={styles.timeButtons}>Report</Text>
                </TouchableOpacity>
              </View>
              </View>
              {
                this.state.popUpActive
                  ?<ChooseCategory
                        callbackClose={()=>this.setState({popUpActive:false})}
                        callbackSave={() => {alert('Categories is saved')}}
                        categoriesForPopup={this.state.CategoriesForPopup}
                        ChangeColorPopup={(indexCategory) => {this.ChangeColorPopup(indexCategory)}}/>
                  :null
              }
            </ScrollView>
        );
    }
}
    const styles = StyleSheet.create({
      rowElements: {
        flexDirection: 'row',
      },
      image: {
        height:height(29),

      },
      eventWrapper: {
        marginHorizontal:width(4),
        marginTop:height(1.5)
      },
      locationIcon: {
        width:width(5.6),
        height:width(5.6),
        marginRight:width(2.6),
        resizeMode:'contain'
      },
      timeIcon: {
        width:width(5.6),
        height:width(5.6),
        marginRight:width(2.6),
      },
      textName: {
        fontFamily: 'System',
        fontSize: width(4.8),
        color: '#333333',
        width:width(60),
        textAlign:'left'
      },
      textPrice: {
        fontFamily: 'System',
        fontSize: width(4.8),
        color: '#333333',
        fontWeight: '800',
        marginBottom:5,

      },
      categoryWrapper: {
        backgroundColor: '#F4F4F4',
        borderRadius: 4,
        marginRight:width(4.8),
        marginVertical:height(0.5),
        justifyContent:'center',
        alignItems:'center',
        padding:width(0.8),
      },

      categoryText: {
        fontFamily: 'System',
        fontSize: width(3.5),
        color: '#5C5C5C',
      },
      aboutEvent:{
        fontSize:width(4.2),
        textAlign:'left',
        width:width(70),
      },
      NavBarStyle: {
        position:'absolute',
        width:'100%',
        marginTop:25,
      },
      reportButt: {
        marginRight:width(8),
        alignSelf:'center',
        marginVertical:height(2.6)
      },
      seeMore: {
        fontFamily: 'System',
        fontSize: width(3.7),
        color: '#B076A0',
        alignSelf:'flex-start',
        width:width(16)
      },
      adjustContainer: {
        width:width(15),
        height:23,
        borderColor:'#B682A8',
        borderRadius:4,
        borderWidth:1,
        alignSelf:'center',
        justifyContent:'center',
      },
      adjustText: {
        fontFamily: 'System',
        fontSize: width(3),
        color: '#B783A9',
        alignSelf:'center'
      },
      openDetails: {
        height:125,
      },
      closeDetails: {
        height:62,
      },
      timeText: {
        fontFamily: 'System',
        fontSize: width(4.2),
        color: '#333333',
        textAlign:'left',
      },
      timeButtons: {
        fontFamily: 'System',
        fontSize: width(4.2),
        color: '#B076A0',
      },
      button: {
        backgroundColor: '#B076A0',
        borderRadius: width(1),
        width:width(45),
        height: width(9),
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        fontFamily:'System',
        fontSize: 16,
        color: '#FFFFFF'
      },
      participantsText: {
        fontFamily: 'System-Light',
        fontSize: 16,
        color: '#333333',
        textAlign:'left',
        marginTop:height(1)
      },
      partcipContainer:{
        justifyContent:'space-between'
      },
      partcipImg:{
        width:width(12.5),
        height:width(12.5),
        borderRadius:50
      },
    })
export default Event;

