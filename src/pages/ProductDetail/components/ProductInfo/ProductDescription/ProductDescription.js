import React, { Component } from 'react';
import './ProductDescription.scss';

class ProductDescription extends Component {
  render() {
    return (
      <div className="productDescription">
        <span className="name header">GAIAC FLOWER TRAVEL</span>
        <span className="capacity header">100ML</span>
        <span className="collection header">Travel Body Lotion</span>
        <div className="detail">
          {/* 데이터를 받아서 map 돌릴 요소 */}
          <p>
            천연 식물 유래 성분 95%로 이루어진 깨끗한 장미 향의 베지터블
            솝입니다.
          </p>
          <p>
            조밀하고 풍성한 거품이 산뜻하면서 뽀드득한 세정감을 남기고, 강한
            보습력을 지닌 히알루론산과 라이스 오일, 코코넛 오일이 건조한 피부에
            수분과 영양을 동시에 더합니다.
          </p>
          <p>
            젖은 손으로 풍성하게 거품을 낸 뒤 손과 바디 피부를 마사지하듯
            문지르고, 물로 충분히 헹구어 주세요.
          </p>
        </div>
        <div className="etc">
          {/* 데이터를 받아서 map 돌릴 요소 */}
          <p>
            * 선물용으로 구매하시는 분들을 위해 쇼핑백을 별도 판매하고 있습니다.
            ACC 메뉴에서 구매하실 수 있습니다.
          </p>
          <p>
            * 회원가입 시 3,000원 쿠폰 즉시 지급 (비회원 구매 시 혜택 적용이
            어려운 점 참고 부탁드립니다.)
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
