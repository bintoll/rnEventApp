/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, CheckBox } from 'react-native-elements'

class Buttons extends Component {

    _ButtonOn = (i) => {
        const newState = this.state.buttons
        newState[i].isActive = !newState[i].isActive
        this.setState({buttons: newState})
    }

        render() {
        console.log(this.props)
            return(
                <View>
                    {
                        this.props.list && this.props.list.map((butt,i) => {
                            return (
                                <View style={styles.buttons} key={'btn'+i}>
                                    {
                                        this.props.checkbox
                                        ? <CheckBox
                                                checkedIcon='check-square-o'
                                                uncheckedIcon='square-o'
                                                title={chk.name}
                                                checked={chk.isActive}
                                                onPress={()=>this.props.callback()}
                                                containerStyle={{borderWidth:0}}
                                            />
                                        : <Button backgroundColor={butt.isActive ? '#18A15F' :'#FFFFFF' }
                                              color="#A8ABAC"
                                                  title={butt.name}
                                               onPress={()=>this.props.callback()}
                                            />

                                    }
                                </View>
                            )
                        })
                    }
                </View>
            );
        }

    }
const styles = StyleSheet.create({
    buttons: {
        width:300,
        alignSelf: 'center',
        marginTop:10,
        marginBottom:10,
        borderWidth: 1,
        borderColor:'#A8ABAC'
    },

})
export default Buttons;