// import user from './components/Profile/user.json';
// import Profile from './components/Profile/Profile';
// import statisticalData from './components/Statistics/statistical-data.json';
// import Statistics from './components/Statistics/Statistics';
// import friends from './components/FriendList/friends.json';
// import FriendList from './components/FriendList/FriendList';
// import transactions from './components/TransactionHistory/transactions.json';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import Counter from './components/test/test';
// import Dropdown from './components/test/Dropdown/Dropdown';
// import ColorPicker from './components/test/ColorPicker';
import React, { Component } from 'react';
import TodoList from './components/test/TodoList';
import initialTodos from './components/test/todos.json';
import TodoEditor from './components/test/TodoEditor';
import shortId from 'shortid';
import Filter from './components/test/Filter';
// import Form from './components/test/Form';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleFormSummit = data => {
    console.log(data);
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todoId === todo.id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortId.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { todos, filter } = this.state;

    const completedTodo = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    const visibleTodos = todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
    const totalTodos = visibleTodos.length;

    return (
      <div>
        <p>Общее кол-во: {totalTodos}</p>
        <p>Кол-во выполненых: {completedTodo} </p>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <Form onSubmit={this.handleFormSummit} /> */}
      </div>
    );
  }
}
export default App;
// export default function App() {
//   return (
//     <div>
//       <ColorPicker options={colorPickerOptions} />
//     </div>
//   );
// }

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// export default function App() {
//   return (
//     <div>
//       <Dropdown />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Counter initValue={999} />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Profile
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={statisticalData} />
//       <Statistics stats={statisticalData} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// }
