import {useState,useEffect} from 'react';
import From from './Form';
import List from './List';
import './Main.css';


const getDataFromLS =()=>{
    const myJobs = localStorage.getItem('myJobs');
    if(myJobs){
      return JSON.parse(myJobs);
    }else{
      return [];
    }
  }

const Main = () => {
    const [myJobs , setMyJobs]= useState(getDataFromLS())

    useEffect(()=>{
    localStorage.setItem('myJobs',JSON.stringify(myJobs) );
},[myJobs])

    return (
    <div className="mycontent">
        <div className="myhead bg-primary">
            <h5 className="text-center text-light">کارهای مهم خود را بنویسید</h5>
        </div>
         <From myJobs={myJobs} setMyJobs={setMyJobs}/>
         <List myJobs={myJobs} setMyJobs={setMyJobs}/>
    </div>
      );
}
 
export default Main;