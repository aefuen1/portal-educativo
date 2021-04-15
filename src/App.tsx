import React, {useState, useEffect} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clear, fetchPokemon } from './actionCreators';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import "./css/App.sass";
import store from './store';


interface Props{
  name:string
  searchPokemon: (search:string) => void;
  clearRedux: () => void;
}

const App:any = (props:Props) => {

  let [state, setState] = useState({
    search:"",
    isSearching: false,
    timer:false
  });

  const clearAll = (e:any) => {
    props.clearRedux();
    setState({
      search:"",
      isSearching: false,
      timer:false
    });
  }

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setState({
      search:e.target.value,
      isSearching:false,
      timer:false
    });
  }
  useEffect(()=>{
    if(!props.name && state.isSearching && !state.timer){
      setTimeout(()=>{
        setState({
          timer:true,
          search: state.search,
          isSearching: state.isSearching
        });
      },10000);
    }
  });
  const doc = document.documentElement;

  const submitClick = (e:any) => {
    e.preventDefault();
    props.searchPokemon(state.search.trim().toLowerCase());
    setState(
      {search:"",
      isSearching: true,
      timer:false}
    );
  }

  return (
    <div className="App">
    <div className="app-child">
      <header>
        <h1>PokePlace</h1>
      </header>
      <main className={`main-container rounded ${doc.clientHeight > doc.scrollHeight ? "change-width":""}`}>
        {props.name && state.isSearching?
            <Pokemon/>
          : !props.name && state.isSearching  && state.timer ?
            <div className="failed-connect">
              <Spinner animation="border"/>
              <p>Seem's like you have connection problems or you have written the pokemon's name wrong!</p>
              <Button id="clear-button" onClick={clearAll} variant="success">Try Again!</Button>
            </div>
          : !props.name && state.isSearching && !state.timer ?
            
            <Spinner animation="border"/>
            
            
          :  <Search
              search={state.search}
              handleSearch={handleSearch}
              submit={submitClick}
            />
        }
      </main>
      <footer>
        <a href="https://github.com/aefuen1">&copy; Andres Fuentes</a>
      </footer>
    </div>
    </div>
  );
}


interface State{
    name:string
}

const mapStateToProps = (state:State) =>{
  return{
    name: state.name
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    searchPokemon: (search:string) => {
      dispatch(fetchPokemon(search));
    },
    clearRedux: () =>{
      dispatch(clear());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
