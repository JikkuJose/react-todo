var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      isEditting: false,
    };
  },
  save: function() {
    this.props.save(this.refs.textField.value, this.props.index);

    this.setState({
      isEditting: false,
    });
  },
  edit: function() {
    this.setState({
      isEditting: true,
    });
  },
  delete: function() {
    this.props.delete(this.props.index);
  },
  editView: function() {
    return(
        <li className="list-group-item">
        <div className="input-group">
        <input
        type="text"
        className="form-control"
        ref="textField"
        defaultValue={this.props.content}
        placeholder="Search for..." />
        <span className="input-group-btn">
        <button
        className="btn btn-default"
        onClick={this.save}
        type="button">Save</button>
        <button
        className="btn btn-danger"
        onClick={this.delete}
        type="button">Delete</button>
        </span>
        </div>
        </li>
        );
  },
  displayView: function() {
    return(
        <li className="list-group-item">
        <div className="input-group">
        <span
        className="input-group-addon"
        >{this.props.content}</span>
        <span className="input-group-btn">
        <button
        className="btn btn-default"
        onClick={this.edit}
        type="button">Edit</button>
        <button
        className="btn btn-danger"
        onClick={this.delete}
        type="button">Delete</button>
        </span>
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
