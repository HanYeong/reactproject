import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css';
import UserList from './UserList';

function App(){
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
      <UserList/>
    </>
  );
}

export default App;