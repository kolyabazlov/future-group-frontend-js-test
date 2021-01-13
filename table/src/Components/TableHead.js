import React, {useEffect, useState} from "react";
import clsx from "clsx";

export default function TableHead({sortItems, sortDir, setSortDir}) {

    //const [isDir, setIsDir] = useState(false);
    const [sortRouter, setSortRouter] = useState();

    return (
        <thead>
            <tr>
                <th
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