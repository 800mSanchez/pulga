import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import './Header.css';


class Header extends React.Component {
    render(){
        return <header>
                 <h1 className="title">Pulga</h1>
               </header>
    }
}

export default Header;