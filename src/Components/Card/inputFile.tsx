'use client'
import React from 'react';
interface CardImgProps {
  src: string;
  onClick?: () => void;
}

const CardImg: React.FC<CardImgProps> = ({ src, onClick }) => {
  return (
    <>
      <img src={src} alt="Imagem" style={{ width: '100%', height: '98%', objectFit: 'cover', borderRadius: '.2rem' }} onClick={onClick} />
    </>
  );
};

export default CardImg;
