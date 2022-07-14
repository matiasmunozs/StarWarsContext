import React, { useContext, } from 'react'
import { Context } from '../store/appContext';


const Favorites = () => {
    const { store, actions } = useContext(Context)

    return (
        // <>
        //     <h1>Favorites</h1>

        //       {store.favorites.map((favorites, id) => {

        //         return (

        //             <div key={id} className="card" style={{ width: '18rem' }}>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Name: {favorites}</h5>
        //                     <button onClick={() => actions.deleteFavorite(id)}>
        // 							{" "}
        // 							X {" "}
        // 						</button>


        //                 </div>
        //             </div>

        //         )
        //     }
        //     )}



        <>
            <h1>Favorites</h1>

            <div class="container">
                <div class="row">
                    {store.favorites.map((favorites, id) => {

                        return (
                            <div key={id} className="card" style={{ width: '40rem' }}>
                                <div class="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {favorites}</h5>
                                        <button onClick={() => actions.deleteFavorite(id)}>
                                            {" "}
                                            X {" "}
                                        </button>

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

export default Favorites;