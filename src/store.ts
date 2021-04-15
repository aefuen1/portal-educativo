import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

interface action{
    type:string;
    payload:any;
}
interface defState{
    name:string;
    id:number;
    height:number;
    weight:number;
    img:string;
    types:string[];
    stats: {name:string, value:number}[];
    abilities: string[];
}

const defaultState = {
    name:"",
    id: 0,
    height: 0,
    weight: 0,
    img:"",
    types: [],
    stats: [],
    abilities: []
}

function reducer (state:defState = defaultState, {type, payload}:action ) {
    if(type === "MAKE_SEARCH"){
        return{
            ...state,
            name: payload.forms[0].name,
            id: payload.id,
            height: payload.height,
            weight: payload.weight,
            img: `https://pokeres.bastionbot.org/images/pokemon/${payload.id}.png`,
            types: payload.types.map( (item:any) => item.type.name),
            abilities: payload.abilities.map((item:any) => item.ability.name),
            stats: payload.stats.map( (item:any) => {
                return{
                    name: item.stat.name,
                    value: item.base_stat
                };
            })
        }
    }else if(type === "CLEAR"){
        return{
            ...state,
            name:"",
            id: 0,
            height: 0,
            weight: 0,
            img:"",
            types: [],
            stats: [],
            abilities: []
        };
    }else{
        return {...state};
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

