import React from 'react';

const LeagueLogo = (props) => {
    const imagepath = "images"+props.leagueSelect+".png";
    return(
        <div className="images">
            <img src={imagepath} alt="" />
        </div>
    );
}

export default LeagueLogo;