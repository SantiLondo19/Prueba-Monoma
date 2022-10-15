import { Link } from 'react-router-dom';

import logo from '../../img/Grocasa.png';
import flecha from '../../img/ICON_ARROW-05.svg';
import './nav.scss';

export const Nav = () => {
  return (
      <>
          <div className='informacion-nav'>
              <nav className='informacion-nav__nav'>
                  <Link to='/'><img src={flecha} alt="flecha atras" className='informacion-nav__atras' /></Link>
                  <img src={logo} alt="logo grocasa" className='informacion-nav__grocasa' />
              </nav>
          </div>
      </>
  )
}
