import { StyleSheet, Platform } from 'react-native';

import { bgColor, textColor } from './variable';

// TODO. for media query
// const windowWidth = Dimensions.get('window').width;
// const isTable = windowWidth > 360;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.DEFAULR,
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 48,
    color: textColor.GREY,
    fontWeight: 'bold',
  },
  todoContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500',
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa',
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
  inputContainer: {
    marginTop: 48,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: bgColor.WHITE,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: bgColor.WHITE,
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: textColor.SUBMIT,
    fontWeight: '600',
  },
  bottomTabBar: {
    flex: 1,
  },
  tabText: {
    display: 'flex',
    padding: 8,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const getStyle = <T>(key: keyof typeof styles) => {
  return styles[key] as T;
};
