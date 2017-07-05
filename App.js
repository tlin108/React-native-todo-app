import React from 'react'
import { 
  StyleSheet,
  Button,
  Text,
  TextInput, 
  FlatList, 
  View 
} from 'react-native'
import ListViewItem from './src/components/ListViewItem'

import sortBy from 'lodash/sortBy'

export default class App extends React.Component {
  
  state = {
    items: [
        { 
          key: 'Grocery Shopping',
          completed: false
        }, 
        {
          key: 'Laundry',
          completed: false
        },
        {
          key: 'Workout',
          completed: false
        },
        {
          key: 'Plan for weekend trip',
          completed: false
        }
        ],
    text: ''
  }

  onTextChange = (text) =>{
    this.setState({ text })
  } 

  onAddItemPress = () => {
    const { items, text } = this.state
    if(!text) return
    this.setState({ 
      items: [ ...items, {
        key: text,
        completed: false
      }],
      text: ''
    })
  }

  onCompletedChange = (completedItem, index) => {
    const { items } = this.state
    const newItemsList = items.filter((item) => item.key !== completedItem.key )
    this.setState({ items: [ ...newItemsList, completedItem ]})
  }

  render() {
    const { text, items } = this.state
    const sortedItems = sortBy(items, 'completed')

    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.textInputField }
          value={ text }
          placeholder="Type here to add item"
          onChangeText={ this.onTextChange }
        />
        <Button
          onPress={this.onAddItemPress}
          title="Add Item to To-Do List"
          color="#2196F3"
        />
        <FlatList
          data={ sortedItems }
          renderItem={({item, index}) => {
            return (
              <ListViewItem 
                key={index} 
                data={item}
                dataIndex={index}
                onCompletedChange={ this.onCompletedChange }
              />
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInputField: {
    height: 40
  }
})
