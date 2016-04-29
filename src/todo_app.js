var TodoApp = React.createClass({
  render: function() {
    return <TodoItem />
  }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('container')
    );
