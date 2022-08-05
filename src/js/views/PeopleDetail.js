import React from 'react';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';



function PeopleDetail() {

	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(id);
		actions.fetchPersonDetail(`https://swapi.dev/api/people/${id}`)
	}, [])

	return (
		
        <div className='container-sm mt-5 '>
        <div className='row mb-4 justify-content-center '>
            <div className='card col-md-10  primary'>
                <h1 className='col primary mt-3'><strong>{!!store.person && store.person.name}</strong></h1>
                <h5 className='mt-3 mb-3 primary'>Permanence of the stars tesseract bits of moving fluff paroxysm of global death the carbon in our apple pies birth. Qui dolorem ipsum quia dolor sit amet a still more glorious dawn awaits extraplanetary with pretty stories for which there's little good evidence courage of our questions rich in heavy atoms. Vastness is bearable only through love vanquish the impossible dream of the mind's eye extraordinary claims require extraordinary evidence vel illum qui dolorem eum fugiat quo voluptas nulla pariatur the sky calls to us
                    </h5>
                <ul className='primary'>
                <li>Name : {!!store.person && store.person.name}</li>
							<li>Birth Year : {!!store.person && store.person.birth_year}</li>
							<li>Sex : {!!store.person && store.person.gender}</li>
							<li>Height : {!!store.person && store.person.height}</li>
							<li>Skin Color : {!!store.person && store.person.skin_color}</li>
							<li>Eye Color : {!!store.person && store.person.eye_color}</li>      
                </ul>
            </div>
        </div>
    </div>  


	
);
};

export default PeopleDetail;