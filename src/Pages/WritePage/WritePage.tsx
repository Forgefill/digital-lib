import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {useContext, useState} from 'react';
import AuthContext from "../../Context/AuthContext";
import {Link, Navigate} from 'react-router-dom';
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import { books, chapters, deleteBook, reviews, users } from "../../httpRequests/testData";
import noImagePlaceholder from '../../Components/BookList/BookCard/No-Image-Placeholder.png'

function WritePage(){

    const authData = useContext(AuthContext);
    let user = users.find(x=>x.email == authData?.email);
    const [booksData, setBooksData] = useState(books.filter(x=>x.userId == user?.id))
    let chaptersData = chapters.filter(x=>booksData.some(y=>y.id == x.bookId))

    let bookmarks = 0;
    booksData.forEach(x=> bookmarks += x.bookmarks)

    let wordsCount = 0;
    chaptersData.forEach(x=> {if(x.content) wordsCount += x.content?.trim().length})
    
    let reviewsCount = reviews.filter(x=>booksData.some(y=>y.id == x.bookId)).length

    const handleDeleteBookChange = (id: number) => {
        setBooksData(booksData.filter((book) => book.id !== id));
        deleteBook(id);
    };

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
                                            <span className="subtitle has-text-weight-semibold">{booksData.length}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-file-lines mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Total Chapters</div>
                                            <span className="subtitle has-text-weight-semibold">{chaptersData.length}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-puzzle-piece mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column p-0">
                                            <div className="subtitle m-0">Total Words</div>
                                            <span className="subtitle has-text-weight-semibold">{wordsCount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-star mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Reviews Received</div>
                                            <span className="subtitle has-text-weight-semibold">{reviewsCount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column m-2">
                                    <div className="columns">
                                        <div className="column is-narrow p-0">
                                            <i className="fas fa-bookmark mr-2 mt-2 is-5" style={{color:'gray'}}/>
                                        </div>
                                        <div className="column is-narrow p-0">
                                            <div className="subtitle m-0">Total Bookmarks</div>
                                            <span className="subtitle has-text-weight-semibold">{bookmarks}</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>     
                </div>

                <div className="columns is-vcentered is-centered mt-3">
                    <div className="box column" style={{minWidth:'80%', maxWidth:'80%'}}>
                        <div className="ml-0 mb-5 mt-2">
                            <Link to='/write/book'>
                                <button className="button is-primary is-inverted is-focused is-medium">Add New</button>
                            </Link>
                        </div>
                        <div className="columns is-multiline is-centered has-text-centered">
                                    {booksData.map((book) => (
                                    <div className="column is-narrow  p-0 m-2 mb-0"  key={book.id} style={{border:'1px solid #E5EAEE', borderRadius:'10px '}}>
                                        <div className="p-0 m-2 is-flex is-align-items-center is-justify-content-center">
                                            <Link to={`/book/${book.id}`}>    
                                                <figure className="image is-128x128 ml-1" style={{overflow: 'hidden', width: '150px', height: '200px'}}>
                                                    <img
                                                    src={book.imageUrl || noImagePlaceholder} 
                                                    alt={book.imageUrl ? book.title : "No Image"} 
                                                    style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius:"5px"}}/>
                                                </figure>
                                            </Link>
                                        </div>
                                        <div className="p-0 mt-2">
                                            <div>
                                                <Link to={`/book/${book.id}`}>
                                                    <span className="title is-6">{book.title}</span>
                                                </Link>
                                            </div>
                                            <div className="buttons is-centered mt-2 mb-1">
                                                <button 
                                                    className="button is-danger is-outlined is-small " 
                                                    style={{borderRadius:'10px'}}
                                                    onClick={()=>handleDeleteBookChange(book.id)}>
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

            </div>
                
            <Footer/>
        </div>
    )
}


export default WritePage;