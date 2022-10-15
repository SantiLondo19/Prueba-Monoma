import React from 'react'
import logo from '../../img/Grocasa.png';
import casa from '../../img/Rectangle -1@2x.png';
import inhodoro from '../../img/WEB_MATERIAL-09.svg'
import habitaciones from '../../img/WEB_MATERIAL-10.svg'
import espacio from '../../img/WEB_MATERIAL-11.svg'
import boton from '../../img/WEB_MATERIAL-07.svg'
import './home.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className='contenedor home'>
                <h1><img src={logo} alt="Icono" className='home__logo' /></h1>
                <div className='contenedor productos'>
                    <div className='productos__grid'>
                        <div className='producto'>
                            <img src={casa} alt="casa" className='producto__imagen' />
                            <h2 className='producto__titulo'>Ático Dúplex de Obra Nueva</h2>
                            <p className="producto__ubicacion">
                                Marianao, Sant Boi de Llobregat
                            </p>
                            <div className='informaciones'>
                                <div className='informacion'>
                                    <div className='casa'>
                                        <img className='casa__baño' src={espacio} alt="baños" />
                                        <p className='casa__cantidad'>102m^</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={habitaciones} alt="baños" />
                                        <p className='casa__cantidad'>3</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={inhodoro} alt="baños" />
                                        <p className='casa__cantidad'>2</p>
                                    </div>
                                    
                                </div>
                                <div className='informaciones__precios'>
                                    <p className='informaciones__precio'>330.000€</p>
                                </div>
                                <div className='informaciones__mas'>
                                    <Link to="/info"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='productos__grid'>
                        <div className='producto'>
                            <img src={casa} alt="casa" className='producto__imagen' />
                            <h2 className='producto__titulo'>Ático Dúplex de Obra Nueva</h2>
                            <p className="producto__ubicacion">
                                Marianao, Sant Boi de Llobregat
                            </p>
                            <div className='informaciones'>
                                <div className='informacion'>
                                    <div className='casa'>
                                        <img className='casa__baño' src={espacio} alt="baños" />
                                        <p className='casa__cantidad'>102m^</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={habitaciones} alt="baños" />
                                        <p className='casa__cantidad'>3</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={inhodoro} alt="baños" />
                                        <p className='casa__cantidad'>2</p>
                                    </div>
                                    
                                </div>
                                <div className='informaciones__precios'>
                                    <p className='informaciones__precio'>330.000€</p>
                                </div>
                                <div className='informaciones__mas'>
                                    <Link to="/info"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='productos__grid'>
                        <div className='producto'>
                            <img src={casa} alt="casa" className='producto__imagen' />
                            <h2 className='producto__titulo'>Ático Dúplex de Obra Nueva</h2>
                            <p className="producto__ubicacion">
                                Marianao, Sant Boi de Llobregat
                            </p>
                            <div className='informaciones'>
                                <div className='informacion'>
                                    <div className='casa'>
                                        <img className='casa__baño' src={espacio} alt="baños" />
                                        <p className='casa__cantidad'>102m^</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={habitaciones} alt="baños" />
                                        <p className='casa__cantidad'>3</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={inhodoro} alt="baños" />
                                        <p className='casa__cantidad'>2</p>
                                    </div>
                                    
                                </div>
                                <div className='informaciones__precios'>
                                    <p className='informaciones__precio'>330.000€</p>
                                </div>
                                <div className='informaciones__mas'>
                                    <Link to="/info"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='productos__grid'>
                        <div className='producto'>
                            <img src={casa} alt="casa" className='producto__imagen' />
                            <h2 className='producto__titulo'>Ático Dúplex de Obra Nueva</h2>
                            <p className="producto__ubicacion">
                                Marianao, Sant Boi de Llobregat
                            </p>
                            <div className='informaciones'>
                                <div className='informacion'>
                                    <div className='casa'>
                                        <img className='casa__baño' src={espacio} alt="baños" />
                                        <p className='casa__cantidad'>102m^</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={habitaciones} alt="baños" />
                                        <p className='casa__cantidad'>3</p>
                                    </div>
                                    <div className='casa'>
                                        <img className='casa__baño' src={inhodoro} alt="baños" />
                                        <p className='casa__cantidad'>2</p>
                                    </div>
                                    
                                </div>
                                <div className='informaciones__precios'>
                                    <p className='informaciones__precio'>330.000€</p>
                                </div>
                                <div className='informaciones__mas'>
                                    <Link to="/info"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
