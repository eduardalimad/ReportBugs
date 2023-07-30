'use client'
import style from './page.module.scss'
import React, { useRef, useState } from 'react';
import { BiImageAdd, BiTrash, BiWindowClose} from "react-icons/bi";
import Modal from 'react-modal';
import InputText from "../Components/Inputs/input"
import InputSelect from "@/Components/Inputs/select"
import CardTextArea from "@/Components/Inputs/textArea"
import Header from "@/Components/Header/header"
import Button from "@/Components/Buttons/buttonGreen"
import CardImg from "@/Components/Card/inputFile"


export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Armazene a imagem como uma URL ou null se nenhuma imagem foi selecionada
  const inputRef = useRef<HTMLInputElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); 
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null); 
  };
  const handleImageClick = () => {
    console.log('Clicou na imagem');
    setModalIsOpen(true); 
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <section className={style.containerLeft}>
          <div className={style.form}>
            <span className={style.title}> E-mail </span>
            <InputText propsType="email" typeStyle='screen one' />
            <CardTextArea />
            <span className={style.title}> Sistema </span>
            <InputSelect />
          </div>
        </section>

        <section className={style.containerRight}>
          <div className={style.containerIcon} >
            {selectedImage ? (
              <>
                <CardImg src={selectedImage} onClick={handleImageClick} />
                <button onClick={handleRemoveImage} className={style.btnDelete}>
                  Excluir <BiTrash className={style.trashIcon} />
                </button>
              </>
            ) : (
              <BiImageAdd className={style.icon} onClick={handleIconClick} />
            )}
          </div>
          <label htmlFor="file">
            <input
              type="file"
              id="file"
              ref={inputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none', }}
            />
          </label>

        </section>


        <section className={style.containerButton}>
          <Button propsTitle="ENVIAR" />
        </section>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Imagem"
        >
          <a onClick={handleCloseModal} >
            <BiWindowClose style={{ height: "1rem"}}/>
            </a>
          <div className={style.modalContent}>
            {selectedImage &&

              <img src={selectedImage} alt="Imagem em tela cheia" />}

          </div>
        </Modal>
      </main>

    </div>
  )
}