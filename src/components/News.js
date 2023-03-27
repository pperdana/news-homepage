import "./News.styles.css";

import Hero from "./Hero";
import New from "./New";
import Step from "./Step";

const News = () => {
  return (
    <main>
      <section className="news">
        <Hero />
        <New />
        <Step />
      </section>
    </main>
  );
};

export default News;
