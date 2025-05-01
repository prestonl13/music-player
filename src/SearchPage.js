import React from "react";
import Nav from "./nav.js";
import "./App.css";
import SearchBar from "./SearchBar.js";
import { useState, useEffect } from 'react';
import { Lyrics } from "./Lyrics";
import 'bootstrap/dist/css/bootsrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

const CLIENT_ID = "47ef3fc70556414cbd1f57a5739af05b";
const CLIENT_SECRET = "9a4e7399b80743458e8dd83a374ba2e2";

function SearchPage() {

    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
    }, [])

    // Searchbar
    async function search() {
        console.log("Search for " + searchInput);

    var searchParameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id })

        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&Limit=50')
            .then(response => response.json())
            .then(data => {setAlbums(data.items);
            });

    }

    return(
        <div>
            <Nav />

            <Container>
                <InputGroup>
                    <FormControl
                        placeholder="Search For Artist"
                        type = "input"
                        onKeyPress = {event => {
                            if (event.key == "Enter") {
                                search();
                            }
                        }}
                        onChange = {event => setSearchInput(event.target.value)}
                    />
                    <Button onClick = {() => {console.long("clicked")}}>
                        search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <Row>
                    {albums.map( (album, i) => {
                        return(
                            <Card>
                                <Card.Img src = {album.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{album.name} </Card.Title>
                                </Card.Body>
                             </Card>
                        )
                    })}
                    
                </Row>
            </Container>

            <Lyrics />
        </div>
    );
}

export default SearchPage;

