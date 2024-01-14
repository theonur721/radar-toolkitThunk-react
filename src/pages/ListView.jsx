import { useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const ListView = ()=> {
    const store = useSelector((store)=>store);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10;

    // sayfalama değerleri
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = store?.flights.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

    // sayfalara tıklanınca çalışır
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
        setItemOffset(newOffset);
      };

    return (
        <div>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Kuyruk Kodu</th>
                        <th>Enlem</th>
                        <th>Boylam</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems && currentItems.slice(0, 6).map((fly)=>(
                        <tr>
                            <td>{fly.id}</td>
                            <td>{fly.code}</td>
                            <td>{fly.lat}</td>
                            <td>{fly.lng}</td>
                            <td><button>Detay</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
            breakLabel="..."
            nextLabel="İLERİ >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< GERİ"
            renderOnZeroPageCount={null}
            className="pagination"
            activeClassName="active"
            />
        </div>
    )
}

export default ListView;