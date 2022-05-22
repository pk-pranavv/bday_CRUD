import {useSelector,useDispatch} from "react-redux"
import {Navigate,useNavigate} from "react-router-dom" 
import services from "../Services/services";
const Add=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {fullname,DOB,gender}=useSelector((state)=>state);
    const submitHandler=(e)=>{
        e.preventDefault();
        const user={
            "fullname":fullname,
            "DOB":DOB,
            "gender":gender
        }
        console.log(user)
        services.postUser(user);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter Fullname</label>
                <input name="fullname" type="text" value={fullname} onChange={(e)=>dispatch({type:"fullname",value:e.target.value})} />
                <label>Enter DOB</label>
                <input name="DOB" type="text" value={DOB} onChange={(e)=>dispatch({type:"DOB",value:e.target.value})} />
                <label>Enter gender</label>
                <input name="gender" type="text" value={gender} onChange={(e)=>dispatch({type:"gender",value:e.target.value})} />
                <input type="submit" />
            </form>

        </div>
    )
}
export default Add;