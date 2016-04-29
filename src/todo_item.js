var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      isEditting: true,
      content: 'Default text',
    };
  },
  save: function() {
    this.setState({
      isEditting: false,
      content: this.refs.textField.value,
    });
  },
  edit: function() {
    this.setState({
      isEditting: true,
    });
  },
  editView: function() {
    return(
        <div className="todo_item">
        <textarea
        ref="textField"
        defaultValue={this.state.content}>
        </textarea>
        <input
        type="submit"
        value="Save"
        onClick={this.save} />
        </div>
        );
  },
  displayView: function() {
    return(
        <div className="todo_item">
        <p>
        {this.state.content}
        </p>
        <input
        type="submit"
        value="Edit"
        onClick={this.edit} />
        </div>
        );
  },
  render: function() {
    if(this.state.isEditting) {
      return this.editView();
    }
    else {
      return this.displayView();
    }
  }
});
