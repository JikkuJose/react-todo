var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      isEditting: false,
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
        <ul className="list-group">
        <li className="list-group-item">
        <textarea
        ref="textField"
        defaultValue={this.state.content}>
        </textarea>
        <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" onClick={this.save}>Save</button>
        <button type="button" class="btn btn-default">Delete</button>
        </div>
        </li>
        </ul>
        </div>
        );
  },
  displayView: function() {
    return(
        <li className="list-group-item">
        <p>
        {this.state.content}
        </p>
        <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" onClick={this.edit}>Edit</button>
        <button type="button" class="btn btn-default">Delete</button>
        </div>
        </li>
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
