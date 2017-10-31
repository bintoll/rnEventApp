import { Dimensions } from 'react-native'

const window = Dimensions.get('window');
export const width = (pers) => {
	return pers / 100 * window.width
}
export const height = (pers) => {
    return pers/100*window.height
}

export const categoryListMenu = [
  {
    name: 'הקטגוריה שלי',
    icon: require('../resources/images/mycategory.png')
  },
  {
    name: 'האירועים שלי',
    icon: require('../resources/images/person.png')
  },
  {
    name: 'כל האירועים',
    icon: require('../resources/images/myevents.png')
  },
]

export const ContactPlaceholders = [
  {
    heading:'שֵׁם',
    placeholder:'אנא הכנס את שמך'
  },
  {
    heading:'טלפון',
    placeholder:'אנא הזן את מספר הטלפון שלך'
  },
  {
    heading:'אֶלֶקטרוֹנִי',
    placeholder:'אנא הזן את הדוא"ל שלך'
  },
  {
    heading:'תאור',
    placeholder:'אנא הזן את התיאור שלך'
  }
]

export const NotificationSettings = [
    '1 min', '5 mins', '15 mins', '30 mins', '1 hour', '2 hours', '3 hours', '5 hours', '10 hours', '15 hours', '24 hours',
]

export const SelectPrice = [
  'Free', 'Token', 'Cost',
]