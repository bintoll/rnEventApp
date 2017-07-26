/**
 * Created by admin on 26.07.2017.
 */
/**
 * Created by admin on 23.07.2017.
 */
import React, { Component } from 'react';
import { View, Modal} from 'react-native';
import Buttons from 'components/Buttons'

class ApproveCancel extends Component {
  render() {
    return(
        <View >
          {
            this.props.isModalActive && this.props.list.map((item, i) => {
                  return (
                      <Modal
                          key={i}
                          animationType={"fade"}
                          transparent={false}
                          visible={this.props.isModalActive}
                          onRequestClose={() => {alert("Modal has been closed.")}}>
                        <View>
                          <Buttons
                              list={this.props.list}
                              callback={(i)=>this.props.callback(i)}
                              navNam="ModalButtons"/>
                        </View>
                      </Modal>
                  )
                }
            )
          }
        </View>
    );
  }
}

export default ApproveCancel;
