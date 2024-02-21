import React from "react";
import Header from "../../components/Header/Header";
import backImg from '../../assets/backIcon.png'
import './FindLocation.scss'
import { useEffect,useState } from "react";
import { useNavigate  } from "react-router-dom";

const {kakao} = window;

const FindLocation = () => {

    const navigator = useNavigate();

    const [lat,setLat] = useState();
    const [lng,setLng] = useState("");
    const [address, setAddress] = useState("");
    const [map, setMaps] = useState();
    const [markers,setMarker] = useState();

    const onHandleClick = () =>{
        localStorage.setItem('address',address);
        navigator(-1);
    }


    useEffect(()=>{
        const container = document.getElementById('mapWrapper');
        const options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        const map = new kakao.maps.Map(container, options);
        setMaps(map);
        }, [])

        useEffect(()=>{
            if(map){
                window.kakao.maps.event.addListener(map, 'click' ,function(mouseEvent){
                    const latLng = mouseEvent.latLng;
    
                    if(markers){
                        markers.setMap(null);
                    }
                    else{
                        const marker = new window.kakao.maps.Marker({
                            position : latLng
                        });         
                        marker.setMap(map);
                        setMarker(marker);    
                    }
    
                    setLat(latLng.Ma); 
                    setLng(latLng.La);
 
                    const geocoder = new kakao.maps.services.Geocoder(); 
                    geocoder.coord2Address(latLng.La,latLng.Ma,(result,status)=>{
                            if(status===window.kakao.maps.services.Status.OK){
                                const newaddr = !!result[0].road_address
                                ? result[0].road_address.address_name
                                : result[0].address.address_name;
                                setAddress(newaddr);
                            }
                        }
                    )
                });
            }
        },[map,markers]);
    
    return (
        <div className="findLocation">
            <Header
                headleft={<button className = "addLeftBtn" > <img src={backImg}/></button>
                }
                headcenter={"직거래 장소 찾기"}
            />

            <div id="mapWrapper">{}
            </div>

            <div className="locationWrapper">
                {address}

            </div>
            <button className="mapSubmit" onClick={onHandleClick}>완료</button>
        </div>
    );
};
export default FindLocation;