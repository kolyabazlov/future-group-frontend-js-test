import React, { useState, useEffect, useCallback } from 'react';
import TableRow from "./Components/TableRow";
import TableHead from "./Components/TableHead";
import Pagination from "./Components/Pagination";
import AddUserForm from "./Components/AddUserForm";
import RowInfo from "./Components/RowInfo";

function App() {

    const rowsPerPage = 10;
    const url = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedRow, setSelectedRow] = useState(false);
    const [isAddUser, setIsAddUser] = useState(false);
    const [filter, setFilter] = useState("");
    const [rowData, setRowData] = useState(false);
    const [sortDir, setSortDir] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setFilteredItems(result);
                    setTotalPages(Math.ceil( result.length / rowsPerPage));
                    },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error)
                }
            );
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil( filteredItems.length / rowsPerPage));
    },[filteredItems, items]);
    function sortItems(key) {

        let data = [].concat(items.sort(compare));
        setFilteredItems(data);
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

    const handleRowData = useCallback((data) => {
        setRowData(data);
    }, []);

    function addItems(data) {
        setItems([data, ...items]);
    }
    function filterData() {
        setFilteredItems(items.filter((item) => {
            let includesId = item.id.toString().includes(filter);
            let includesFirstName = item.firstName.toLowerCase().includes(filter);
            let includesLastName = item.lastName.toLowerCase().includes(filter);
            let includesEmail = item.email.toLowerCase().includes(filter);
            let includesPhone = item.phone.toString().includes(filter);
            return (includesId ||includesFirstName || includesLastName || includesEmail || includesPhone)
        }));
        setCurrentPage(1);
    }



        return (
            <div className="ui container">
                <div className="ui attached top segment">
                    <div className="">
                        <div className="ui grid">
                            <div className="four wide computer five wide tablet ten wide mobile left floated column">
                                <div className="ui action input item fluid">
                                    <input
                                        placeholder="Anything..."
                                        value={filter}
                                        onChange={e => {setFilter(e.target.value)}}
                                    />
                                    <button
                                        className="ui green button"
                                        type="button"
                                        onClick={() => {filterData()}}>
                                        Filter
                                    </button>
                                </div>
                            </div>
                            <div className="four wide column right floated">
                                <button
                                    className="ui green button right floated"
                                    type="submit"
                                    onClick={() => {setIsAddUser(true)}}>
                                    Add user
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="ui green attached selectable celled table fixed stackable small">
                    <TableHead sortItems={sortItems} sortDir={sortDir} setSortDir={setSortDir}/>
                    { error !== null ? <div> {error.message} </div> : null }
                    <tbody className={ !isLoaded ? "ui loading segment" : null}>
                        {
                            filteredItems.slice((currentPage - 1) * rowsPerPage, (currentPage - 1) * rowsPerPage + rowsPerPage).map((data, index) => {
                                return (
                                    <TableRow key={index} data={data} handleRowData={handleRowData} setSelectedRow={setSelectedRow} selectedRow={selectedRow}/>
                                )
                            })
                        }
                    </tbody>
                    <tfoot className="table-pagination">
                        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
                    </tfoot>
                </table>
                { rowData !== false ? <RowInfo rowData={rowData} handleRowData={handleRowData} /> : null }
                { isAddUser ? <AddUserForm addItems={addItems} setIsAddUser={setIsAddUser} /> : null }
            </div>
        );

}

export default App;
