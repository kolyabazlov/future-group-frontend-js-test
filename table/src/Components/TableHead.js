import React, {useState} from "react";
import PropTypes from "prop-types";

function TableHead({sortItems, sortDir, setSortDir}) {

    const [sortRouter, setSortRouter] = useState("");

    return (
        <thead>
            <tr>
                <th
                    className="two wide"
                    onClick={() => {
                        sortItems("id");
                        setSortRouter("id");
                        setSortDir(!sortDir)
                    }}>
                    id
                    { sortRouter === "id" && sortDir ? <i className="angle down icon"></i> : null}
                    { sortRouter === "id" && !sortDir ? <i className="angle up icon"></i> : null}
                </th>
                <th
                    className="three wide"
                    onClick={() => {
                        sortItems("firstName");
                        setSortRouter("firstName");
                        setSortDir(!sortDir)
                    }}>
                    firstName
                    { sortRouter === "firstName" && sortDir ? <i className="angle down icon"></i> : null}
                    { sortRouter === "firstName" && !sortDir ? <i className="angle up icon"></i> : null}
                </th>
                <th
                    className="three wide"
                    onClick={() => {
                        sortItems("lastName");
                        setSortRouter("lastName");
                        setSortDir(!sortDir);
                    }}>
                    lastName
                    { sortRouter === "lastName" && sortDir ? <i className="angle down icon"></i> : null}
                    { sortRouter === "lastName" && !sortDir ? <i className="angle up icon"></i> : null}
                </th>
                <th
                    className="four wide"
                    onClick={() => {
                        sortItems("email");
                        setSortRouter("email");
                        setSortDir(!sortDir);
                    }}>
                    email
                    { sortRouter === "email" && sortDir ? <i className="angle down icon"></i> : null}
                    { sortRouter === "email" && !sortDir ? <i className="angle up icon"></i> : null}
                </th>
                <th
                    className="four wide"
                    onClick={() => {
                        sortItems("phone");
                        setSortRouter("phone");
                        setSortDir(!sortDir);
                    }}>
                    phone
                    { sortRouter === "phone" && sortDir ? <i className="angle down icon"></i> : null}
                    { sortRouter === "phone" && !sortDir ? <i className="angle up icon"></i> : null}
                </th>
            </tr>
        </thead>
    )
}
TableHead.propTypes = {
    sortItems: PropTypes.func,
    sortDir: PropTypes.bool,
    setSortDir: PropTypes.func
};

export default TableHead;