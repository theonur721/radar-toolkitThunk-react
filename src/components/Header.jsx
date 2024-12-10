import { useSelector } from "react-redux";

const Header = ()=> {
    const store = useSelector((store)=> store)
    return (
        <header>
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Wv_logo_proposal_flying_plane_wo_text.png" alt="" />
            <h2>Uçuş Radarı</h2>
            </div>

            <h4>
                {store.isLoading ? "Uçuşlar hesaplanıyor":
                `${store.flights.length} Uçuş bulundu`}
            </h4>
        </header>
    )
}

export default Header;