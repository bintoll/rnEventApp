import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text, FlatList, StatusBar, I18nManager } from 'react-native'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class Other extends Component {
    constructor(props){
        super(props)
        this.state = {date: '29-12-2016'}
        this.state ={data: [//data for FlatList
            {price: 'אֲסִימוֹן', key: 'item1',
            pic: './src/event.jpg',
            time: '20-30', distance:'30 ק"מ',
            host: 'דף הפייסבוק שלי',
            categories:['מזון','מזון','מזון']},
        {price: 'חופשי',
            key: 'item2',
            pic: './src/event2.jpg',
            time: '20-30', distance:'30 ק"מ',
            host: 'דף הפייסבוק שלי',
            categories:['מזון','מזון','מזון']}]}
    }
  
  componentWillMount() {
    this.props.navigation.navigate('DrawerOpen')
  }
    _dayForward = () => {
        let temp = (moment(this.state.date,"DD.MM.YYYY"))//from string to moment
        temp = temp.add(1, 'days')//plus day
        this.setState({ date: (temp.get('date')+'-' + (temp.get('month')+1) + temp.get('year'))})//from momnt to string

    }
    _dayBackward = () => {
        let temp = (moment(this.state.date,"DD.MM.YYYY"))//from string to moment
        temp = temp.add(-1, 'days')//minus day
        this.setState({ date: (temp.get('date')+'-' + (temp.get('month')+1) + temp.get('year'))})//from momnt to string

    }
  render() {
    return (
        <ScrollView>
              <View style={[styles.centerEl, styles.rowElements]}>
                <Button backgroundColor='#FFFFFF' color="#A8ABAC" style={styles.buttons} title=">" onPress={this._dayForward}/>
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
                    onDateChange={(date) => {this.setState({date: date})}}

                />
                <Button backgroundColor='#FFFFFF' color="#A8ABAC" title="<" onPress={this._dayBackward}/>
              </View>
              <View style={styles.buttons}>
                <Button backgroundColor='#FFFFFF' color="#A8ABAC" title="מיון לפי זמן"/>
              </View>
              <View style={styles.fltList}>
              <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
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
        marginTop:10,
    },
    rowElements:{
        flex: 1,
        flexDirection: 'row',
    },
    buttons: {
        width:300,
        marginLeft: 'auto',
        marginRight: 'auto',
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
    }
})

export default Other;