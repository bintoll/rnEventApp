import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, CheckBox } from 'react-native-elements'

class Buttons extends Component {
    render() {
        return(
            <View>
                {
                    this.props.list && this.props.list.map((item,i) => {
                        return (
                            <View style={styles.buttons} key={i}>
                                {
                                    this.props.checkbox
                                    ? <CheckBox
                                        checkedIcon='check-square-o'
                                        uncheckedIcon='square-o'
                                        title={item.name}
                                        checked={item.isActive}
                                        onPress={()=>this.props.callback(i)}
                                        containerStyle={{borderWidth:0}}/>
                                        : <Button backgroundColor={item.isActive ? '#18A15F' : '#FFFFFF'}
                                            color="#A8ABAC"
                                            title={item.name}
                                            onPress={() => this.props.callback(i)}
                                            containerViewStyle={{marginLeft: 0, marginRight: 0}}/>
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