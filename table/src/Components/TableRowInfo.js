import React from "react";

export default function TableRowInfo({itemInfo}) {
    return (
        <div className="ui attached info message">
            {console.log(itemInfo)}
            <i className="close icon"></i>
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