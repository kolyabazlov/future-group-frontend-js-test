import React from "react";
import PropTypes from "prop-types";

function RowInfo({itemInfo, setSelectedRow}) {

    return (
        <div className="ui attached info message">
            <i className="close icon" onClick={ ()=> { setSelectedRow(false) } } />
            <p>Выбран пользователь: <strong>{ itemInfo.firstName + " " + itemInfo.lastName}</strong></p>
            <p>Адрес проживания: <strong>{ itemInfo.address.streetAddress }</strong></p>
            <p>Город: <strong>{ itemInfo.address.city }</strong></p>
            <p>Провинция/штат: <strong>{ itemInfo.address.state }</strong></p>
            <p>Индекс: <strong>{ itemInfo.address.zip }</strong></p>
            <p>Описание: <strong>{ itemInfo.description }</strong>
            </p>
        </div>
    )
}

RowInfo.propTypes = {
    itemInfo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            description: PropTypes.any,
            address: PropTypes.shape({
                    streetAddress: PropTypes.any.isRequired,
                    city: PropTypes.any.isRequired,
                    state: PropTypes.any.isRequired,
                    zip: PropTypes.any.isRequired
                }).isRequired
        }).isRequired,
    setSelectedRow: PropTypes.func
};
export default RowInfo;