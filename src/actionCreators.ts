import axios from "axios";

function fetchPokemon(search:string) {
    return function(dispatch:any){
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
                .then(({data}) => {
                    console.log("lo que se fetchio");
                    console.log(data);
                    dispatch(setPokemon(data));
                })
                .catch(function(error){
                    //die
                });
    };
  }

const setPokemon = (payload:any) => {
    return{
        type: "MAKE_SEARCH",
        payload
    }
}

const clear = () =>{
    return{
        type:"CLEAR"
    };
}

export {fetchPokemon, clear};