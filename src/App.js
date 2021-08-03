import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const alanKey =
  "d2abd687060917b23a17d0f1177b398e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://aleshere.github.io/alan-ai-newsreader-react/static/media/alan-logo.d3e2c60f.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
