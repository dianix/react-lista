import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from "./componentes/Header.jsx";
import Lista from "./componentes/Lista.jsx";
import {Row,Col,Button,Icon,Navbar,NavItem,CardPanel} from 'react-materialize';

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
                <Navbar brand='antilogo' left fixed>
                	<NavItem href='get-started.html'>nosotros<Icon right>people</Icon></NavItem>
                	<NavItem href='components.html'>contacto<Icon right>person_pin</Icon></NavItem>
                </Navbar>
               
                    <Row>                        
                        <Col s={12} m={4} offset="m4">
                            <input value={this.state.nuevoItemTexto} type="text" onChange={this.manejarCambio} />
                            <Button onClick={this.agregarItem} waves='light'>agregar <Icon right>send</Icon> </Button>
                        </Col>
                    </Row>
                <Row>                        
                    <Col s={12} m={6} offset="m3">
                <CardPanel className="left-align">
                    <Lista tituloLista="Frutas" itemsLista={this.state.arregloItems} />
                </CardPanel>
                    </Col>
                </Row>                        
            
                <div className="App-footer">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>        
            </div>
        )
    }
}

export default App;
