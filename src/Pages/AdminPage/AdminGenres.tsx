import { ChangeEvent, useState, MouseEvent  } from "react";
import { Genre, genres, deleteGenre, updateGenre } from "../../httpRequests/testData";
import SeparateLine from "../../Components/SeparateLine/SeparateLine";

function AdminGenres() {
    const [genresData, setGenres] = useState<Genre[]>(genres);
    const [newGenreName, setNewGenreName] = useState<string>("");

    const addNewGenre = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newGenre: Genre = {
            id: genresData[genresData.length-1].id + 1,
            name: newGenreName,
        };

        setGenres([...genresData, newGenre]);
        genres.push(newGenre);
    };

    const handleGenreNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewGenreName(e.target.value);
    };

    const handleDeleteGenre = (id: number) => {
        setGenres(genresData.filter((genre) => genre.id !== id));
        deleteGenre(id);
    };

    const handleUpdateGenre = (id: number) => {
        let genreId: number = genresData.findIndex(x => x.id === id);
        if (genreId === -1) {
            console.error(`Genre with id ${id} not found`);
            return;
        }
        let genre: Genre = {...genresData[genreId], name: newGenreName};
        let newGenresData = [...genresData];
        newGenresData[genreId] = genre;
        setGenres(newGenresData);
        updateGenre(genre);
    };

    return  <div className=" is-vcentered is-centered mt-3">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <span className="is-4 subtitle has-text-link">Name</span>
                        </div>
                        <div className="column is-one-quarter">
                            <span className="is-4 subtitle has-text-link">Constrols</span>
                        </div>
                    </div>
                    <SeparateLine/>
                    {genresData.map(genre => (
                    <div>
                        <div className="columns mb-2 mt-1 is-vcentered">
                            <div className="column pb-0">
                                <span className="is-4 title">{genre.name}</span>
                            </div>
                            <div className=" column pb-0 is-one-quarter buttons">
                                <button className="button is-danger" onClick={()=> {handleDeleteGenre(genre.id)}}>Delete</button>
                                <button className="button is-info" onClick={()=>{handleUpdateGenre(genre.id)}} disabled={!newGenreName.trim()}>Update</button>
                            </div>
                        </div>
                        <SeparateLine/>
                    </div>
                    ))}
                    <div className="columns is-vcentered mt-5">
                        <div className="column">
                            <input className="input" type="text" placeholder={newGenreName} onChange={handleGenreNameChange}/>
                        </div>
                        <div className="column buttons is-one-fifth">
                            <button className="button is-primary is-fullwidth" type="submit" onClick={addNewGenre} disabled={!newGenreName.trim()}>Add</button>
                        </div>
                    </div>  
            </div>
}

export default AdminGenres;