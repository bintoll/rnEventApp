import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import {categoryListMenu} from 'constants/config'
import { width, height } from 'constants/config'

import CategoriesTopPg from 'components/CategoriesTopPg'

const list = [
  {
    name: 'ילדים',
    active: false
  },
  {
    name: 'הַשׂכָּלָה',
    active: true
  },
  {
    name: 'אומנות',
    active: true
  },
  {
    name: 'לִרְקוֹד',
    active: false
  },
  {
    name: 'לִרְקוֹד',
    active: false
  },
  {
    name: 'לִרְקוֹד',
    active: false
  },
];

export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list,
      isAuthorized:true,
      superUser:true,
    }
  }

  changeStar = (indexStar) => {
    const newState = this.state.list
    newState[indexStar].active = !newState[indexStar].active
    this.setState({list: newState})
  }

  render() {
    return (
        <View style={styles.mainWrapper}>
          <ScrollView>
            <View>
              <CategoriesTopPg
                isAuthorized={this.state.isAuthorized}
                superUser={this.state.superUser}/>
              <View style={{paddingHorizontal:width(5)}}>
                {
                  categoryListMenu.map((item, index) => (
                          <View style={styles.categoryListWrapper} key={'clm'+index}>
                            <TouchableOpacity>
                              <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.iconWrapper}><Image source={item.icon}/></View>
                                <Text style={styles.textStyle}>{item.name}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                      )
                  )
                }
                <View style={styles.categoryListWrapper}>
                  <View style={[styles.rowElements,{justifyContent:'space-between'}]}>
                    <Text style={styles.textHeader}>קטגוריה</Text>
                    {
                      !this.state.isAuthorized
                        ?  <TouchableOpacity>
                            <Text style={styles.saveText}>שמור את ההגדרה</Text>
                          </TouchableOpacity>
                        : null
                    }
                  </View>
                </View>
                {
                  list.map((item, index) => (
                          <View style={styles.categoryListWrapper} key={'lst'+index}>
                            <TouchableOpacity onPress={() => this.changeStar(index)}>
                              <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.iconWrapper}>
                                  <Image
                                      source={item.active
                                      ?require('../resources/images/selectedstar.png')
                                      :require('../resources/images/unselectedstar.png')}/>
                                </View>
                                <Text style={styles.textStyle}>{item.name}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                      )
                  )
                }
              </View>
              <View style={{alignItems:'center',marginVertical:height(6)}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactUs')}>
                  <Text style={styles.buttonText}>תיצור איתנו קשר</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
    )
  }
}



const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    //marginTop: 10
  },
  rowElements: {
    flexDirection:'row'
  },
  allElements: {
    marginBottom:25
  },
  iconWrapper: {
    height:width(5),
    width:width(5),
    marginRight:width(2.5),
  },
  buttonText: {
    fontFamily:'System',
    fontSize:16,
    color:'#333333',
    opacity:0.9
  },
  categoryListWrapper: {
    marginTop:height(3)
  },
  list:{
    marginBottom: 20,
    borderTopWidth:0,
    borderBottomWidth:0,
    backgroundColor:'blue'
  },
  saveText: {
    fontFamily: 'System',
    fontSize: width(3.5),
    color: '#B783A9'
  },
  headerWrapper: {
    alignItems:'flex-start',
    marginTop:height(4)
  },
  listContainer: {
    width: 170,
    borderBottomWidth: 0,
  },
  bottom: {
    marginBottom:10
  },
  topPage:{
    marginTop:10,
    flex:1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textStyle: {
    fontFamily: 'System',
    fontSize: 16,
    color: '#333333',
  },
  textHeader: {
    fontFamily: 'LucidaGrande',
    fontSize: 16,
    color:'#999999'
  },
});

