import { useEffect, useState } from "react";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleKeyDown = () => {};

  const fetchData = async () => {
    try {
      if (cache[input]) {
        setResults(cache[input]);
        return;
      }
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const json = await data.json();
      setResults(json.recipes);
      setCache((prev) => ({ ...prev, [input]: json.recipes }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const Timer = setTimeout(fetchData, 300);

    return () => clearTimeout(Timer);
  }, [input]);

  return (
    <>
      <div className="auto-complete-parent-container">
        <div className="auto-compete-container">
          <div>
            <input
              className="auto-complete-input"
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setShowResults(true)}
              onBlur={() => setShowResults(false)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {showResults && (
            <div className="auto-complete-results-container">
              {results.map((res) => (
                <span className="auto-complete-result" key={res.id}>
                  {res.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
