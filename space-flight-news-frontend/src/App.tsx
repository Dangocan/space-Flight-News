import { useEffect, useState } from "react";
import { IArticle } from "./interfaces/Articles";
import axios from "axios";
import { IQueryParams } from "./interfaces/Articles";
import { ArticleCard } from "./components/ArticleCard";
import { IoIosRocket, IoIosSearch } from "react-icons/io";

function App() {
  const [articlesShowing, setArticlesShowing] = useState<IArticle[]>(
    [] as IArticle[]
  );

  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [buttonLoading, setButtonLoading] = useState<boolean>(true);

  const [hoverLoadMoreButton, setHoverLoadMoreButton] =
    useState<boolean>(false);

  const [focusSearch, setFocusSearch] = useState<boolean>(false);
  const [focusSelect, setFocusSelect] = useState<boolean>(false);

  const [buttonPressCount, setButtonPressCount] = useState<number>(1);
  const [sort, setSort] = useState<string>("");
  const [contain, setContain] = useState<string>("");

  const fetchArticles = async (params?: IQueryParams) => {
    setLoading(true);
    try {
      const articleSArray = await axios.get("http://localhost:3333/articles", {
        params: { ...params },
      });
      setArticlesShowing(articleSArray.data as IArticle[]);
    } catch (error) {
      console.log("Falha ao acessar artigos");
    }
    setLoading(false);
  };

  const fetchMoreArticles = async () => {
    setButtonLoading(true);
    try {
      const articleSArray = await axios.get("http://localhost:3333/articles", {
        params: { page: buttonPressCount, contain, sort },
      });
      setArticlesShowing([
        ...articlesShowing,
        ...(articleSArray.data as IArticle[]),
      ]);
    } catch (error) {
      console.log("Falha ao acessar artigos");
    }
    setButtonLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    setButtonPressCount(1);
  }, [sort, contain]);

  useEffect(() => {
    fetchMoreArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonPressCount]);

  useEffect(() => {
    console.log(articlesShowing);
  }, [articlesShowing]);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          padding: "1em",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
        }}
      >
        <div
          id="Header"
          style={{ width: "100%", display: "flex", justifyContent: "right" }}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={({ target }) => setContain(target.value)}
            style={{
              padding: ".6em",
              border: "1px solid #302E53",
              borderRight: "none",
              borderColor: focusSearch ? "#D07017" : "#302E53",
              borderRadius: "4px 0px 0px 4px",
              transition: "all 0.2s linear",
              outline: "none",
            }}
            onFocus={() => setFocusSearch(true)}
            onBlur={() => setFocusSearch(false)}
          />
          <button
            style={{
              marginRight: "1.5em",
              border: "1px solid #302E53",
              borderLeft: "none",
              borderRadius: "0px 2px 2px 0px",
              borderColor: focusSearch ? "#D07017" : "#302E53",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => fetchArticles({ contain: contain, sort: sort })}
          >
            <div
              style={{
                padding: ".4em .4em",
                display: "flex",
                alignItems: "center",
                transition: "all 0.2s linear",
                backgroundColor: focusSearch ? "#D07017" : "#302E53",
              }}
            >
              <IoIosSearch
                style={{
                  color: "#FFFFFF",
                }}
              />
            </div>
          </button>
          <select
            style={{
              border: "1px solid #302E53",
              backgroundColor: "transparent",
              padding: "0 .5em",
              cursor: "pointer",
              borderColor: focusSelect ? "#D07017" : "#302E53",
              transition: "all 0.2s linear",
              outline: "none",
            }}
            defaultValue=""
            name="select"
            onChange={({ target }) => {
              setSort(target.value);
              fetchArticles({ contain: contain, sort: target.value });
            }}
            onFocus={() => setFocusSelect(true)}
            onBlur={() => setFocusSelect(false)}
          >
            <option value="">Sort</option>
            <option value="asc">Mais antigas</option>
            <option value="desc">Mais novas</option>
          </select>
        </div>
        <div
          id="Logo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "1px solid #302E53",
            width: "100%",
            margin: "3em 0",
            padding: "1em 0",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              border: "2px solid #302E53",
              padding: "1em",
              borderRadius: "50%",
            }}
          >
            <IoIosRocket
              id="IMAGEM_LOGO"
              style={{
                width: "80px",
                height: "80px",
                color: "#302E53",
              }}
            />
          </div>

          <h1
            style={{
              color: "#302E53",
              fontSize: "1.6em",
              fontWeight: "normal",
            }}
          >
            Space Flight News
          </h1>
        </div>
        {loading || (
          <div
            id="Content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
            }}
          >
            {articlesShowing.map((article, index) => (
              <ArticleCard content={article} invert={!!(index % 2)} />
            ))}
            <button
              style={{
                border: "1px solid #302E53",
                borderRadius: "2px",
                backgroundColor: hoverLoadMoreButton ? "#302E53" : "#FFFFFF",
                color: hoverLoadMoreButton ? "#FFFFFF" : "#302E53",
                padding: ".5em 1em",
                margin: "3em 0 2em 0",
                cursor: "pointer",
                transition: "all 0.2s linear",
              }}
              onMouseEnter={() => setHoverLoadMoreButton(true)}
              onMouseLeave={() => setHoverLoadMoreButton(false)}
              onClick={() => setButtonPressCount(buttonPressCount + 1)}
            >
              Carregar Mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
