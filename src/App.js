import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setInputs({
      username: '',
      email: ''
    });
    setUsers(users.concat(user));
    nextId.current += 1;
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      <div>
        <div style={style}><Hello name="prop 전달" color="skyblue" isSpecial={true}/></div>
        <div style={style}>{name}</div>
        <Hello/>
      </div>
      <div className="gray-box"></div>
      {/*aaaaaa */}
      <Wrapper>
        <Hello name="react" color="red"/>
      </Wrapper>
      <Counter/>
      <InputSample/>
      <CreateUser username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;