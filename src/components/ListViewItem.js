import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableHighlight, 
  View, 
  Text
} from 'react-native';
import CheckBox from './CheckBox';

export default class ListViewItem extends Component {
  state = {
    data: {}
  }

  componentWillMount() {
    const { data } = this.props
    this.setState({ data })
  }

  onCheckBoxPressed = () => {
    const { dataIndex } = this.props
    let { data } = this.state;
    data.completed = !data.completed;
    this.setState({ data });

    this.props.onCompletedChange(data, dataIndex);
  }

  render() {
    const { data } = this.state;
    const itemRowColor = data.completed ? styles.dataCompletedColor : styles.dataNotCompletedColor;
    const textDecorationLine = data.completed ? styles.textDecorationLine : null;

    return (
      <TouchableHighlight 
        underlayColor={'#eee'} 
        style={ styles.touchableHighlight } 
        {...this.props.sortHandlers}>
        <View style={ styles.viewListItem }>
          <CheckBox 
            data={data} 
            color={itemRowColor.color} 
            onCheckBoxPressed={this.onCheckBoxPressed} />
          <Text 
            style={[ 
              styles.textDisplay, 
              itemRowColor, 
              textDecorationLine 
            ]}>
            {data.key}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  touchableHighlight: {
    paddingTop: 6, 
    paddingBottom: 6, 
    backgroundColor: "#F8F8F8", 
    borderBottomWidth:1, 
    borderColor: '#eee'
  },
  viewListItem: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  textDisplay: {
    fontSize:18
  },
  dataCompletedColor: {
    color: '#C5C8C9'
  },
  dataNotCompletedColor: {
    color: '#000'
  },
  textDecorationLine: {
    textDecorationLine: 'line-through'  
  }
})
