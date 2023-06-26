import React,{useState} from 'react';
import './App.css';
import TakeInput from './ComponentsMySelf/TakeInput';
import ListInput from './ComponentsMySelf/ListInput';

function App() {

  const [datas,setdata]=useState([]); //Take array of data

  function takedatas(data)
  {
    setdata([...datas,data]); //...data retrive the previous data and add another props
  }

  return (
    <div className='container'>
      <TakeInput addDetails={takedatas}></TakeInput>
      <ListInput values={datas}></ListInput>
    </div>
  );
}

export default App;
