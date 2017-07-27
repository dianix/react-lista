import React from 'react';
import ListaItem from "./ListaItem.jsx"

export default class Lista extends React.Component {
    render() {
        var arregloItemsLista = this.props.itemsLista.map(
        (textoItemLista) => {
            return <ListaItem textoItem={textoItemLista}/>
        }) 
        
        return(
            <div>
                <h4>{this.props.tituloLista}</h4>
                <ul>
                    {arregloItemsLista}
                </ul> 
            </div>
        )
    };
};
