import React from "react";

interface IProps {
    nomePokemon: string;
    imgPokemon: string;
}

function CardPokemon(props: IProps){
    return(
        <>
            <img src={props.imgPokemon} alt="" />
            <p>{props.nomePokemon}</p>
        </>
    )
}

export default CardPokemon;