import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

function Pagination({ setCurrentPage, currentPage, totalPages }) {

    const [pages, setPages] = useState([]);

    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    function range(from, to, step = 1) {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range
    }

    useEffect(() => {
        setPages(fetchPageNumbers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[totalPages, currentPage]);

    function fetchPageNumbers() {
        if (totalPages > 7) {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            let pages = range(startPage, endPage);

            const hasRightSpill = (totalPages - endPage) > 1;
            const hasLeftSpill= startPage > 2;
            const spillOffset = 5 - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    }

    return (
        <tr>
            <th colSpan="5">
                <div className="ui right floated pagination mini menu">
                    {
                        pages.map((page, index) => {
                            if (page === LEFT_PAGE) return (
                                <div
                                    key={index}
                                    className="icon item"
                                    onClick={ () => {
                                        if (currentPage <= 5) {
                                            setCurrentPage(1)
                                        } else {
                                            setCurrentPage(currentPage - 5)
                                        }
                                    } }
                                >
                                    <i className="angle double left icon" />
                                </div>
                            );
                            if (page === RIGHT_PAGE) return (
                                <div
                                    key={index}
                                    className="icon item"
                                    onClick={ () => {
                                        if (currentPage >= totalPages - 5) {
                                            setCurrentPage(totalPages)
                                        } else {
                                            setCurrentPage(currentPage + 5)
                                        }
                                    } }
                                >
                                    <i className="angle double right icon" />
                                </div>
                            );
                            return (
                                <div
                                    key={index}
                                    className={clsx("item", page === currentPage ? "active" : null)}
                                    onClick={ () => { setCurrentPage(page) } }
                                >
                                    { page }
                                </div>
                            )
                        })
                    }
                </div>
            </th>
        </tr>
    )
}

Pagination.propTypes = {
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number
};

export default Pagination;