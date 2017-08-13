import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import { width } from 'constants/config.js'

class NavBar extends Component {
	whatToRender = (navName) => {
		let component;
		switch (navName) {
			case 'backEvents':
				return (
					<View style={[styles.navBarInnerBack,{justifyContent:'space-between'}]}>
						<Icon
								name='keyboard-arrow-right'
								color='white'
								size={31}
								onPress={() => this.props.handleBack()} />
						<Text style={styles.navText}>Events</Text>
						<TouchableOpacity>
							<Image style={styles.backIcon} source={require('./../resources/images/share.png')} onPress={() => this.props.handleBack()} />
						</TouchableOpacity>
					</View>	
				)
      case 'backContact':
        return (
            <View style={[styles.navBarInnerSearch,{justifyContent:'space-between',backgroundColor:'#B076A0'}]}>
              <Icon
                  name='keyboard-arrow-right'
                  color='white'
                  size={31}
                  onPress={() => this.props.handleBack()} />
              <Text style={styles.navText}>Contact Us</Text>
              <TouchableOpacity>
                <View style={styles.backIcon}/>
              </TouchableOpacity>
            </View>
        )
			case 'mainPage':
				return (
					<View style={[styles.navBarInnerSearch, {justifyContent: 'space-between',backgroundColor:'#B076A0',alignItems:'center'}]}>
            <TouchableOpacity>
              <Image style={styles.searchIcon} source={require('./../resources/images/navigation.png')} onPress={() => this.props.handleDrawerOpen()} />
            </TouchableOpacity>
            <Text style={styles.navText}>Events</Text>
						<View style={styles.searchWrapper}>
              <TouchableOpacity>
                <Image style={styles.searchIcon} source={require('./../resources/images/search.png')} onPress={() => this.props.searchHandle()} />
              </TouchableOpacity>
						</View>
					</View>
				)
      case 'map':
        return (
            <View style={[styles.navBarInnerSearch,{justifyContent:'space-between',backgroundColor:'#B076A0'}]}>
              <Icon
                  name='keyboard-arrow-right'
                  color='white'
                  size={31}
                  onPress={() => this.props.handleBack()} />
              <Text style={styles.navText}>Map</Text>
              <TouchableOpacity>
                <View style={styles.backIcon}/>
              </TouchableOpacity>
            </View>
        )
		}
	}
	render() {
		return (
			<View style={styles.navBarWrapper}>
				<View >
					{this.whatToRender(this.props.navName)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navBarWrapper: {

		justifyContent: 'center',
	},
	navBarInnerBack: {
		flexDirection: 'row',
		//alignItems: 'center',
		width:'100%',
		paddingHorizontal:width(4.8),
		paddingVertical: width(4),
		//backgroundColor: 'white'
	},
  navBarInnerSearch: {
    flexDirection: 'row',
    //alignItems: 'center',
    width:'100%',
    paddingHorizontal:width(5),
    paddingVertical: width(3),
    //backgroundColor: 'white'
  },
	navText: {
		color: 'white',
		fontFamily:'System',
		fontSize: width(5.5),
		fontWeight:'bold',
    },
	searchWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchInputWrapper: {
		paddingHorizontal: width(2.5),
		paddingVertical: width(0.5),
		borderWidth: 1,
		borderRadius: 20,
		height: width(18),
		flex: 1,
		borderColor: '#999999',
		marginHorizontal: width(2.5),
	},
	searchInput: {
		flex: 1,
		borderRadius: 20,
		fontSize: width(4.8),
	},
	searchIcon: {
		marginRight: 0
	},
	backIcon: {
    width:width(5.3),
    height:width(5.3),
	},
  searchIcon: {
    width:width(4.5),
    height:width(4.5),
  }

})

export default NavBar;