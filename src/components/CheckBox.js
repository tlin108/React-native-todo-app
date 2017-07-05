import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

export default function CheckBox({ data, color, onCheckBoxPressed }) {
  const iconName = data.completed ? 'check-box' : 'check-box-outline-blank';
  const checkBoxColor = color || '#000';

  return (
    <Icon.Button
      data={data}
      name={iconName}
      backgroundColor='rgba(0,0,0,0)'
      color={checkBoxColor}
      underlayColor='rgba(0,0,0,0)'
      size={20}
      iconStyle={{marginLeft: -10, marginRight: 0}}
      activeOpacity={1}
      borderRadius={5}
      onPress={onCheckBoxPressed}
    />
  );
}