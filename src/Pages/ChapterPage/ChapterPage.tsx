import "../page.css";
import {useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import 'react-quill/dist/quill.snow.css';
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import QuillTextView from "../../Components/QuillTextView/QuillTextView";
import { Link, useNavigate, useParams } from "react-router-dom";
import { books, chapters } from "../../httpRequests/testData";

 function ChapterPage() {
    const navigate = useNavigate();
    let { bId, cId} = useParams();
    let bookId = -1;
    let chapterId = -1;
    if(bId && cId ){
        bookId = parseInt(bId, 10);
        chapterId= parseInt(cId, 10);
    }

    let chapter = chapters.find(x=>x.id == chapterId);
    let book = books.find(x=>x.id == bookId);
    


    let sortedChapters = chapters.filter(x => x.bookId == bookId).sort((a, b) => a.chapterNumber - b.chapterNumber);

    const [IsShowSetting, setIsShowSetting] = useState<boolean>(false);
    const [selectedStyle, setSelectedStyle] = useState('Default');

    const handleFontStyleButtonClick = (selectedStyle:string) => {
        setSelectedStyle(selectedStyle);
    };

    const handleSettingClick = () => {
        IsShowSetting ? setIsShowSetting(false): setIsShowSetting(true);
    }
    
    const [fontSize, setFontSize] = useState(16);
    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 2);
      };
    
      const decreaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize > 2 ? prevFontSize - 2 : 2);
      };

      const styles: string[] = ['Default', 'Dyslexic', 'Roboto', 'Lora'];

  return (
    <div className="page">
        <Navbar/>
        <div className="box mt-2" style={{minWidth: '80%', maxWidth:'80%', minHeight:'80vh'}}>
            <div className="columns block ">
                <div className="column">
                    <Link to={`/book/${bookId}`}><p className="title has-text-success">{book?.title}</p></Link>
                    
                    <p className="subtitle">{chapter?.title}</p>
                </div>
                <div className="column is-narrow is-right">
                    <button className={`button is-medium ${IsShowSetting ? 'is-danger' : 'is-primary'}`} onClick={handleSettingClick}>
                        <span className="icon">
                            <i className={`fas fa-heading ${IsShowSetting ? 'fa-xmark' : 'fa-gear'}`}></i>
                        </span>
                    </button>
                </div>
            </div>

            {IsShowSetting && (
                <div className="columns is-centered">

                    <div className="column is-narrow is-vcentered box has-text-centered" style={{width:'fit-content'}}>
                    <div className="block">
                        <span className="title is-4">
                            Font size
                        </span>
                        <div className="buttons is-centered mt-3">
                            <button className="button" onClick={decreaseFontSize}>
                                <span className="icon">
                                    <i className={`fas fa-heading fa-minus`}></i>
                                </span>
                            </button>
                            <button className="button" onClick={increaseFontSize}>
                                <span className="icon">
                                    <i className={`fas fa-heading fa-plus`}></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="block">
                        <span className="title is-4">
                            Font style
                        </span>
                        <div className="buttons is-centered mt-3">
                            {styles.map((style) => (
                                <button 
                                    className={`button is-small is-rounded ${selectedStyle == style ? 'is-primary' : ''}`}
                                    onClick={() => handleFontStyleButtonClick(style)}>
                                    <span>
                                        {style}
                                    </span>
                                </button>))
                            }
                        </div>
                    </div>
                </div>
                
                </div>
                
            )}
            
            <SeparateLine/>
                <QuillTextView 
                initialContent={chapter?.content} 
                fontSize={fontSize} 
                fontFamily={selectedStyle} 
                isBordered = {false}/>
            <SeparateLine/>

            <div className="section buttons is-centered">
                    <button
                    disabled = {chapter?.id == chapters[0].id} 
                    className="button is-link" style={{minWidth:'10%'}} 
                    onClick={()=>{navigate(`/book/${bookId}/chapter/${chapterId - 1}`)}}>
                        <span>
                            <i className=" fas fa-arrow-left mr-2"></i>
                        </span>
                        <span>
                            Previous
                        </span>
                    </button>
                    <button className="button is-link" style={{minWidth:'10%'}} onClick={()=>{navigate(`/book/${bookId}`)}}>
                        <span>
                            <i className=" fas fa-home mr-1"></i>
                        </span>
                        <span>
                            Index
                        </span>
                    </button>
                    <button 
                    disabled = {chapter?.id == chapters[chapters.length - 1].id} 
                    className="button is-link" style={{minWidth:'10%'}} 
                    onClick={()=>{navigate(`/book/${bookId}/chapter/${chapterId + 1}`)}}>
                        <span>
                            Next
                        </span>
                        <span>
                            <i className=" fas fa-arrow-right ml-2"></i>
                        </span>
                    </button>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default ChapterPage;