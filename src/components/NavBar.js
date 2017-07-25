import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import { BoxShadow } from 'react-native-shadow'

import { width } from 'constants/config.js'

const shadowOpt = {
	width:width(100),
	height:36,
	color:"#000",
	border:0,
	radius:1,
	opacity:0.2,
	x:0,
	y:12,
}

class NavBar extends Component {
	whatToRender = (navName) => {
		let component;
		switch (navName) {
			case 'back':
				return (
					<View style={[styles.navBarInner, {justifyContent: 'flex-end'}]}>
						<Text style={styles.navText}>לפני</Text>
						<Icon
							name='keyboard-arrow-left'
							color='#999999'
							style={styles.backIcon}
							size={31}
							onPress={() => this.props.handleBack()} />
					</View>	
				)
			case 'search':
				return (
					<View style={[styles.navBarInner, {justifyContent: 'center'}]}>
						<View style={styles.searchWrapper}>
							<Icon
								name='search'
								color='#999999'
								size={34}
								onPress={() => this.props.searchHandle()} />
								<View style={styles.searchInputWrapper}>
									<TextInput
										allowFontScaling={true}
										underlineColorAndroid="transparent"
										editable={true}
										enablesReturnKeyAutomatically={true}
										value={this.props.searchText}
										onChangeText={(text) => this.props.textChangeHandle(text)}
										style={styles.searchInput} />
								</View>
						</View>
						<Icon
							style={styles.searchIcon}	
							name='view-headline'
							color='#999999'
							size={34}
							onPress={() => this.props.handleDrawerOpen()} />
					</View>
				)
			case 'searchAndBack':
				return (
					<View style={[styles.navBarInner, {justifyContent: 'center'}]}>
						<View style={styles.searchWrapper}>
							<Icon
								name='search'
								color='#999999'
								size={34}
								onPress={() => this.props.searchHandle()} />
								<View style={styles.searchInputWrapper}>
									<TextInput value={this.props.searchText} onChangeText={(text) => this.props.textChangeHandle(text)} style={styles.searchInput} />
								</View>
						</View>
						<Icon
							name='keyboard-arrow-left'
							color='#999999'
							style={styles.backIcon}
							size={34}
							onPress={() => this.props.handleBack()} />
					</View>
				)
		}
	}
	render() {
		return (
			<View style={styles.navBarWrapper}>
				<BoxShadow setting={shadowOpt}>
					{this.whatToRender(this.props.navName)}
				</BoxShadow>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navBarWrapper: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	navBarInner: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 6,
		backgroundColor: 'white'
	},
	navText: {
		color: '#999999'
	},
	searchWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchInputWrapper: {
		paddingHorizontal: 10,
		paddingVertical: 2,
		borderWidth: 1,
		borderRadius: 20,
		height: 34,
		flex: 1,
		borderColor: '#999999',
		marginHorizontal: 10
	},
	searchInput: {
		flex: 1,
		borderRadius: 20,
		fontSize: 18,
	},
	searchIcon: {
		marginRight: 0
	},
	backIcon: {
		alignSelf: 'flex-end',
		marginTop: 2
	}
})

export default NavBar;