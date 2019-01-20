import React from "react";
import { newsAr } from "../news";

const News = () => {
  const content = newsAr.map(post => (
    <div className="news" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  ));

  return (
    <article>
      <h1>Новости</h1>
      <section>{content}</section>
    </article>
  );
};

export default News;
