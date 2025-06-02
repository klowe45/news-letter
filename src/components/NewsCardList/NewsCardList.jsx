import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import notFound from "../../assets/notFound.png";

function NewsCardList({
  isLoading,
  isLoggedIn,
  setActiveModal,
  isGoodNewsData,
  newsData,
  handleSaveArticle,
}) {
  const filteredNewsData = Array.isArray(newsData)
    ? newsData.filter((article) => !article.title?.startsWith("[Removed"))
    : [];

  const [showThreeArticles, setShowThreeArticles] = useState(3);

  const postedNewsDataItems = filteredNewsData.slice(0, showThreeArticles);

  const handleClick = () => {
    setShowThreeArticles((prevState) => prevState + 3);
  };

  const startingState =
    filteredNewsData.length === 0 && !isGoodNewsData && !isLoading;

  const noNewsDataArray = isGoodNewsData && filteredNewsData.length === 0;

  return (
    <section
      className={
        startingState
          ? "news__cards-list news__cards-list-hidden"
          : "news__cards-list"
      }
    >
      {noNewsDataArray && (
        <div className="news__cards-list-unfound">
          <img
            src={notFound}
            alt="Not Found Icon"
            className="news__cards-list-unfound-img"
          />
          <h3 className="news__cards-list_unfound-title">Nothing Found</h3>
          <p className="news__cards-list_unfound-subtitle">
            Sorry, but nothing matched
          </p>
          <div className="news__cards-list_unfound-subtitle">
            your search terms.
          </div>
        </div>
      )}

      {/*{isLoading && (*/}
      <div className="news__cards-list-preloader-content">
        <div className="news__cards-list-preloader">
          <Preloader />
          <h3 className="news__cards-list-preloader-text">
            Searching for news...
          </h3>
        </div>
      </div>
      {/*})}*/}

      {!noNewsDataArray && !isLoading && filteredNewsData.length > 0 && (
        <>
          <h2 className="news__cards-list-title">Search results</h2>
          <div className="news__cards-list-container">
            <ul className="news__cards-list-items">
              {postedNewsDataItems.map((article, index) => (
                <NewsCard
                  isLoggedIn={isLoggedIn}
                  key={article.url || index}
                  article={article}
                  setActiveModal={setActiveModal}
                  handleSaveArticle={handleSaveArticle}
                />
              ))}
            </ul>
          </div>
          {postedNewsDataItems.length < filteredNewsData.length && (
            <button onClick={handleClick} className="news__cards-list_more-btn">
              Show More
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardList;
