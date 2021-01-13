import React from "react";
import clsx from "clsx";

export default function TablePaginationNum({value, page, setPage}) {
    return (
            <a
                className={clsx(
                    "item",
                    page === value && "active"
                )}
                onClick={() => {setPage(value)}}>{value + 1}
            </a>
    )
}