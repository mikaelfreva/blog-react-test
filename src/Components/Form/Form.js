import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
export default function Form() {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const newArticle = {
      title: inputsRef.current[0].value,
      body: inputsRef.current[1].value,
    };
    dispatch({
      type: "ADDARTICLE",
      payload: newArticle,
    });

    e.target.reset();
  };

  const inputsRef = useRef([]);

  const addRefs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  //console.log(article);
  return (
    <div>
      <h2 className="title-form">Écrivez un article</h2>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          ref={addRefs}
          className="inp-title"
          type="text"
          placeholder="Entrez votre nom"
          id="title"
        />

        <label htmlFor="article">Votre article</label>

        <textarea
          ref={addRefs}
          className="inp-body"
          id="article"
          placeholder="Votre article"
        ></textarea>

        <button>Envoyez l'article</button>
      </form>
    </div>
  );
}
