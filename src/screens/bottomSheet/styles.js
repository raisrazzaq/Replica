import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'blue',
    height: 40,
    padding: 10,
    width: 80,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default styles;
