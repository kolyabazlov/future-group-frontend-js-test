import React from "react";

export default function TableRowInfo({itemInfo, setSelectedRow}) {
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