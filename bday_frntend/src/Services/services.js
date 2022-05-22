import axios from "axios"
const BASE_URL="http://localhost:3000/bday";
const headers={
    "Content-type":'application/json'
}
class UserService{
    postUser(user){
        return axios.post(BASE_URL+"/add",user)
    }
    getUser(){
        return axios.get(BASE_URL+"/get")
    }
    deleteUser(id){
        return axios.delete(BASE_URL+"/delete/"+id)
    }
}
export default new UserService();