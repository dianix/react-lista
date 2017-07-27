import React from 'react';
import OpcionMenu from "./OpcionMenu.jsx"

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <OpcionMenu textoItem="opcion 1"/> 
                    <OpcionMenu textoItem="opcion 2"/> 
                    <OpcionMenu textoItem="opcion 3"/> 
                    <OpcionMenu textoItem="opcion 4"/> 
                </ul>
            </nav>
        )
    };
};
