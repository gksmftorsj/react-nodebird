import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import {
  Overlay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
  Global,
} from "./styles";

import { backURL } from "../../config/config";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            // 시작순서
            initialSlide={0}
            // 페이지 넘기면 현재 슬라이드 번호를 제공해주는걸 currentSlide에 저장하기
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            // 무조건 손으로만 넘기게 화살표 지우기
            arrows={false}
            // 하나에 한 개만 보이고
            slidesToShow={1}
            // 하나에 한 개만 넘기게
            slidesToScroll={1}
          >
            {/* 이미지 반복문 돌리면 Slick이 알아서 캐러셀로 만들어줌 */}
            {images.map((v) => (
              <ImgWrapper key={`${v.src}`}>
                <img src={`${v.src}`} alt={`${v.src}`} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
