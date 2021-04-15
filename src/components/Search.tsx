import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import '../css/App.sass';

interface Props{
    search:string;
    handleSearch: (e:React.ChangeEvent<HTMLInputElement>) => void;
    submit:(e:any) => void;
}

const Search = (props:Props) => {
    return(
        <div className="search-container">
        <h2>Time to search for your pokemon!</h2>
        <Form inline className="d-flex flex-row justify-content-center align-items-center">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Search
            </Form.Label>
            <InputGroup className="w-50">
                <Form.Control onChange={props.handleSearch} value={props.search} className="rounded-0" id="inlineFormInputGroup" placeholder="Example: venusaur, charizard..." />
            </InputGroup>
            <Button onClick={props.submit} className="rounded-0" type="submit" variant="secondary"><FontAwesomeIcon icon={faSearch}/></Button>
        </Form>
        </div>
    );
}

export default Search;