import React, { useContext, } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const People = () => {
    const { store, actions } = useContext(Context)


    return (
        <>
            <h1>People</h1>

            <div className="container">
                <div className="row">
                    {store.people.map((people, id) => {

                        return (
                            <div key={id} className="card" style={{ width: '40rem' }}>
                                <div className="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {people.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Hair Color: {people.hair_color}</h6>
                                        <p className="card-text">Eye Color: {people.eye_color}</p>
                                        <button href="#" className="btn btn-primary" onClick={() => actions.addFavorite(people.name)} >Add to Favorites</button>
                                        <Link to={"/people/" + people.url.match(/\d+/)[0]} className="btn btn-primary"  >Details</Link>
                                    </div>
                                </div>
                            </div>
                        )

                    })}


                </div>
            </div>




        </>
    );
}




export default People;