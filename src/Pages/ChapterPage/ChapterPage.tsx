import "../page.css";
import {useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import 'react-quill/dist/quill.snow.css';
import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import QuillTextView from "../../Components/QuillTextView/QuillTextView";
import { Link, useNavigate } from "react-router-dom";

 function ChapterPage() {
    const navigate = useNavigate();
    

    const [IsShowSetting, setIsShowSetting] = useState<boolean>(false);
    const BookName:string = 'Book name and Link';
    const loremIpsumWithMarkup:string = `
    <h1>Lorem Ipsum</h1>
    <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Sed <em>tempor</em> metus id dolor tristique, in laoreet ligula pharetra. Fusce tristique diam at est vestibulum, id vestibulum odio aliquam. Nam ac sagittis arcu, vitae pretium justo. Duis rhoncus lectus id ligula tincidunt aliquet. Nunc tincidunt <u>gravida</u> tristique. Morbi vitae feugiat mi. Nullam tincidunt, velit ut placerat aliquet, nunc massa vulputate felis, eu dignissim neque tellus nec sapien. Sed ac malesuada urna. Donec dignissim facilisis lacinia.</p>
  
    <h2>Vivamus Euismod</h2>
    <p>In hac habitasse platea dictumst. <em>Curabitur mattis</em> risus a odio dignissim, in tempor nunc gravida. Nullam vel purus feugiat, rutrum nunc sit amet, luctus odio. Mauris vel neque non lectus ullamcorper tincidunt. Curabitur ultrices vestibulum orci. Nullam quis est sit amet lorem mollis pulvinar. Mauris maximus malesuada ligula id malesuada. Vestibulum tempor mauris non leo feugiat, a iaculis felis iaculis. Fusce eu pulvinar ligula, in convallis velit.</p>
  
    <h3>Suspendisse Potenti</h3>
    <p>Praesent dapibus sapien id nunc luctus, ut varius mauris malesuada. Nullam semper quam a ipsum <strong>lacinia</strong>, ac ultricies risus fringilla. Cras vestibulum maximus ligula in sollicitudin. Phasellus pulvinar consectetur massa vitae vestibulum. Integer eget augue ac elit commodo cursus. Curabitur iaculis sem a est commodo ultrices. Sed eleifend, neque at dictum sollicitudin, ligula tortor vestibulum purus, sit amet cursus erat tortor ac sapien. Integer vel nunc eget dolor fringilla commodo. Donec suscipit volutpat tristique.</p>
  
    <h2>Lists</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  
    <h2>Quotes</h2>
    <blockquote>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </blockquote>
  
    <h2>Links</h2>
    <p>Here is a link to <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example Website</a>.</p>
  
    <h2>Text alignment</h2>
    <p style="text-align: left;">This text is aligned to the left.</p>
    <p style="text-align: center;">This text is aligned to the center.</p>
    <p style="text-align: right;">This text is aligned to the right.</p>
  
    <h2>Indentation</h2>
    <p style="margin-left: 20px;">This paragraph has an indentation of 20 pixels.</p>
  
    <h2>Highlighting</h2>
    <p>This text is <mark>highlighted</mark>.</p>
  `;
  
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
        <div className="box" style={{minWidth: '80%', maxWidth:'80%', minHeight:'80%'}}>
            <div className="columns block ">
                <div className="column">
                    <Link to='/book'><p className="title has-text-success">{BookName}</p></Link>
                    
                    <p className="subtitle">Chapter Name</p>
                </div>
                <div className="column is-narrow is-right">
                    <button className={`button is-medium ${IsShowSetting ? 'is-danger' : 'is-success'}`} onClick={handleSettingClick}>
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
                <QuillTextView initialContent={loremIpsumWithMarkup} fontSize={fontSize} fontFamily={selectedStyle} isBordered = {false}/>
            <SeparateLine/>

            <div className="section buttons is-centered">
                    <button className="button is-link" style={{minWidth:'10%'}} onClick={()=>{alert('previous chapter')}}>
                        <span>
                            <i className=" fas fa-arrow-left mr-2"></i>
                        </span>
                        <span>
                            Previous
                        </span>
                    </button>
                    <button className="button is-link" style={{minWidth:'10%'}} onClick={()=>{navigate('/book')}}>
                        <span>
                            <i className=" fas fa-home mr-1"></i>
                        </span>
                        <span>
                            Index
                        </span>
                    </button>
                    <button className="button is-link" style={{minWidth:'10%'}} onClick={()=>{alert('next chapter')}}>
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