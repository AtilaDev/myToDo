import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class TaskInput extends React.Component {
  state = {
    task: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Add Task"
          value={this.state.task}
          onChangeText={task => this.setState({ task })}
          style={styles.textInput}
          onBlur={() => {
            this.props.addTask(this.state.task);
            this.setState({ task: '' });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps, { addTask })(TaskInput);
