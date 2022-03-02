import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "./Data/config";
import apiKey2 from "./Data/config";
import NewsCont from "./components/NewsCont";

function App() {
  const [category, setCategory] = useState('General')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loader, setLoader] = useState(10)

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loader}`)
      console.log(news);
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    newsApi();
    
  }, [newsResults, category, loader])

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsCont newsArray={newsArray} newsResults={newsResults} loader={loader} setLoader={setLoader} />
    </div>
  );
}

export default App;
