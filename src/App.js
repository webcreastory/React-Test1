import './App.css';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, title: 'react를 배워봅시다.' },
  ]);

  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const Button = ({ clickAddButtonHandler, children }) => {
    return <button onClick={clickAddButtonHandler}>{children}</button>;
  };

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
    };
    setUsers([...users, newUser]);

    setTitle('');
  };

  const User = ({ item }) => {
    return (
        <div key={item.id} className={"todo-container"}>
            {item.title}
            <br /> 
        </div> 
    ); 
}; 

  return (
    <div className="home-background">
      <div className="home-container">

        <div className="input-box">
          <input value={title} onChange={titleChangeHandler} />
          <Button clickAddButtonHandler={clickAddButtonHandler}>추가하기</Button>
        </div>

        <div className="header">
          <span>Todo List</span>
        </div>

        <div className="body">
          {users
            .map(function (item) {
              return (
                <User
                  key={item.id}
                  item={item}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
