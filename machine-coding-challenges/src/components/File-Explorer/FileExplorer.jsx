import { useState } from "react";
import json from "./data.json";
import List from "./List";

const FileExplorer = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <List data={data} setData={setData}/>
    </div>
  );
};

export default FileExplorer;
