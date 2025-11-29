import { userList } from "../Model/userModel.js";

export function handleUsers(req,res){
    const userData = userList();  // 1.get model data
    res.render('users',{users:userData});  // 2.send or post data towords the view
}