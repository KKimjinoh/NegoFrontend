import Header from '../components/Header/Header';
import './AddItem.scss'
import backImg from '../assets/backIcon.png'
import { useState } from "react";

const AddItem = () => {

    let [modal,setModal] = useState(false);

    const onHandleClick = ()=>{
        return modal === true ? setModal(false) : setModal(true);
    };


    return (
        <div className="AddItem">

            <header>

            <Header
             headleft={<button className="addLeftBtn"><img src={backImg}/></button>}
             headcenter={"상품등록"}
             headright={<button className="add_RightBtn">등록</button>}/>
            </header>

            <button className="picture_Btn">

            </button>


            <section>
            <div className="inputdiv">
                <span>상품명</span>
                <input/>
                <span>카테고리</span>
                <input/>
                <span>상품상태</span>
                <input/>
                <span>#태그</span>
                <input/>
                <span>가격</span>
 
                <div className="checkboxA">
                    <label for="checkbox1">
                        <input type="checkbox" id="checkbox1"/> <span>가격 제안받기</span>
                    </label>
                </div>

                <div className="checkboxB">
                    <label for="checkbox2">
                        <input type="checkbox" id="checkbox2"/> <span>배송비포함</span>
                    </label>
                    <label for="checkbox3">
                        <input type="checkbox" id="checkbox3"/> <span>배송비별도</span>
                    </label>
                    <span id="inputgray">입력</span>
                </div>

                <div className="locationDiv">
                <label for="locationInput">
                    <span>지역</span><input type="text" id="locationInput" placeholder='직거래시 가능 지역'/>
                    </label>  
                    <div className="searchDiv">찾기</div>               
                </div>

                <span className="explanationSpan">상품 설명을 입력해 주세요.</span>
                <textarea
                    placeholder="40글자 이상 작성해주세요"></textarea>
 
            </div>

            </section>

            

            


        </div>
    );


}

export default AddItem;
