import People from "../views/People";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			people: [],
			vehicle: [],
			planets: [],
			favorites: [],
			person: null,
            planet: null,
            vehicle: null,

			
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

			  fetchPlanetDetail: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ planet: data}))
                .catch((error) => console.log(error));
            },

			fetchPersonDetail: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ person: data}))
                .catch((error) => console.log(error));
            },

			fetchVehicleDetail: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ vehicle: data}))
                .catch((error) => console.log(error));
            },


			  addFavorite: item  => {
                const {favorites} = getStore();
                if(favorites.find((fav) => fav === item)){
                    console.log('Found')
                }else{
				const newStore = getStore()
                setStore({ favorites: [...newStore.favorites, item] })}			             
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
