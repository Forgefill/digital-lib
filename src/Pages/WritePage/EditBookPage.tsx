import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {useContext, useState, MouseEvent, ChangeEvent} from 'react';
import AuthContext from "../../Context/AuthContext";
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import { Chapter, books, chapterIdCounter, chapterNumberCounter, chapters, createChapter, deleteChapter, increaseChapterCounters, updateChapter, users } from "../../httpRequests/testData";

function EditBookPage(){

    let { id} = useParams();
    const navigate = useNavigate()
    let bookId = -1;
    if(id){
        bookId = parseInt(id, 10);
    }
    else{
        navigate('/BookNotFound');
    }
    
    const authData = useContext(AuthContext);
    let user = users.find(x=>x.email == authData?.email);
    let book = books.find(x=>x.id == bookId);
    const [chapterData, setChapterData] = useState(chapters.filter(x=>x.bookId == bookId).sort((a, b) => b.chapterNumber - a.chapterNumber))
    const [newChapterName, setNewChapterName] = useState<string>("");

    const addNewChapter = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();


        const newChapter: Chapter = {
            id: chapterIdCounter + 1,
            title: newChapterName,
            chapterNumber: chapterNumberCounter + 1,
            bookId: bookId,
            content:'',
        };

        
        increaseChapterCounters();
        setChapterData([...chapterData, newChapter]);
        createChapter(newChapter);
        alert(chapters);
    };

    const handleChapterNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewChapterName(e.target.value);
    };

    const handleDeleteChapter = (id: number) => {
        setChapterData(chapterData.filter((chapter) => chapter.id !== id));
        deleteChapter(id);
    };

    const handleUpdateChapter = (id: number) => {
        let chapterId: number = chapterData.findIndex(x => x.id === id);
        if (chapterId === -1) {
            console.error(`Chapter with id ${id} not found`);
            return;
        }
        let chapter: Chapter = {...chapterData[chapterId], title: newChapterName};
        let newChapterData = [...chapterData];
        newChapterData[chapterId] = chapter;
        setChapterData(newChapterData);
        updateChapter(chapter);
    };

    return (
        !authData?.isAuthenticated ? <Navigate to="/auth/login" replace />:
        <div className="page">
            <Navbar/>
            <div className="section pt-3" style={{minWidth:'100%', width:'100%', minHeight:'80vh', backgroundColor:'#E5EAEE'}}>

                <div className="columns is-vcentered is-centered has-text-centered mt-3">
                    <div className="box column" style={{minWidth:'80%', maxWidth:'80%'}}>
                        <div className="ml-0 mb-5 mt-2 has-text-left">
                            <Link to='/write'>
                                <button className="button is-link is-medium">
                                    <span>
                                        <i className=" fas fa-arrow-left mr-2"></i>
                                    </span>
                                    Back
                                </button>
                            </Link>
                        </div>
                        <div className="block">
                            <Link to='/write'>
                                    <span className="title">
                                        {book?.title}
                                    </span>
                            </Link>
                        </div>
                        <div className="block">
                            <span className="subtitle">
                                {chapterData.length} Chapters
                            </span>
                        </div>
                        <div className="block">
                                    {chapterData.reverse().map((chapter) => (
                                    <div className="p-0 m-2 mb-0"  key={chapter.id} >
                                        <div className="columns has-text-centered p-0 mt-2" style={{border:'1px solid #E5EAEE', borderRadius:'10px '}}>
                                            <div className="column">
                                                <Link to={`/book/${chapter.id}`}>
                                                    <span className="title is-6">{chapter.title}</span>
                                                </Link>
                                            </div>
                                                
                                            <div className="column buttons">
                                            <button className="button is-primary is-outlined is-small "style={{borderRadius:'10px'}}>
                                                    Edit content
                                                </button>
                                                <button className="button is-link is-outlined is-small "style={{borderRadius:'10px'}}
                                                onClick={()=>handleUpdateChapter(chapter.id)}>
                                                    Rename
                                                </button>
                                                <button 
                                                    className="button is-danger is-outlined is-small " 
                                                    style={{borderRadius:'10px'}}
                                                    onClick={()=>handleDeleteChapter(chapter.id)}>
                                                    Delete
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    <div className="columns is-vcentered mt-5">
                                        <div className="column">
                                            <input className="input" type="text" placeholder={newChapterName} onChange={handleChapterNameChange}/>
                                        </div>
                                        <div className="column buttons is-one-fifth">
                                            <button className="button is-primary is-fullwidth" type="submit" onClick={addNewChapter} disabled={!newChapterName.trim()}>Add</button>
                                        </div>
                                    </div>  
                        </div>
                    </div>     
                </div>

            </div>
                
            <Footer/>
        </div>
    )
}


export default EditBookPage;