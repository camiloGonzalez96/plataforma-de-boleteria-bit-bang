import { shallow } from 'enzyme'
import Navbar from '../components/Navbar'
import Home from '../components/pages/Home'
import Eventos from '../components/pages/Eventos'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import App from '../App'
import {Link} from "react-router-dom";
import {Route } from "react-router-dom";



//Pruebas Componente Navbar Link Propiedadades 
describe('Pruebas sobre el componente Navbar',()=>{

  test('Navbar incluye enlace a / y texto = Inicio', () => {                                       
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find(Link).at(0).props().to).toBe('/')
    expect(wrapper.find(Link).at(0).text()).toBe('Inicio')
   });

   test('Navbar incluye enlace a /eventos texto=Eventos', () => {                                       
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find(Link).at(1).props().to).toBe('/eventos')
    expect(wrapper.find(Link).at(1).text()).toBe('Eventos')
   });

   test('Navbar incluye enlace a /login texto=Iniciar Sesión', () => {                                       
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find(Link).at(2).props().to).toBe('/login')
    expect(wrapper.find(Link).at(2).text()).toBe('Iniciar Sesión')
   });

   test('Navbar incluye enlace a /register texto=Regístrate', () => {                                       
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find(Link).at(3).props().to).toBe('/register')
    expect(wrapper.find(Link).at(3).text()).toBe('Regístrate')
   });

   test('Navbar incluye enlace a / en logo texto=Eventos Choclo', () => {                                       
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('a').props().href).toBe('/')
    expect(wrapper.find('a').text()).toBe('Eventos Choclo')
   });  
  })


  //Pruebas Componente App Route Propiedadades 
  describe('Pruebas sobre el componente App',()=>{

    test('Route Propiedad path = /  y component = Home',()=>{
      const wrapper = shallow(<App/>)   
      expect(wrapper.find(Route).at(0).props().path).toBe('/')
      expect(wrapper.find(Route).at(0).props().component).toBe(Home)
    })

    test('Route Propiedad path=/eventos y component =Eventos',()=>{
      const wrapper = shallow(<App/>)   
      expect(wrapper.find(Route).at(1).props().path).toBe('/eventos')
      expect(wrapper.find(Route).at(1).props().component).toBe(Eventos)
    })

    test('Route Propiedad path= /login y component=Login',()=>{
      const wrapper = shallow(<App/>)   
      expect(wrapper.find(Route).at(2).props().path).toBe('/login')
      expect(wrapper.find(Route).at(2).props().component).toBe(Login)
    })

    test('Route Propiedad path= /register y component=Register',()=>{
      const wrapper = shallow(<App/>)   
      expect(wrapper.find(Route).at(3).props().path).toBe('/register')
      expect(wrapper.find(Route).at(3).props().component).toBe(Register)
    })    

  })