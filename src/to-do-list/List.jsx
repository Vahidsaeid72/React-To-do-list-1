import { FaCheck,FaTrashAlt,FaTimes } from "react-icons/fa";

const List = ({myJobs,setMyJobs}) => {
    const handeljob =(id)=>{
        const newlist = [...myJobs]
        const Index = newlist.findIndex(i => i.id === id);
        newlist[Index].isDone = !newlist[Index].isDone;
        setMyJobs(newlist);
    }
    const handleDelete = (id)=>{
        const newList = myJobs.filter(j=>j.id !== id);
        setMyJobs(newList);
    }
    if(myJobs.length !== 0){
        return ( 
            <ul className="list-group">
                {myJobs.map((job,index) => (
                    <li key={job.id} className={`list-group-item d-flex justify-content-between align-items-center ${job.isDone ? 'isdone':''}`}>
                        {job.title} 
                        <div>   
                            <button className="btn btn-success me-2 btn-sm myBtn" onClick={()=>handeljob(job.id)}>{job.isDone ?<FaTimes/>:<FaCheck/>}</button>
                            <button className="btn btn-danger me-2 btn-sm myBtn " onClick={()=>handleDelete(job.id)}><FaTrashAlt/></button>
                        </div>
                    </li>
                ))}
            </ul>
         );
    }else{
        return ( 
        <ul className="list-group">
            <h5 className = "text-center p-2 bg-primary text-light">هیچ کاری در لیست ثبت نشده!!</h5>
        </ul>
        )
    }
}
 
export default List;