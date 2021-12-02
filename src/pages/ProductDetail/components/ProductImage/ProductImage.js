import React, { Component } from 'react';
import './ProductImage.scss';

const IMAGE_WIDTH = 550;
const MIN_GAP = IMAGE_WIDTH * 0.1; // 1/10 만큼 이동하면 다음 이미지로

export default class ProductImage extends Component {
  constructor() {
    super();
    this.state = {
      focusIdx: 0,
    };
    // 드래그 관련 Ref
    this.isDragStart = React.createRef();
    this.isDragStart.current = false;
    this.isDraging = React.createRef();
    this.isDraging.current = false;
    this.dragPosRef = React.createRef();
    this.dragPosRef.current = {
      originPosX: 0,
      startPosX: 0,
    };
    this.imgDomRef = React.createRef();
  }

  posToTranslateX = value => `translateX(${value}px)`;

  dragStart = e => {
    e.preventDefault();
    if (!this.isDragStart.current && !this.isDraging.current) {
      const { offsetX: endPosX } = e.nativeEvent;
      this.isDragStart.current = true;
      this.dragPosRef.current.startPosX = endPosX;
    }
  };

  dragMove = e => {
    this.isDragStart.current && this.changeImagePos(e);
  };

  dragEnd = (e, maxPos) => {
    if (this.isDragStart.current) {
      const { originPosX, startPosX } = this.dragPosRef.current;
      const { offsetX: endPosX } = e.nativeEvent;
      const gap = endPosX - startPosX;
      this.isDragStart.current = false;

      const limitToLeft = MIN_GAP <= gap && originPosX !== 0;
      const limitToRight =
        gap <= -MIN_GAP && originPosX !== -(maxPos - IMAGE_WIDTH);

      if (limitToLeft || limitToRight) {
        gap > 0
          ? this.changeImagePos(e, IMAGE_WIDTH)
          : this.changeImagePos(e, -IMAGE_WIDTH);
      } else {
        this.resetImagePos(originPosX);
      }
    }
    this.changeFocusIdx();
  };

  focusOut = () => {
    const { originPosX } = this.dragPosRef.current;
    this.isDragStart.current = false;
    this.resetImagePos(originPosX);
  };

  changeImagePos = (e, movement = 0) => {
    const { startPosX } = this.dragPosRef.current;
    const { offsetX: nextPosX } = e.nativeEvent;
    const { originPosX } = this.dragPosRef.current;
    this.isDraging.current = true;

    const finalPosX = originPosX + movement;
    this.dragPosRef.current.originPosX = finalPosX;
    this.imgDomRef.current.style.transform = movement
      ? this.posToTranslateX(finalPosX)
      : this.posToTranslateX(finalPosX + (nextPosX - startPosX));

    setTimeout(() => (this.isDraging.current = false), 500);
  };

  resetImagePos = originPosX =>
    (this.imgDomRef.current.style.transform = this.posToTranslateX(originPosX));

  changeFocusIdx = () =>
    this.setState({
      focusIdx: -this.dragPosRef.current.originPosX / IMAGE_WIDTH,
    });

  imageListClick = idx => {
    this.dragPosRef.current.originPosX = -(IMAGE_WIDTH * idx);
    this.imgDomRef.current.style.transform = `translateX(${this.dragPosRef.current.originPosX}px)`;
    this.changeFocusIdx();
  };

  render() {
    const { imageList } = this.props;
    const maxPos = IMAGE_WIDTH * imageList.length;

    return (
      <section className="productImages">
        <div className="slide">
          <i
            className="fas fa-chevron-left arrow"
            onClick={e => {
              this.dragPosRef.current.originPosX &&
                this.changeImagePos(e, IMAGE_WIDTH);
              this.changeFocusIdx();
            }}
          ></i>
          <div
            className="imagesWrapper"
            onMouseDown={this.dragStart}
            onMouseMove={this.dragMove}
            onMouseUp={e => this.dragEnd(e, maxPos)}
            onMouseLeave={this.focusOut}
          >
            <div
              className={`imageContainer`}
              ref={this.imgDomRef}
              style={{
                width: `${maxPos}px`,
              }}
            >
              {imageList.map((image, idx) => {
                return <img src={image} key={idx} alt="temp1" />;
              })}
            </div>
          </div>
          <i
            className="fas fa-chevron-right arrow"
            onClick={e => {
              this.dragPosRef.current.originPosX !== -(maxPos - IMAGE_WIDTH) &&
                this.changeImagePos(e, -IMAGE_WIDTH);
              this.changeFocusIdx();
            }}
          ></i>
        </div>
        <div className="list">
          {imageList.map((image, idx) => {
            return (
              <img
                src={image}
                key={idx}
                alt={image}
                className={this.state.focusIdx === idx ? 'focus' : ''}
                onClick={() => this.imageListClick(idx)}
              ></img>
            );
          })}
        </div>
      </section>
    );
  }
}
