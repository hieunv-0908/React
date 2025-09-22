import { useState } from 'react'
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import ListStudent from './components/ListStudent';
import Footer from './components/Footer';
type studentType={
  name:string,
  age:number,
  class:string,
}

function App() {
  const students:studentType[]=[];
  return (
    <div className=' border-3 border-amber-400'>
      <Header></Header>
      <AddStudent></AddStudent>
      <ListStudent></ListStudent>
      <Footer></Footer>
    </div>
  )
}

export default App
