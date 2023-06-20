import { useContext, useState } from "react";
import BookGrid from "../../Components/BookList/BookGrid";
import { books, users } from "../../httpRequests/testData";
import AuthContext from "../../Context/AuthContext";

function ProfileLibrary(){

    const authData = useContext(AuthContext);
    const user = users.find(x=>x.email == authData?.email);
    
    const [bookmarked, setBookmarked] = useState(books.filter(x=>user?.bookmarked.some(y=>y == x.id)));


    return (
        <div className="columns is-vcentered is-centered mt-3">
                <div className="box " style={{minHeight:'50vh', width:'60%', maxWidth:'60%'}}>
                    <BookGrid name="Bookmarked books" books={bookmarked}/>
                </div>
            </div>

    )
}

export default ProfileLibrary;