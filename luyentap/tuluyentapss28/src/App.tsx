import React from 'react'

function App() {
  // const asynchronus=()=>{
  //   setTimeout(()=>{
  //     console.log(1);
  //   },1000);
  //   console.log(2);
  //   console.log(3);
  // }
  // asynchronus();
  const myPromise = new Promise((resolve,reject)=>{
    if(true){
      resolve ("Thành công!");
    }else{
      reject("Đã có lỗi xảy ra!!!!");
    }
  })
  myPromise.then((res)=>{
    console.log("Result:",res);
  }).catch((rej)=>{
    console.log("Reject:",rej);
  }).finally((final="Nhận các trường hợp")=>{
    console.log("Finally: ",final);
  })
  return (
    <div>App</div>
  )
}

export default App