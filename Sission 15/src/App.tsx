// import { useState } from 'react'
import Color from "./component/Color"
import Header from "./component/Header"
import DateInput from "./component/DateInput"
import Progress from "./component/Progress"
import StudentManage from "./component/studentManage";
import ListPost from "./component/ListPost";
import FormEmail from "./component/FormEmail"; 
import Clock from "./component/Clock"
import Count from "./component/Count"
import JobList from "./component/jobList";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Color></Color> */}
        {/* <DateInput></DateInput> */}
        {/* <Progress></Progress> */}
        {/* <StudentManage></StudentManage> */}
        {/* <ListPost /> */}
        {/* <FormEmail></FormEmail> */}
        {/* <Clock></Clock> */}
        {/* <Count></Count> */}
        <JobList></JobList>
      </div>
    )
  }
}

