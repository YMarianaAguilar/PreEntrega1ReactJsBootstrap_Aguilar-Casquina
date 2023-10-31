import React from 'react'
import "./home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">¡Bienvenidos a COSMETICA!</h1>
                <p className="lead">Aquí podrás encontrar productos de belleza y cuidado personal adecuados para todo tipo de piel y preferencia, además de grandes descuentos.</p>
                <hr className="my-4" />
                <p>Si desea un asesoramiento personalizado podés comunicarte con nosotros, estaremos encantados de atenderte.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Contacto</a>
            </div>
        </div>
    );
};

export default Home