import React from "react";

export default function TableRow({data, setIsRowInfo, isRowInfo, showItem}) {
    return (
        <tr onClick={() => {setIsRowInfo(!isRowInfo); showItem(data)}}>
            <td className="table-body-cell">{data.id}</td>
            <td className="table-body-cell">{data.firstName}</td>
            <td className="table-body-cell">{data.lastName}</td>
            <td className="table-body-cell">{data.email}</td>
            <td className="table-body-cell">{data.phone}</td>
        </tr>
    )
}