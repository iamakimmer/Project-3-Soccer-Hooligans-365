import React from '../../node_modules/react';

const Header = (props) => {
    return (
        <header>
            {props.children}
        </header>
    );
};

export default Header;