import React from "react";
import PropTypes from "prop-types";

function TableRow({data, handleRowData , selectedRow, setSelectedRow}) {
    // fix если один и тот же id выделяются все с таким айди возможно фикс с uuid вместо id
    return (
        <tr
            className={selectedRow === data.id ? "active" : null}
            onClick={() => { handleRowData(data); setSelectedRow(data.id) } }>
            <td className="table-body-cell">{data.id}</td>
            <td className="table-body-cell">{data.firstName}</td>
            <td className="table-body-cell">{data.lastName}</td>
            <td className="table-body-cell">{data.email}</td>
            <td className="table-body-cell">{data.phone}</td>
        </tr>
    )
}

TableRow.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }),
    showItem: PropTypes.func,
    selectedRow: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    setSelectedRow: PropTypes.func
};

export default TableRow;