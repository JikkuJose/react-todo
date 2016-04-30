var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      tasks: [
        'one',
        'two',
        'three',
        'four',
        'five'
      ],
    };
  },
  add: function() {
    temp_tasks = this.state.tasks;
    temp_tasks.push(this.refs.addField.value);
    this.refs.addField.value = "";

    this.setState({
      tasks: temp_tasks,
    });
  },
  save: function(content, index) {
    temp_tasks = this.state.tasks;
    temp_tasks[index] = content;

    this.setState({
      tasks: temp_tasks,
    });
  },
  delete: function(index) {
    console.log(index);
    temp_tasks = this.state.tasks;
    temp_tasks.splice(index, 1);
    console.log(temp_tasks);

    this.setState({
      tasks: temp_tasks,
    });
  },
  eachTask: function(task, index) {
    return (
        <TodoItem
        content={task}
        key={index}
        index={index}
        delete={this.delete}
        save={this.save} />
        );
  },
  render: function() {
    return (
        <div>
        <input
        type="text"
        ref="addField" />
        <input
        type="submit"
        onClick={this.add}
        value="Add Task" />
        <ul className="list-group">
        {
          this.state.tasks.map(this.eachTask)
        }
        </ul>
        </div>
        );
  }
});
