import { v4 as uuidv4} from 'uuid';

let  users = []

const getAllUsers =  (req, res) => {
    res.status(200)
    res.send(users)
}

const getUserById = (req, res) => {
    res.send(users.filter(user => user.id == req.params.id))
}

const createUser = (req, res) => {
    let user = req.body
    users.push({...user, id: uuidv4()})
    res.send(user)
}

const updateUserById =  (req, res) => {
    let user_to_be_updated =  users.filter(user => user.id == req.params.id);
    const {first_name, last_name, birth_day, email, active} = req.body;

    if(first_name) user_to_be_updated.first_name = first_name;
    if(last_name) user_to_be_updated.last_name = last_name;
    if(birth_day) user_to_be_updated.birth_day = birth_day;
    if(email) user_to_be_updated.email = email;
    if(active) user_to_be_updated.active = active;

    res.send(user_to_be_updated)
}

const deleteUserById = (req, res) => {
    users = users.filter(user => user.id != req.params.id)
    res.send(users)
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}