import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, I18nManager, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import {BoxShadow} from 'react-native-shadow'


import { width } from 'constants/config.js'

import NavBar from 'components/NavBar.js'

const events = [
  {
    price: 'אֲסִימוֹן', 
    key: 'item1',
    pic: './src/event.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['מזון', 'מזון', 'מזון']
  },
  {
    price: 'חופשי',
    key: 'item2',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['מזון', 'מזון', 'מזון']
  },
  {
    price: 'חופשי',
    key: 'item3',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['מזון', 'מזון', 'מזון']
  },
  {
    price: 'חופשי',
    key: 'item4',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['מזון', 'מזון', 'מזון']
  },
  {
    price: 'חופשי',
    key: 'item5',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['מזון', 'מזון', 'מזון']
  },
]

const sortByArr = [
  {
    name: 'מיוןמיון',
    key: 'date'
  },
  {
    name: 'מיון',
    key: 'distance'
  }
]

const shadowOpt = {
	width:298,
	height:300,
	color:"#000",
	border:4,
	radius:1,
	opacity:0.2,
	x:0,
	y:8,
}

class Other extends Component {
  constructor(props){
    super(props)
    const sortByArrMod = sortByArr.map((item, i) => ({ ...item, isActive: i == 0 ? true : false }))
      this.state = {
        date: '01-01-2016',
        data: events,
        searchText: '',
        sortByArr: sortByArrMod,
      }
  }
  
  componentWillMount() {
    // this.props.navigation.navigate('DrawerOpen')
  }
  _dayForward = () => {
    let temp = (moment(this.state.date,"DD.MM.YYYY"))//from string to moment
    temp = temp.add(1, 'days')//plus day
    this.setState({ date: (temp.get('date')+'-' + (temp.get('month')+1) + '-' + temp.get('year'))})//from momnt to string
  }
  _dayBackward = () => {
    let temp = (moment(this.state.date,"DD.MM.YYYY"))//from string to moment
    temp = temp.add(-1, 'days')//minus day
    this.setState({ date: (temp.get('date')+'-' + (temp.get('month')+1) + '-' + temp.get('year'))})//from momnt to string
  }
  
  searchTextHandle = (text) => {
    this.setState({searchText: text})
  }

  searchHandle = () => {
    this.setState({searchFilter: this.state.searchText})
  }

  changeSort = () => {
    const foundActiveIndex = this.state.sortByArr.findIndex(item => item.isActive)
    const newState = this.state.sortByArr
    newState[foundActiveIndex].isActive = false
    newState[newState[foundActiveIndex + 1] ? foundActiveIndex + 1 : 0].isActive = true
    this.setState({sortByArr: newState})
  }

  goToEvent = () => {
    this.props.navigation.navigate('Event')
  }
  
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <NavBar navName="search"
          handleDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
          searchHandle={() => this.searchHandle()}
          textChangeHandle={(text) => this.searchTextHandle(text)}/>
          <View style={[styles.centerEl, styles.rowElements, styles.container]}>
            <Button backgroundColor='#FFFFFF' color="#A8ABAC" style={styles.pickerDate} title=">" onPress={this._dayForward}/>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder="בחר תאריך"
                format="DD-MM-YYYY"
                minDate="01-05-2014"
                maxDate="01-08-2018"
                confirmBtnText="לְאַשֵׁר"
                cancelBtnText="לְבַטֵל"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}/>
              <Button backgroundColor='#FFFFFF' color="#A8ABAC" title="<" style={styles.pickerDate} onPress={this._dayBackward}/>
              </View>
              <View style={styles.buttons}>
                <Button onPress={() => this.changeSort()} style={styles.sortBtn} backgroundColor='#FFFFFF' color="#A8ABAC" title={this.state.sortByArr.find(item => item.isActive).name}/>
              </View>
              <View style={styles.fltList}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.goToEvent(item.key)}>
                      <View style={styles.oneEvent}>
                        <View style={styles.topInfoWrapper}>
                          <View style={styles.categoriesWrapper}>
                            {
                              item.categories.map((category,i) => {
                                return (
                                  <View style={styles.category} key={'cat'+i}>
                                    <Text style={styles.categoryText}>{category}</Text>
                                  </View>
                                )
                              })
                            }
                          </View>
                        <Text style={{color:'#00FB08', fontSize:25,textAlign:'right'}}>{item.price}</Text>
                      </View>
                      <View style={{flex:1,backgroundColor:"red",height:250}}>
                        <Image style={{width:'100%', height:'100%'}}source={require('./../resources/images/event.jpg')}></Image>
                      </View>
                      <Text style={{color:'#7661C6', fontSize:30,textAlign:'left'}}>{item.time}</Text>
                      <View style={styles.rowElements}>
                        <View>
                          <Text style={[styles.rightElements,styles.downElements, {color:'#A8ABAC'}]}>מֶרְחָק:</Text>
                          <Text style={[styles.rightElements,styles.downElements, {color:'#A8ABAC'}]}>בחסות:</Text>
                        </View>
                        <View>
                          <Text style={[{color:'#7661C6',marginLeft:30},styles.downElements]}>{item.host}</Text>
                          <Text style={[{color:'#7661C6',marginLeft:30},styles.downElements]}>{item.distance}</Text>
                        </View>
                        </View>
                      </View>
                    </TouchableOpacity>
              )}/>
            </View>
          <View style={styles.buttons}><Button backgroundColor='#FFFFFF' color="#A8ABAC" title="היום הבא..."/></View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centerEl: {
    alignSelf: 'center',
    marginTop:20,
  },
  rowElements:{
    flex: 1,
    flexDirection: 'row',
  },
  buttons: {
    width:300,
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10,
    borderWidth: 1,
    borderColor:'#A8ABAC'

  },
  oneEvent: {
    borderWidth:1,
    borderColor:'#A8ABAC',
    marginLeft:5,
    marginRight:5,
    padding:15,
    marginTop:5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    marginBottom: 10,
    elevation: 10,
    position: 'relative',

  },
  downElements: {
    fontSize:20,
    textAlign:'left',
  },
  category:{
    backgroundColor:'pink',
    marginHorizontal: 4,
    marginVertical: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius:3,
    borderWidth:2,
  },
  categoriesWrapper:{
    flexDirection: 'row',
  },
  topInfoWrapper:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginVertical: 10,
    paddingVertical: 5,
    alignItems:'center',
  },
  categoryText:{
    color:'white',
  },
  pickerDate: {
    width: 15
  },
  sortBtn: {
    height: 42
  }
})

export default Other;