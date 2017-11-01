import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

import styles from './Styles';

const Spinner = () => (
  <View style = {[styles.fullscreen, styles.centered]}>
    <Image source ={require('./img/dbz.gif')}
      style={{width: 400, height: 400}} />

  </View>
);

export default Spinner;
