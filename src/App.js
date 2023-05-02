import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './pages/loginUser/Login';
import Register from './pages/registerUser/Register';
import Track from './pages/track-delivery/Track'
import TrackDelivery from './pages/track-delivery/Delivery';
import Payment from './pages/payment/PaymentScreen'
import Checkout from './pages/payment/PaymentCheckout'
import MapPage from './pages/track-delivery/MapPage';
import Home from './pages/home/Home.js'
import EntranceScreen from './components/loadingInicio/loadingInicio'; // Importe o componente EntranceScreen
import jwt_decode from "jwt-decode";
import Navbar from '../src/components/navbar/NavBar';



function App() {
  const [isLoading, setIsLoading] = useState(true); // Adicione o estado isLoading para controlar a exibição da tela de entrada

  function getUserRole() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    return decoded.Role;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        // Renderize a tela de entrada enquanto isLoading for verdadeiro
        <EntranceScreen />
      ) : (

        // Renderize o conteúdo do aplicativo depois que a animação de entrada terminar
        <Router>
          <Navbar role={getUserRole()} />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/trackScreen" component={Track} />
            <Route path="/delivery" component={TrackDelivery} />
            <Route path="/mapa" component={MapPage} />
            <Route path="/paymentScreen" component={Payment} />
            <Route path="/paymentCheckout" component={Checkout} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
