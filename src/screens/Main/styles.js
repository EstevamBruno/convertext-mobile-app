import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 10,
    backgroundColor: '#f0f0f5',
  },

  header: {
    alignItems: 'center',
    height: 80,
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 32,
    color: '#737380',
    textTransform: 'uppercase',
    fontFamily: 'Ubuntu-Bold',
  },

  headerText: {
    fontSize: 18,
    color: '#737380',
    textAlign: 'center',
    fontFamily: 'Ubunut-Light',
  },

  clipTextArea: {
    marginBottom: 16,
  },

  clipTextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#499F68',
    justifyContent: 'center',
    alignItems: 'center',
  },

  clipTextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
  },

  form: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    borderColor: '#737380',
    borderWidth: 0.3,
    fontSize: 18,
    fontFamily: 'Ubuntu-Light',
  },

  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonAreaLeft: {},

  buttonAreaRight: {},

  actionButton: {
    width: 160,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#8661c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  clipperButton: {
    width: 160,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#8661c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  clearButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#fe5f55',
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: '#499F68',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Ubuntu-Medium',
  },

  clearButtonText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
