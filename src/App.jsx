import { useEffect, useState } from "react"
import MapView from './pages/MapView';
import ListView from "./pages/ListView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import SideDetail from "./components/SideDetail";


function App() {

  const [showMapView,setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  // uçuşları getirir
  useEffect(()=>{
    dispatch(getFlights());
  },[]);

  // haritayı açar detayları gösterilecek uçağın id sini alır
  const openDetail = (id)=> {
    // detayları gösterilecek uçağın id'sini alır
    setDetailId(id);
    // haritayı açar
    setShowDetail(true);
  };

  return (
    <>
    <Header />
    {/* yan detay alanı*/}
    { showDetail && <SideDetail detailId={detailId} setShowDetail={setShowDetail} />}

    <div className="view-buttons">
      <button
      className={showMapView ? "active" :""}
      onClick={()=> setShowMapView(true)}>MAP View</button>
      
      <button
      className={!showMapView ? "active" :""}
      onClick={()=> setShowMapView(false)} >LIST View</button>
    </div>
    {showMapView ?
    <MapView openDetail={openDetail} setShowDetail={setShowDetail} /> : 
    <ListView openDetail={openDetail} setShowDetail={setShowDetail} /> }
    </>
  );
}

export default App;
