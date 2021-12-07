import React, { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";

interface IParams{
    name: string

    sprites: {
        front_default: string
    }
}

function App(){

    const [nome, setNome] = useState('')
    const [imgPokemon, setImgPokemon] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])

    function setData(params: IParams){
        setNome(params.name)
        setImgPokemon(params.sprites.front_default)
    }

    return(
        <>
            <CardPokemon
                nomePokemon = {nome}
                imgPokemon = {imgPokemon}
            />
        </>
    )
}

export default App;