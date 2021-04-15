import React, {useState} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clear, fetchPokemon } from './actionCreators';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import "./css/App.sass";


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

  const clearAll = () => {
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
  const passingProps = {
    clearAll
  }
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
      <main className={`main-container rounded`}>
        {props.name && state.isSearching?
            <Pokemon {...passingProps}/>
          : !props.name && state.isSearching ?
            <div className="failed-connect">
              <Spinner animation="border"/>
              <p>If this take to long you might have no internet or wrongly written pokemon's name!</p>
              <Button id="clear-button" onClick={clearAll} variant="success">Try Again!</Button>
            </div>
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
