var TodoApp = React.createClass({
  eachTodo: function(key) {
    return [<TodoItem key={key}/>]
  },
  render: function() {
    return (
        <ul className="list-group">
        {this.props.children}
        </ul>
        );
  }
});
