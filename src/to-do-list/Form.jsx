
import {useState} from 'react';

const From = ({myJobs,setMyJobs}) => {
    const [formData , setFormData] = useState({
        id:Math.random(),
        title: '',
        isDone : false
    });

    const handleSubmit =(e)=>{
        e.preventDefault();
        setMyJobs([...myJobs,formData]);
        setFormData({
            id:Math.random(),
            title: '',
            isDone : false
        })
    }



    return ( 
        <form className="form form-inline">
        <div className=" input-group my-3">
            <button className="btn btn-primary btn-sm ms-5 rounded-1" onClick={handleSubmit}>افزودن کار</button>
            <input type="text" className="form-control me-5 rounded-1" value={formData.title} onChange={(e) => setFormData({...formData , title : e.target.value})}/>
        </div>
       </form>
     );
}
 
export default From;