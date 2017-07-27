/**
 * Created by admin on 26.07.2017.
 */
/**
 * Created by admin on 23.07.2017.
 */
import React, { Component } from 'react';
import { View, Modal,Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Buttons from 'components/Buttons'

class ApproveCancel extends Component {
  render() {
    return(
        <View>
          <Modal
              animationType={"fade"}
              transparent={true}
              onRequestClose={() => {alert("Modal has been closed.")}}>
            <TouchableWithoutFeedback onPressOut={()=>{this.props.callbackTouchOut()}}>
              <View style={styles.transparentPart}>
                <View style={styles.modal}>
                  <Text style={{fontSize:15,fontWeight:'900'}}>האם אתה בטוח</Text>
                  <Buttons
                      list={this.props.list}
                      callback={(i)=>this.props.callback(i)}
                      navNam="ModalButtons"/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  transparentPart: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flex: 1,
    alignItems: 'center'
  },
  modal: {
    marginTop:240,
    marginBottom:240,
    backgroundColor:'#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:325,
  }
});

export default ApproveCancel;
