import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clear } from '../actionCreators';

interface Props{
    clearRedux: () => void;
    name:string;
    id:number;
    height:number;
    weight:number;
    img:string;
    types:string[];
    stats: {name:string, value:number}[];
    abilities: string[];
}

const Pokemon:any = (props:Props) => {
    function jsUcfirst(string:string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function click(){
        props.clearRedux();
    }
    return(
        <section id="pokemon">
            <div className="d-flex flex-row justify-content-around align-items-center">
            <h2>{jsUcfirst(props.name)}</h2>
            <img className="w-25 img-fluid" src={props.img} alt={props.name} />
            </div>
            <Container fluid >
            {
                props.stats.map( (item,i) =>( 
                    <Row key={`key-${i}`}>
                        <Col sm={6}><h5>{jsUcfirst(item.name)}</h5></Col>
                        <Col sm={6}><p>{item.value}</p></Col>  
                    </Row>
                ))
            }
            </Container>
            <Button onClick={click} variant="success">Search Again!</Button>
        </section>
    );
}

interface State{
    name:string;
    id:number;
    height:number;
    weight:number;
    img:string;
    types:string[];
    stats: (string|number)[];
    abilities: string[];
}

const mapStateToProps = (state:State) =>{
    return{
        name:state.name,
        id:state.id,
        height:state.height,
        weight:state.weight,
        img:state.img,
        types:state.types,
        stats: state.stats,
        abilities: state.abilities
    };
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        clearRedux: () =>{
            dispatch(clear());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Pokemon);