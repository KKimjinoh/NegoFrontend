import Header from '../../components/Header/Header';
import './AddItem.scss'
import backImg from '../../assets/backIcon.png'
import cameraImg from '../../assets/unSplash.png'
import {useEffect, useRef, useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddItem = () => {

    const upload = useRef();
    const navgate = useNavigate();

    const [imgFile, setImageFile] = useState([]);
    const [address, setAddress] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        state: '',
        tag: '',
        content: "",
        imgFile: [],
        priceReq: false,
        deliveryFee: '',
        address: ''
    });

    const onHandleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.checked;
        setFormData(prevData => ({
            ...prevData,
            priceReq: value
        }));
    }

    const onHandleSubmit = async () => {
        try {
            axios.put('/AddItem', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window
                .localStorage
                .clear();
        } catch (error) {
            console.error(error);
        }
    };

    const imageUpload = () => {
        const newImage = URL.createObjectURL(upload.current.files[0]); // url로 변경
        setImageFile([
            ...imgFile,
            newImage
        ]);

        setFormData(prevData => ({
            ...prevData,
            imgFile: imgFile
        }));
    }

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');

        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
            console.log("데이터 저장");
        }
        const address = localStorage.getItem('address');
        if (address) {
            setAddress(address);

            setFormData(prevData => ({
                ...prevData,
                address: address
            }));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <div className="AddItem">

            <header>

                <Header
                    headleft={<button className = "addLeftBtn" > <img src={backImg}/></button>}
                    headcenter={"상품등록"}
                    headright={<button className = "add_RightBtn" onClick = {
                        onHandleSubmit
                    } > 등록</button>
}/>
            </header>

            <div className='imgDiv'>

                <label htmlFor="file">
                    <div className="pictureDiv">
                        <img src={cameraImg}/>
                        <div className='imageLength'>{imgFile.length}/15</div>
                    </div>

                </label>
                <input
                    type='file'
                    id='file'
                    name='file'
                    onChange={imageUpload}
                    ref={upload}
                    accept='image/*'
                    multiple="multiple"/> {
                    formData
                        .imgFile
                        .map((it) => {
                            return (
                                <label>
                                    <img className='addImage' src={it}/>
                                </label>
                            );
                        })
                }

            </div>

            <section>
                <div className="inputdiv">
                    <span>상품명</span>
                    <input
                        type='text'
                        name='title'
                        onChange={onHandleChange}
                        value={formData.title}/>
                    <span>카테고리</span>
                    <input
                        type='text'
                        name='category'
                        onChange={onHandleChange}
                        value={formData.category}/>
                    <span>상품상태</span>
                    <input
                        type='text'
                        name='state'
                        onChange={onHandleChange}
                        value={formData.state}/>
                    <span>#태그</span>
                    <input type='text' name='tag' onChange={onHandleChange} value={formData.tag}/>
                    <span>가격</span>
                    <div className="checkboxA">
                        <label htmlFor="checkbox1">
                            <input
                                type="checkbox"
                                name='priceReq'
                                id="checkbox1"
                                onChange={handleCheckboxChange}
                                checked={formData.priceReq}/>
                            <span>가격 제안받기</span>
                        </label>
                    </div>

                    <div className="checkboxB">
                        <label htmlFor="checkbox2">
                            <input
                                type="radio"
                                name='deliveryFee'
                                id="checkbox2"
                                value={"include"}
                                checked={formData.deliveryFee === "include"}
                                onChange={onHandleChange}/>
                            <span>배송비포함</span>
                        </label>
                        <label htmlFor="checkbox3">
                            <input
                                type="radio"
                                name='deliveryFee'
                                id="checkbox3"
                                value={"sep"}
                                checked={formData.deliveryFee === "sep"}
                                onChange={onHandleChange}/>
                            <span>배송비별도</span>
                        </label>
                        <span id="inputgray">입력</span>
                    </div>

                    <div className="locationDiv">
                        <label htmlFor="locationInput">
                            <span>지역</span><input type="text" id="locationInput" placeholder='직거래시 가능 지역' value={address}/>
                        </label>
                        <div className="searchDiv" onClick={() => navgate('/additem/findlocation')}>찾기</div>
                    </div>

                    <span className="explanationSpan">상품 설명을 입력해 주세요.</span>
                    <textarea
                        name='content'
                        onChange={onHandleChange}
                        placeholder="40글자 이상 작성해주세요"
                        defaultValue={formData.content}></textarea>
                </div>

            </section>

        </div>
    );

}

export default AddItem;
