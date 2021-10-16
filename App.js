import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale, verticalScale } from './scaling';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gridData: ['bike', 'dark', 'jumping', 'cave', 'rooms', 'socks', 'dove', 'orange', 'bottle', 'blanket', 'salt', 'bug']
    }
  }

  _renderGrid = () => {
    const { gridData }  = this.state;
    return gridData.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.gridItem}>
          <View style={styles.gridNumSection}>
            <Text style={[styles.detailText, {color: '#FFF'}]}>{index+1}</Text>
          </View>
          <Text style={[styles.detailText, {paddingHorizontal: scale(8)}]}>{item}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <AntDesign name='arrowleft' size={scale(28)} color='#FFF' />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>BACKUP MY WALLET</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={[styles.detailText, {fontWeight: 'bold', letterSpacing: scale(0.4)}]}>please save your 12-word pass phrase</Text>
          <Text style={styles.detailText}>and keep it in a secure location</Text>
          <Text style={styles.detailText}>so you can recover your wallet anytime</Text>
        </View>
        <View style={styles.gridSection}>
          {this._renderGrid()}
        </View>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={[styles.detailText, {fontSize: scale(15), color: '#00AFFF', textDecorationLine: 'underline'}]}>Copy all to clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={[styles.detailText, {fontSize: scale(15), color: '#00AFFF', textDecorationLine: 'underline'}]}>Send me a backup email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneBtn}>
          <Text style={styles.headerTitle}>DONE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  header: {
    position: 'relative',
    width: '100%',
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AFFF'
  },
  backBtn: {
    position: 'absolute',
    left: scale(16)
  },
  headerTitle: {
    fontSize: scale(18),
    color: '#FFF'
  },
  detailSection: {
    marginVertical: verticalScale(18)
  },
  detailText: {
    textAlign: 'center',
    fontSize: scale(16),
    lineHeight: verticalScale(22),
    color: '#555555'
  },
  gridSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  gridItem: {
    flexDirection: 'row',
    width: scale(160),
    height: verticalScale(36),
    overflow: 'hidden',
    borderWidth: scale(1),
    borderColor: '#00AFFF',
    borderRadius: verticalScale(18),
    alignItems: 'center',
    margin: scale(4)
  },
  gridNumSection: {
    width: scale(28),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AFFF'
  },
  actionBtn: {
    marginTop: verticalScale(30),
    alignSelf: 'center'
  },
  doneBtn: {
    width: scale(328),
    height: verticalScale(44),
    borderRadius: verticalScale(22),
    marginTop: verticalScale(39),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AFFF'
  }
});

export default App;
