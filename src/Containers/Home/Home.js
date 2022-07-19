import React from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../redux/articles/articleReducer";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Home() {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);



  return (
    <div>
      <h2 className="home-title">Tous les articles</h2>
      <div className="container-cards">
        {articles.map((item) => {
          return (
            <Card key={uuidv4()}>
              <h2> {item.title} </h2>

              <Link
               
               state={{
                title: item.title,
                body: item.body
              }}
                to={{
                  pathname: `articles/${item.title
                    .replace(/\s+/g, "-")
                    .trim()}`,
                 
                }}
              >
                Lire l'article
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
