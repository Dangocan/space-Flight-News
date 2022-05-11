import React, { useState } from "react";
import { IArticle } from "../../interfaces/Articles";

interface ICardProps {
  content: IArticle;
  invert: boolean;
}

export const ArticleCard: React.FC<ICardProps> = ({ content, invert }) => {
  const articleDate = new Date(content.publishedAt);

  const [hoverLoadMoreButton, setHoverLoadMoreButton] =
    useState<boolean>(false);

  function adicionaZero(number: any) {
    if (number <= 9) return "0" + number;
    else return number;
  }

  return (
    <div
      className="Card"
      style={{
        display: "flex",
        flexDirection: invert ? "row-reverse" : "row",
        alignItems: "center",
        borderRadius: "4px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "2em 0",
        height: "20vw",
        padding: "1em",
      }}
    >
      <img
        src={content.imageUrl}
        alt="cardImage"
        id="IMAGEM_CARD"
        style={{
          width: "40%",
          height: "100%",
          margin: invert ? "0 0 0 2em" : "0 2em 0 0",
          borderRadius: "4px",
        }}
      />

      <div
        className="cardContent"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "60%",
          maxWidth: "60%",
          alignItems: "start",
          lineHeight: "1.2em",
        }}
      >
        <h2 style={{ fontSize: "1.2em" }}>{content.title}</h2>
        <div
          className="cardSubtitle"
          style={{
            width: "100%",
            height: "1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: ".8em",
            }}
          >
            {`${adicionaZero(articleDate.getDate().toString())}/${adicionaZero(
              articleDate.getMonth() + 1
            ).toString()}/${articleDate.getFullYear()}`}
          </p>
          <p
            style={{
              fontSize: ".8em",
              border: "1px solid #D07017",
              borderRadius: "2px",
              color: "#D07017",
              textDecoration: "none",
              padding: "0 .8em",
            }}
          >
            {content.newsSite}
          </p>
        </div>
        <p
          style={{
            fontSize: "1em",
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          {content.summary}
        </p>
        <a
          href={content.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid #302E53",
            borderRadius: "4px",
            backgroundColor: !hoverLoadMoreButton ? "#302E53" : "#FFFFFF",
            color: !hoverLoadMoreButton ? "#FFFFFF" : "#302E53",
            textDecoration: "none",
            padding: ".5em 1em",
          }}
          onMouseEnter={() => setHoverLoadMoreButton(true)}
          onMouseLeave={() => setHoverLoadMoreButton(false)}
        >
          Ver Mais
        </a>
      </div>
    </div>
  );
};
