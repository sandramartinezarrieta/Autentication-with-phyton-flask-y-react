const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            character: [],
            planet: [],
            everyCharacter: {},
            favorites: [],
            everyplanet: {},
            vehicles: [],
            everyvehicle: {}
        },
        actions: {
            // funcion para traer cada caracter a travez del fetch

            obtChar: () => {
                fetch("https://swapi.dev/api/people")
                    .then((res) => res.json())
                    // Aca la funcion sube el contenido a store, en el array character
                    .then((data) => setStore({
                        character: data.results
                    }))
                    .catch((err) => console.error(err));

            },
            // funcion para obtener cada caracter a travez del id
            obtEveryChar: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then((res) => res.json())
                    // Aca la funcion sube el contenido a store, al objeto everycharacter
                    .then((data) => setStore({
                        everyCharacter: data
                    }))
                    .catch((err) => console.error(err));

            },
            obtainPlanet: () => {
                fetch("https://swapi.dev/api/planets")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planet: data.results,
                    }))
                    .catch((err) => console.error(err));

            },
            obtainEveryPlanet: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        everyplanet: data
                    }))
                    .catch((err) => console.error(err));

            },

            obtainVehicle: () => {
                fetch("https://swapi.dev/api/vehicles")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehicles: data.results
                    }))
                    .catch((err) => console.error(err));

            },
            obtainEveryVehicle: (id) => {
                fetch("https://swapi.dev/api/vehicles")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        everyvehicle: data.results[id]
                    }))
                    .catch((err) => console.error(err));

            },

            setName: (itemName) => {
                console.log(itemName);
                const store = getStore();
                store.favorites.includes(itemName) ? getActions().removefavorito(itemName) : setStore({
                    favorites: [...store.favorites, itemName]
                })
                // setStore({
                //     favorites: [...store.favorites, itemName]
                // })
            },
            removefavorito: (itemName) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((favorites) => {
                        if (favorites !== itemName) {
                            return favorites
                        }
                    })
                })
            },


            //   
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;