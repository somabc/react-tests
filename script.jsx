var Hello = React.createClass({
  render: function() {
    return (
      <h2>What's up React?</h2>
      );
  }
});

React.render(<Hello/>, document.getElementbyId("root"));