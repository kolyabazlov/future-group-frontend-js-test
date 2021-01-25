import React from "react";

export default function TableRow({data, setIsRowInfo, showItem , selectedRow, setSelectedRow}) {
    // fix если один и тот же id выделяются все с таким айди возможно фикс с uuid вместо id
    return (
        <tr
            className={selectedRow === data.id ? "active" : null}
            onClick={() => { setIsRowInfo(true); showItem(data); setSelectedRow(data.id) } }>
            <td className="table-body-cell">{data.id}</td>
            <td className="table-body-cell">{data.firstName}</td>
            <td className="table-body-cell">{data.lastName}</td>
            <td className="table-body-cell">{data.email}</td>
            <td className="table-body-cell">{data.phone}</td>
        </tr>
    )
}