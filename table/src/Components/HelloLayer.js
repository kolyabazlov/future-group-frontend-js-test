import React from "react";
import PropTypes from "prop-types";
import RowInfo from "./RowInfo";

function HelloLayer({ fetchUrl }) {

    const urlSmall = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    const urlBig = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

    return (
        <div className="hello-layer ui three column centered grid stackable">
            <div className="ui segment">
                <h3 className="ui header">Выберите размер данных</h3>
                <div className="ui column">
                    <div className="ui large buttons">
                        <button className="ui blue button" onClick={() => { fetchUrl(urlSmall) } }>Маленький</button>
                        <div className="or"/>
                        <button className="ui teal button" onClick={() => { fetchUrl(urlBig) } }>Большой</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

RowInfo.propTypes = {
    fetchUrl: PropTypes.func
};

export default HelloLayer;