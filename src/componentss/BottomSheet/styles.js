import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  crossImg: {
    height: 25,
    width: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 20,
    width: '92%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  circleBox: {
    height: 18,
    width: 18,
  },
  genderText: {
    fontSize: 18,
    textAlign: 'center',
  },
  selectedCircle: {
    backgroundColor: '#1A0DAB',
    borderRadius: 9,
  },
  DoneBtn: {
    height: 40,
    width: '90%',
    backgroundColor: '#1A0DAB',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  doneText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
