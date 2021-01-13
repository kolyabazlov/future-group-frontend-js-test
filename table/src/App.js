import React, { useState, useEffect } from 'react';
import TableRow from "./Components/TableRow";
import TableHead from "./Components/TableHead";
import TablePaginationNum from "./Components/TablePaginationNum";
import TableForm from "./Components/TableForm";
import TableRowInfo from "./Components/TableRowInfo";

function App() {

    const rowsPerPage = 6;
    const url = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [isRowInfo, setIsRowInfo] = useState(false);
    const [isAddItem, setIsAddItem] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pagesArray, setPagesArray] = useState([]);
    const [filter, setFilter] = useState("");
    const [itemInfo, setItemInfo] = useState("smth");
    const [sortDir, setSortDir] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    countPages(result.length)
                    },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    useEffect(() => {
        setPagesArray([]);
        for (let i = 1; i <= Math.ceil( items.length / rowsPerPage); i++) {
            setPagesArray(pagesArray => [...pagesArray, i]);
        }
    },[items]);
    function sortItems(key) {

        let data = [].concat(items.sort(compare));
        setItems(data);
        console.log("data was sorted");
        console.log(sortDir);

        function compare(a, b) {
            const obj1 = typeof(a[key]) === "number" ? a[key] : a[key].toUpperCase();
            const obj2 = typeof(b[key]) === "number" ? b[key] : b[key].toUpperCase();

            if (obj1 < obj2) {
                return sortDir ? -1 : 1
            }
            if (obj1 > obj2) {
                return sortDir ? 1 : -1
            }
            return 0
        }

    }
    function showItem(data) {
        setItemInfo(data);
    }
    function addItems(data) {
        setItems([data, ...items]);
    }
    function countPages(length) {
        setTotalPages(Math.ceil( length / rowsPerPage));
        for (let i = 1; i <= totalPages; i++) {
            setPagesArray(pagesArray => [...pagesArray, i]);
        }
    }
    function filterData() {
        setItems(items.filter((item) => {
            let includesId = item.id.toString().includes(filter);
            let includesFirstName = item.firstName.toLowerCase().includes(filter);
            let includesLastName = item.lastName.toLowerCase().includes(filter);
            let includesEmail = item.email.toLowerCase().includes(filter);
            let includesPhone = item.phone.toString().includes(filter);
            return (includesId ||includesFirstName || includesLastName || includesEmail || includesPhone)
        }));
    }

        return (
            <div className="ui container">
                <div className="ui attached top segment">
                    <div className="ui action input">
                        <input
                            placeholder="Anything..."
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                        />
                        <button
                            className="ui primary button"
                            type="button"
                            onClick={() => {filterData()}}>
                            Filter
                        </button>
                    </div>
                    <button
                        className="ui primary button right floated"
                        type="submit"
                        onClick={() => {setIsAddItem(!isAddItem)}}>
                        Add user
                    </button>
                </div>
                <table className="ui attached selectable celled table">
                    <TableHead sortItems={sortItems} sortDir={sortDir} setSortDir={setSortDir}/>
                    <tbody className={ !isLoaded ? "ui loading segment" : null}>
                        {
                            items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => {
                                return (
                                    <TableRow key={index} data={data} setIsRowInfo={setIsRowInfo} showItem={showItem} isRowInfo={isRowInfo}/>
                                )
                            })
                        }
                    </tbody>
                    <tfoot className="table-pagination">
                        <tr>
                            <th colSpan="5">
                                <div className="ui right floated pagination mini menu">
                                    <a className="icon item">
                                        <i className="left chevron icon"></i>
                                    </a>
                                    {
                                        pagesArray.map((a, index) => {
                                            return <TablePaginationNum key={index} value={index} page={page} setPage={setPage}/>
                                        })
                                    }
                                    <a className="icon item">
                                        <i className="right chevron icon"></i>
                                    </a>
                                </div>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                { isRowInfo ? <TableRowInfo itemInfo={itemInfo}/> : null }
                { isAddItem ? <TableForm addItems={addItems} /> : null }
            </div>
        );

}

export default App;
