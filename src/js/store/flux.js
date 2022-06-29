import People from "../views/People";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			people: [],
			vehicle: [],
			planets: [],
			favorites: []

			
		},
		actions: {
			// Use getActions to call a function within a fuction


			fetchPeople : () => {

				fetch('https://swapi.dev/api/people')
			
				  .then(res => res.json())
				  .then(data => setStore({people: data.results}))
				  .catch(err => console.error(err))
			  },

			  fetchVehicles : () => {

				fetch('https://swapi.dev/api/vehicles')
			
				  .then(res => res.json())
				  .then(data => setStore({vehicle: data.results}))
				  .catch(err => console.error(err))
			  },

			  fetchPlanets : () => {

				fetch('https://swapi.dev/api/planets')
			
				  .then(res => res.json())
				  .then(data => setStore	({planets: data.results}))
				  .catch(err => console.error(err))
			  },


			  addFavorite: item  => {
				const newStore = getStore()
                setStore({ favorites: [...newStore.favorites, item] })
				
                
			},
		
			deleteFavorite: index => {
				const newStore = getStore();
				var newFavorites = newStore.favorites.filter((item, ind) => index != ind);
				setStore({ favorites: newFavorites });
			},



			


		}
	};
};

export default getState;
