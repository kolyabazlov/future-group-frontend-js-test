import React from "react";
import PropTypes from "prop-types";

function RowInfo({rowData, handleRowData}) {

    return (
        <div className="ui attached info message">
            <i className="close icon" onClick={ ()=> { handleRowData(false) } } />
            <p>Выбран пользователь: <strong>{ rowData.firstName + " " + rowData.lastName}</strong></p>
            <p>Адрес проживания: <strong>{ rowData.address.streetAddress }</strong></p>
            <p>Город: <strong>{ rowData.address.city }</strong></p>
            <p>Провинция/штат: <strong>{ rowData.address.state }</strong></p>
            <p>Индекс: <strong>{ rowData.address.zip }</strong></p>
            <p>Описание: <strong>{ rowData.description }</strong>
            </p>
        </div>
    )
}

RowInfo.propTypes = {
    rowData: PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            description: PropTypes.any,
            address: PropTypes.shape({
                    streetAddress: PropTypes.any,
                    city: PropTypes.any,
                    state: PropTypes.any,
                    zip: PropTypes.any
                }).isRequired
        }).isRequired,
    handleRowData: PropTypes.func
};
export default RowInfo;