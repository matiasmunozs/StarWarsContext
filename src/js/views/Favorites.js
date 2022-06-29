import React, { useContext, } from 'react'
import { Context } from '../store/appContext';


const Favorites = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <h1>Favorites</h1>

              {store.favorites.map((favorites, id) => {

                return (

                    <div key={id} className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Name: {favorites}</h5>
                            <button onClick={() => actions.deleteFavorite(id)}>
									{" "}
									X {" "}
								</button>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Hair Color: {people.hair_color}</h6>
            <p className="card-text">Eye Color: {people.eye_color}</p>
            <button href="#" className="btn btn-primary"  onClick={() => actions.addFavorite(people.name)} >Add to Favorites</button> */}

                        </div>
                    </div>

                )
            }
            )}






        </>
    );
}

export default Favorites;