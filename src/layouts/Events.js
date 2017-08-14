import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, I18nManager, TouchableOpacity, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Alert from 'components/Alert'



import { width,height } from 'constants/config.js'

import NavBar from 'components/NavBar.js'

const events = [
  {
    name: 'הליכה ודיון בארמון הקיץ',
    place:'טירת קיץ',
    price: 'חופשי',
    key: 'item1',
    pic: './src/event.jpg',
    time: '10:30pm',
    distance:'3km',
    host: 'דף הפייסבוק שלי',
    categories: ['אומנות', 'לִרְקוֹד', 'הַשׂכָּלָה']
  },
  {
    name: 'הליכה ודיון בארמון הקיץ',
    place:'Summer Palace',
    price: 'חופשי',
    key: 'item2',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['אומנות', 'לִרְקוֹד', 'הַשׂכָּלָה']
  },
  {
    name: 'הליכה ודיון בארמון הקיץ',
    place:'טירת קיץ',
    price: 'חופשי',
    key: 'item3',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['אומנות', 'לִרְקוֹד', 'הַשׂכָּלָה']
  },
  {
    name: 'הליכה ודיון בארמון הקיץ',
    place:'טירת קיץ',
    price: 'חופשי',
    key: 'item4',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['אומנות', 'לִרְקוֹד', 'הַשׂכָּלָה']
  },
  {
    name: 'הליכה ודיון בארמון הקיץ',
    place:'טירת קיץ',
    price: 'חופשי',
    key: 'item5',
    pic: './src/event2.jpg',
    time: '20-30', distance:'30 ק"מ',
    host: 'דף הפייסבוק שלי',
    categories: ['אומנות', 'לִרְקוֹד', 'הַשׂכָּלָה']
  },
]

const sortByArr = [
  {
    name: 'מיוןמיון',
    key: 'date'
  },
  {
    name: 'מרחק (קרוב רחוק)',
    key: 'distance'
  }
]

class Other extends Component {
  constructor(props){
    super(props)
    const sortByArrMod = sortByArr.map((item, i) => ({ ...item, isActive: i == 0 ? true : false }))
      this.state = {
        date: '01-01-2016',
        data: events,
        searchText: '',
        sortByArr: sortByArrMod,
        alert: {
          title: 'You must connect to Facebook',
          buttonText: 'Close',
          active: true
        }
      }
  }

  closeAlert = () => {
    const newState = this.state.alert
    newState.active = false
    this.setState({alert: newState})
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
      <ScrollView style={{backgroundColor: '#F8F8F8'}}>
        <StatusBar
            backgroundColor='#B076A0'
            barStyle="light-content"
        />
        <NavBar navName="mainPage"
          handleDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
          searchHandle={() => this.searchHandle()}
          textChangeHandle={(text) => this.searchTextHandle(text)}/>
        <View>
          <View style={[styles.centerEl, styles.rowElements,{paddingHorizontal:20,justifyContent:'space-between',alignItems:'center'}]}>
            <View style={styles.rowElements}>
            <Icon
                style={styles.arrayCalendar}
                name='keyboard-arrow-right'
                color='black'
                size={22}
                onPress={this._dayForward} />
              <DatePicker
                style={{width: 130}}
                date={this.state.date}
                mode="date"
                placeholder="בחר תאריך"
                format="MMMM D"
                showIcon={false}
                minDate="01-05-2014"
                maxDate="01-08-2018"
                confirmBtnText="לְאַשֵׁר"
                cancelBtnText="לְבַטֵל"
                customStyles={{
                   dateInput: {
                    borderWidth:0,
                    height:25,
                  },
                  dateText: {
                    fontFamily:'System',
                    fontSize: width(4.5),
                    color: '#333333'
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}/>
            <Icon
                style={styles.arrayCalendar}
                name='keyboard-arrow-left'
                color='black'
                size={22}
                onPress={this._dayBackward} />
              </View>
            <TouchableOpacity onPress={() => this.changeSort()}>
              <Text style={styles.sortBy}>{this.state.sortByArr.find(item => item.isActive).name}</Text>
            </TouchableOpacity>
          </View>
              <View style={styles.fltList}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.goToEvent(item.key)}>
                      <View style={styles.oneEvent}>
                        <View style={[styles.rowElements,{alignItems:'flex-start'}]}>
                          <View style={[styles.columnElements,{alignItems:'center'}]}>
                            <View style={{height:145,width:145}}>
                              <Image style={{width:'100%', height:'100%'}}source={require('./../resources/images/event.jpg')}/>
                              <View style={[styles.rowElements,{alignItems:'center',marginTop:5}]}>
                                <View style={{height:18,width:18}}>
                                  <Image style={{width:'100%', height:'100%'}}source={require('./../resources/images/avatar.png')}/>
                                </View>
                                <Text style={styles.hostedby}>בחסות</Text>
                              </View>
                            </View>
                          </View>
                          <View style={[styles.columnElements,{marginLeft:width(4)}]}>
                            <View style={styles.rowElements}>
                            {
                              item.categories.map((category) => {
                                return(
                                <View style={styles.categoryWrapper} key={category}>
                                  <Text style={styles.categoryText}>{category}</Text>
                                </View>
                                )
                              })
                            }
                            </View>
                            <Text style={styles.nameEvent}>{item.name}</Text>
                            <View style={[styles.rowElements,styles.textWithIconWrapper]}>
                              <Image style={styles.icon} source={require('./../resources/images/pay.png')}/>
                              <Text style={styles.iconText}>{item.price}</Text>
                            </View>
                            <View style={[styles.rowElements,styles.textWithIconWrapper]}>
                              <Image style={styles.icon} source={require('./../resources/images/time.png')}/>
                              <Text style={styles.iconText}>{item.time}</Text>
                            </View>
                            <View style={[styles.rowElements,styles.textWithIconWrapper]}>
                              <Image style={styles.icon} source={require('./../resources/images/location.png')}/>
                              <Text style={styles.iconText}>{item.place}</Text>
                              <Text style={styles.iconText}>{item.distance} • </Text>
                            </View>
                          </View>
                        </View>
                        </View>
                    </TouchableOpacity>
              )}/>
            </View>
          <TouchableOpacity style={{alignSelf:'center',marginVertical:12}}>
            <Text style={styles.buttonText}>Go to the next day</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.alert.active
              ? <Alert
                  callbackClose={()=>this.closeAlert()}
                  title={this.state.alert.title}
                  buttonText={this.state.alert.buttonText}/>
              :null
        }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centerEl: {
    width:'100%',
    paddingVertical:8,
    shadowColor: '#EBEBEC',
    shadowOffset: { width: 1, height: 3 },
    borderBottomWidth:1,
    borderTopWidth:0,
    alignItems:'center',
    backgroundColor:'white',
    shadowOpacity: 0.3,
    elevation: 2,
    borderColor:'#EFEFEF',
  },
  rowElements:{
    flexDirection: 'row',
  },
  columnElements:{
    flexDirection: 'column',
  },
  sortBy: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#333333'
  },
  categoryWrapper: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    marginRight:width(2),
    justifyContent:'center',
    alignItems:'center',
    padding:width(1.2),
  },
  categoryText: {
    fontFamily: 'System',
    fontSize: width(3.5),
    color: '#5C5C5C',
  },
  hostedby: {
    fontFamily:'System',
    fontSize: width(4.5),
    color: '#999999',
    marginLeft:width(3),
  },
  nameEvent: {
    fontFamily: 'System',
    fontSize: width(5),
    color: '#B076A0',
    width:220,
    textAlign:'left',
    marginBottom:18,
  },
  arrayCalendar: {
    justifyContent:'center',
    alignSelf:'center',
    height:25
  },
  icon: {
    width:17,
    height:17,
    marginRight:5,
    resizeMode:'contain'
  },
  iconText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#999999'
  },
  oneEvent: {
    padding:15,
    backgroundColor: 'white',
    marginTop:15,

  },
  textWithIconWrapper: {
    alignItems:'center',
    marginBottom:7,
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#B076A0',
    alignSelf:'center'
  },
})

export default Other;