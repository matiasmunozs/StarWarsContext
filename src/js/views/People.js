import React, { useContext, } from 'react'
import { Context } from '../store/appContext';

const People = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <h1>People</h1>
            {store.people.map((people, id) => {

                return (

                    <div key={id} className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Name: {people.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Hair Color: {people.hair_color}</h6>
                            <p className="card-text">Eye Color: {people.eye_color}</p>
                            <button href="#" className="btn btn-primary"  onClick={() => actions.addFavorite(people.name)} >Add to Favorites</button>

                        </div>
                    </div>

                )
            }
            )}
        </>
    );
}

export default People;