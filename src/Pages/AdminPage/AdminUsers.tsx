import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import { User, updateUser, users } from "../../httpRequests/testData";
import {useState} from 'react'

function AdminUsers(){
    const [usersData, setUsers] = useState<User[]>(users);

    const handleChangeToAdmin = (id: number) => {
        let userId: number = usersData.findIndex(x => x.id === id);
        if (userId === -1) {
            console.error(`User with id ${id} not found`);
            return;
        }
        let user: User = {...usersData[userId], role: 'admin'};
        let newusersData = [...usersData];
        newusersData[userId] = user;
        setUsers(newusersData);
        updateUser(user);
    };

    const handleChangeToUser = (id: number) => {
        let userId: number = usersData.findIndex(x => x.id === id);
        if (userId === -1) {
            console.error(`User with id ${id} not found`);
            return;
        }
        let user: User = {...usersData[userId], role: 'user'};
        let newusersData = [...usersData];
        newusersData[userId] = user;
        setUsers(newusersData);
        updateUser(user);
    };

    return  <div className=" is-vcentered is-centered mt-3">
                    <div className="columns is-vcentered">
                            <div className="column is-one-quarter has-text-centered pb-0">
                                <span className="subtitle has-text-link">Email</span>
                            </div>
                            <div className="column is-one-quarter has-text-centered pb-0">
                                <span className="is-5 subtitle has-text-link">Username</span>
                            </div>
                            <div className="column is-one-quarter pb-0">
                                <span className="is-5  subtitle has-text-link">Role</span>
                            </div>
                            <div className="column is-one-quarter pb-0">
                                <span className="is-5 subtitle has-text-link">Registred</span>
                            </div>
                    </div>
                    <SeparateLine/>
                    {usersData.map(user => (
                    <div> 
                        <div className="columns mb-2 mt-1 is-vcentered ">
                            <div className="column is-one-quarter has-text-centered pb-0">
                                <span className="subtitle has-text-weight-semibold">{user.email}</span>
                            </div>
                            <div className="column is-one-quarter has-text-centered pb-0">
                                <span className="is-5 subtitle">{user.username}</span>
                            </div>
                            <div className="column is-one-quarter pb-0">
                                <span className="is-5  subtitle">{user.role}</span>
                            </div>
                            <div className="column is-one-quarter pb-0">
                                <span className="is-5 subtitle">{user.registered}</span>
                            </div>
                        </div>
                        <div className="mt-5 pb-0 is-one-quarter buttons is-right">
                                {user.role === 'admin' ? 
                                <button className="button is-danger" onClick={()=>handleChangeToUser(user.id)}>Change to user</button>: 
                                <button className="button is-info" onClick={()=>handleChangeToAdmin(user.id)}>Change to admin</button>}
                                
                            </div>
                        <SeparateLine/>
                    </div>
                    ))}
            </div>
}


export default AdminUsers;