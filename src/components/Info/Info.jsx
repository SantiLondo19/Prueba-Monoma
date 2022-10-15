import { Nav } from "./Nav"
import { Slider } from "./Slider"
import inhodoro from '../../img/WEB_MATERIAL-09.svg'
import habitaciones from '../../img/WEB_MATERIAL-10.svg'
import espacio from '../../img/WEB_MATERIAL-11.svg'
import corazon from '../../img/WEB_MATERIAL-08.svg'
import corazonlleno from '../../img/WEB_MATERIAL-06.svg'
import mapa from '../../img/Screenshot 2020-07-06 at 11.53.49@2x.png'
import './info.scss';
import boton from '../../img/WEB_MATERIAL-07.svg'
import casa from '../../img/Rectangle -1@2x.png';

import { useState } from "react"
import { Link } from "react-router-dom"

export const Info = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <div>
                <Nav />
            </div>
            <div>
                <Slider />
            </div>
            <div className="contenedor informacion-casa">
                <div className='producto'>
                    <h2 className='producto__titulo'>Ático Dúplex de Obra Nueva</h2>
                    <p className="producto__ubicacion">
                        Marianao, Sant Boi de Llobregat
                    </p>
                    <p className="producto__descripcion">
                        Dúplex de obra seminueva en Marianao. Finca
                        del 2019. El piso consta de una planta con
                        entrada al salón y final en terraza. El salón da
                        entrada a la cocina y al pasillo que distribuye
                        una de las habitaciones dobles y uno de los
                        cuartos. de baño de tres piezas..
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
                            <div>
                                <p className='informaciones__precio--naranjado'>330.000€</p>
                                <p className="informaciones__referencia">Ref. 407499</p>
                            </div>
                            <button className="informaciones__boton" onClick={handleClick}>
                                {/* Si esta en falso el estado poner el corazon y si esta en true poner corazon lleno */}
                                {
                                    show ? <img className='informaciones__corazon' src={corazonlleno} alt="corazon" /> : <img className='informaciones__corazon' src={corazon} alt="corazon" />
                                }
                            </button>

                        </div>
                    </div>
                    <div className="caracteristicas-flex">
                        <div className="caracteristicas">
                            <h2 className="caracteristicas__titulo">Características</h2>
                            <ul className="caracteristicas__lista">
                                <li>Ático102 m2 (construidos)</li>
                                <li>3 Habitaciones</li>
                                <li>Segunda mano100 m2 (útiles)</li>
                                <li>Reformado</li>
                                <li>2 Baños</li>
                            </ul>
                        </div>
                        <div className="extras">
                            <h2 className="extras__titulo">Extras</h2>
                            <ul className="extras__lista">
                                <li>Terraza</li>
                                <li>Balcón</li>
                                <li>Ascensor</li>
                                <li>Calefacción</li>
                                <li>Aire acondicionado</li>
                            </ul>
                        </div>
                    </div>

                    <img className="mapa" src={mapa} alt="mapa" />
                    <h3 className="footer-title">También pueden interesarte</h3>
                    <div className="footer">
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
                                    <Link to="/"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
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
                                    <Link to="/"><img src={boton} alt="boton" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="footer__texto">© 2022 Prueba Front end. Todos los derechos reservados. Autor: Santiago Echavarria Londoño</p>
                </div>
            </div>
        </>
    )
}
