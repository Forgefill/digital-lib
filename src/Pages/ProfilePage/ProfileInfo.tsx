import {useContext} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import AuthContext from '../../Context/AuthContext';


function ProfileInfo(){
    const authData = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSingOutClick = () =>{
        authData?.logout();
        navigate('/');
    }

    return <div className="columns is-vcentered is-centered">
                <div className="box " style={{width:'60%', maxWidth:'60%'}}>
                            <div className="block has-text-centered">
                                <div className="columns pb-3" style={{border:'1px solid lightgray', background:'lightgray'}}>
                                    <span className="title is-4 m-2">Profile Info</span>
                                </div>

                                <div className="columns "  style={{border:'1px solid lightgray'}}>
                                        <div className="column is-one-quarter">
                                            <span className="title is-6">User Name</span>
                                        </div>
                                        <div className="column is-one-quarter">
                                            <span className="subtitle is-6">{authData?.username}</span>
                                        </div>
                                </div>
                                <div className="columns "  style={{border:'1px solid lightgray'}}>
                                        <div className="column is-one-quarter">
                                            <span className="title is-6">Email</span>
                                        </div>
                                        <div className="column is-narrow">
                                            <span className="subtitle is-6">{authData?.email}</span>
                                        </div>
                                </div>

                                <div className="columns "  style={{border:'1px solid lightgray'}}>
                                        <div className="column is-one-quarter">
                                            <span className="title is-6">About</span>
                                        </div>
                                        <div className="column is-one-quarter">
                                            <span className="subtitle is-6">{authData?.about}</span>
                                        </div>
                                </div>

                                <div className="columns "  style={{border:'1px solid lightgray'}}>
                                        <div className="column is-one-quarter">
                                            <span className="title is-6">Rank</span>
                                        </div>
                                        <div className="column is-one-quarter">
                                            <span className="subtitle is-6">{authData?.rank}</span>
                                        </div>
                                </div>
                                <div className="columns "  style={{border:'1px solid lightgray'}}>
                                        <div className="column is-one-quarter">
                                            <span className="title is-6">Registred</span>
                                        </div>
                                        <div className="column is-one-quarter">
                                            <span className="subtitle is-6">{authData?.dateReg}</span>
                                        </div>
                                </div>

                            </div>

                            <div className="buttons is-centered">
                                <button className="button is-danger is-outlined" style={{minWidth:'150px'}} onClick = {handleSingOutClick} >Sign Out</button>
                                <button className="button is-success" style={{minWidth:'150px'}}>Update Profile</button>
                            </div>
                    </div>
                </div>
}



export default ProfileInfo;