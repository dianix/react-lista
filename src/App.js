import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from "./componentes/Header.jsx";
import Lista from "./componentes/Lista.jsx";
import {Row,Col,Button,Icon,Navbar,NavItem} from 'react-materialize';

class App extends Component {   
    constructor(){
        super();
        this.state = {nuevoItemTexto:"",arregloItems:[]}
        this.manejarCambio = this.manejarCambio.bind(this);
        this.agregarItem = this.agregarItem.bind(this);
    }
    
    agregarItem(){
        this.state.arregloItems.push(this.state.nuevoItemTexto)
        this.setState({nuevoItemTexto:""})
    }
    
    manejarCambio(event){
        let inputValue = event.target.value;
        this.setState({nuevoItemTexto:inputValue});
    }    
    
    render() {
        return (
            <div className="App">
                <Navbar brand='logo' right>
                	<NavItem href='get-started.html'>Getting started</NavItem>
                	<NavItem href='components.html'>Components</NavItem>
                </Navbar>
               
                    <Row>                        
                        <Col s={12} m={4} offset="m4">
                            <input value={this.state.nuevoItemTexto} type="text" onChange={this.manejarCambio} />
                            <Button onClick={this.agregarItem} waves='light'>agregar <Icon right>send</Icon> </Button>
                        </Col>
                    </Row>
                
                <div className="contenedorListas">
                    <Lista tituloLista="Frutas" itemsLista={this.state.arregloItems} />
                </div> 
            
                <div className="App-footer">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>        
            </div>
        )
    }
}

export default App;
