import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {useContext} from 'react';
import AuthContext from "../../Context/AuthContext";
import {Link, Navigate} from 'react-router-dom';
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import { testBooks } from "../../httpRequests/bookApi";
import noImagePlaceholder from '../../Components/BookList/BookCard/No-Image-Placeholder.png'

function WritePage(){

    const authData = useContext(AuthContext);



    return (
        !authData?.isAuthenticated ? <Navigate to="/auth/login" replace />:
        <div className="page">
            <Navbar/>
            <div className="section pt-3" style={{minWidth:'100%', width:'100%', minHeight:'80vh', backgroundColor:'#E5EAEE'}}>
                <div className="columns is-vcentered is-centered mt-3">
                    <div className="column"  style={{minWidth:'80%', maxWidth:'80%'}}>
                        <div className="box columns">
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className=" fas fa-book mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Books</div>
                                            <span className="subtitle has-text-weight-semibold">1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-file-lines mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Total chapters</div>
                                            <span className="subtitle has-text-weight-semibold">1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-puzzle-piece mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column p-0">
                                            <div className="subtitle m-0">Total words</div>
                                            <span className="subtitle has-text-weight-semibold">2001</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-star mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Reviews received</div>
                                            <span className="subtitle has-text-weight-semibold">1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-bookmark mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Unique bookmarks</div>
                                            <span className="subtitle has-text-weight-semibold">2</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>     
                </div>

                <div className="columns is-vcentered is-centered mt-3">
                    <div className="box column" style={{minWidth:'80%', maxWidth:'80%'}}>
                        <div className="ml-0 mb-5 mt-2">
                            <button className="button is-primary is-inverted is-focused is-medium">Add New</button>
                        </div>
                        <div className="columns is-multiline has-text-centered">
                                    {testBooks.map((book) => (
                                    <div className="column is-narrow p-0 m-2 mb-0"  key={book.id} style={{border:'1px solid #E5EAEE', borderRadius:'10px '}}>
                                        <div className="p-0 m-2">
                                            <Link to="/book">    
                                                <figure className="image is-128x128 ml-1" style={{overflow: 'hidden', width: '100px', height: '125px'}}>
                                                    <img
                                                    src={book.imageUrl || noImagePlaceholder} 
                                                    alt={book.imageUrl ? book.title : "No Image"} 
                                                    style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius:"5px"}}/>
                                                </figure>
                                            </Link>
                                        </div>
                                        <div className="p-0 mt-2">
                                            <div>
                                                <Link to="/book">
                                                    <span className="title is-6">{book.title}</span>
                                                </Link>
                                            </div>
                                            <div className="buttons is-centered mt-2 mb-1">
                                                <button className="button is-danger is-outlined is-small " style={{borderRadius:'10px'}}>
                                                    <i className="fas fa-trash"/>
                                                </button>
                                                <button className="button is-primary is-outlined is-small "style={{borderRadius:'10px'}}>
                                                    <i className="fas fa-pen-to-square"/>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    ))}  
                        </div>
                    </div>     
                </div>

                <div className="columns is-centered mt-3">
                    <div className="column mr-5"  style={{minWidth:'40%', maxWidth:'40%'}}>
                        <div className="box">
                                <span className="title">Recent Comments</span>
                                <SeparateLine/>
                        </div>
                    </div>
                    <div className="column ml-5"  style={{minWidth:'40%', maxWidth:'40%'}}>
                        <div className="box ">
                                <span className="title">Recent Reviews</span>
                                <SeparateLine/>
                        </div>
                    </div>          
                </div>


            </div>
                
            <Footer/>
        </div>
    )
}


export default WritePage;