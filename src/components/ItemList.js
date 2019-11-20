import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import { removeTask } from '../actions';

class ItemList extends React.Component {
  state = {
    refresh: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tasks}
          renderItem={({ item, index }) => (
            <List.Item
              title={item}
              style={styles.flatList}
              onPress={() => {
                this.props.removeTask(index);
                this.setState({ refresh: !this.state.refresh });
              }}
            />
          )}
          extraData={this.state.refresh}
          keyExtractor={task => task}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  flatList: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.green100,
    marginHorizontal: 15,
  },
  noItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps, { removeTask })(ItemList);
