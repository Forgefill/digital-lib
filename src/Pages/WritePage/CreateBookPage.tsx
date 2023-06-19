import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {useContext, useState} from 'react';
import AuthContext from "../../Context/AuthContext";
import {Navigate, useNavigate} from 'react-router-dom';
import { Book, Chapter, Genre, books, genres, users } from "../../httpRequests/testData";
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import QuillEditor from "../../Components/QuillEditor/QuillEditor";

function CreateBookPage(){

    const navigate = useNavigate();
    const authData = useContext(AuthContext);
    const user = users.find(x=>x.email == authData?.email);
    const [title, setTitle] = useState<string>('') 
    const [description, setDescription] = useState<string>('') 
    const [photoUrl, setPhotoUrl] = useState<string>('');
    const [genreData, setGenreData] = useState<number[]>([]);
    const [chapterTitle, setChapterTitle] = useState('');
    const [chapterContent, setChapterContent] = useState('');


    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleChapterTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChapterTitle(event.target.value);
    };

    const handleChapterContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChapterContent(event.target.value);
    };


    const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const genreId = Number(event.target.value);
        if (event.target.checked) {
            // Checkbox was checked. Add this genre to the array.
            setGenreData(prevGenreData => [...prevGenreData, genreId]);
          } else {
            // Checkbox was unchecked. Remove this genre from the array.
            setGenreData(prevGenreData => prevGenreData.filter(id => id !== genreId));
          }
      };

    const handlePhotoUpload = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryFile = e.target?.result as string;
            setPhotoUrl(binaryFile);
        };

        reader.readAsDataURL(file);
        }
    };

    const handleBookCreateSubmit = () =>{
        if(user?.id)
        {
            let now = new Date();
            let dateNow = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0');
            let id = books[books.length - 1].id + 2;
            let genresToAdd = genres.filter(x=>genreData.some(y=>y == x.id));
            let book: Book = {
                id: id,
                title: title, 
                description: description,
                views:0, 
                bookmarks:0, 
                genres: genresToAdd,
                userId: 
                user?.id , 
                isCompleted: 'Ongoing',
                averageScore: 0,
                createdDate: dateNow,
                imageUrl: photoUrl 
            }

            books.push(book);
            navigate('/write')
        }
            
    }


    return (
        !authData?.isAuthenticated ? <Navigate to="/auth/login" replace />:
        <div className="page">
            <Navbar/>
            <div className="section pt-3" style={{minWidth:'100%', width:'100%', minHeight:'80vh', backgroundColor:'#E5EAEE'}}>
                <div className="columns is-vcentered is-centered mt-3">
                    <div className="column"  style={{minWidth:'80%', maxWidth:'80%'}}>
                        <div className="box">
                                <div className="title is-4">The Book</div>
                                <div className="columns  mb-5">
                                        <span className="column is-one-quarter subtitle m-0">Cover</span>
                                        <div className="column">
                                            <input className="mb-3" type="file" onChange={handlePhotoUpload} />
                                            {photoUrl && <img src={photoUrl} alt="Uploaded" />}
                                            <div className="notification columns  is-vcentered is-info is-light is-size-6 p-2 m-0 mb-1">
                                                <i className="image fas fa-circle-info column is-narrow p-0"/>
                                                <span className="column">Please use an image that is 3 by 4 aspect ration.</span>
                                            </div>
                                            <div className="notification is-danger is-size-6 p-2">
                                                The cover art is optional. Do not use copyrighted covers that you don't own and have no permission 
                                                to use.
                                            </div>
                                        </div>
                                </div>
                                <div className="columns is-vcentered mb-5">
                                        <span className="column is-one-quarter subtitle m-0">Title</span>
                                        <input className="column input is-primary" type="text" placeholder="Title of book" value={title} onChange={handleTitleChange}></input>
                                </div>
                                <div className="columns mb-5">
                                        <span className="column is-one-quarter subtitle">Description</span>
                                        <div className="column p-0">
                                            <textarea className="textarea is-primary" placeholder="Book description" value={description} onChange={handleDescriptionChange}></textarea>
                                        </div>
                                </div>
                                <div className="columns is-vcentered mb-5">
                                    <span className="column is-one-quarter subtitle m-0">Genres</span>
                                    <div className="column columns is-multiline">
                                        {genres.map((genre) => (
                                            <div key={genre.id} className="column is-one-fifth p-2">
                                            <label className="checkbox">
                                                <input type="checkbox" value={genre.id} checked = {genreData.includes(genre.id)} onChange={handleGenreChange}/>
                                                <span className="ml-2">{genre.name}</span>
                                            </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <SeparateLine/>
                                <div className="block">
                                    <div className="block">
                                        <span className="title is-4">First Chapter</span>
                                    </div>
                                    <div className="columns is-vcentered mb-5">
                                        <span className="column is-one-quarter subtitle m-0">Chapter Title</span>
                                        <input className="column input is-primary" type="text" placeholder="Title of chapter" value= {chapterTitle} onChange={handleChapterTitleChange}></input>
                                    </div>
                                    <div className="columns">
                                        <span className="column is-one-quarter subtitle">Chapter Content</span>
                                        <div className="column p-0" style={{height:'300px'}}>
                                            <QuillEditor handleContentChange={handleChapterContentChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons is-centered">
                                    <button className="button is-primary" onClick={()=> handleBookCreateSubmit()}>Submit</button>
                                </div>
                        </div>
                    </div>     
                </div>




            </div>

            <Footer/>
        </div>
    )
}


export default CreateBookPage;