import { shallow } from 'enzyme'
import Navbar from '../components/Navbar'
import Login from '../components/pages/Login'
import Cards from '../components/Cards'
import App from '../App'
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react'
import { createMemoryHistory } from "history";




//Pruebas Navbar  Link Propiedad to 
describe('Pruebas sobre el componente Navbar',()=>{
  test('Navbar incluye enlace a /', () => {                                       
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link).at(0).props().to).toBe('/');
   });

   test('Navbar incluye enlace a /eventos', () => {                                       
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link).at(1).props().to).toBe('/eventos');
   });

   test('Navbar incluye enlace a /login', () => {                                       
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link).at(2).props().to).toBe('/login');
   });

   test('Navbar incluye enlace a /register', () => {                                       
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link).at(3).props().to).toBe('/register');
   });

   test('Navbar incluye enlace a / en logo', () => {                                       
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('a').props().href).toBe('/');
   });  
  })

 