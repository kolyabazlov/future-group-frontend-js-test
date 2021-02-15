import React from "react";
import PropTypes from "prop-types";
import RowInfo from "./RowInfo";

function HelloLayer({ setUrl, setIsUrlSelected, urlSmall, urlBig }) {
    return (
        <div className="hello-layer ui three column centered grid stackable">
            <div className="ui segment">
                <h3 className="ui header">Выберите размер данных</h3>
                <div className="ui column">
                    <div className="ui large buttons">
                        <button className="ui blue button" onClick={() => { setUrl(urlSmall); setIsUrlSelected(true) } }>Маленький</button>
                        <div className="or"/>
                        <button className="ui teal button" onClick={() => { setUrl(urlBig); setIsUrlSelected(true) } }>Большой</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

RowInfo.propTypes = {
    setUrl: PropTypes.func,
    setIsUrlSelected: PropTypes.bool,
    urlSmall: PropTypes.string,
    urlBig: PropTypes.string
};

export default HelloLayer;