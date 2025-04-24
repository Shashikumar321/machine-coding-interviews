import { useState } from "react";

const List = ({ data, setData }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const [newFolder, setNewFolder] = useState({});

  const handleExpanded = (node) => {
    setIsExpanded((prev) => ({
      ...prev,
      [node.name]: !prev[node.name],
    }));
  };

  const showInputField = (node) => {
    setNewFolder((prev) => ({
        ...prev,
        [node.id]: ""
    }))
  }

  const handleEnterKey = (e, node) => {
    if (e.key === 'Enter') {
        addNodeToList(node);
    }
  };
  
  const handleInputChange = (e, parentNode) => {
    setNewFolder((prev) => ({
      ...prev,
      [parentNode.id]: e.target.value,
    }));
  };

  const addNodeToList = (parentNode) => {
    const folderName = newFolder[parentNode.id]?.trim();
    if (!folderName) return;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentNode.id) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                name: folderName,
                id: Date.now().toString(),
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }

        return node;
      });
    };

    setData((prev) => updateTree(prev));
    setNewFolder((prev) => ({ ...prev, [parentNode.id]: undefined }));
  };

  const RemoveNodeFromList = (parentNode) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== parentNode.id)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div>
      <div className="file-explorer-node-container">
        {data.map((node) => (
          <div className="file-explorer-single-node" key={node.id}>
            {node.isFolder && (
              <span onClick={() => handleExpanded(node)}>
                {isExpanded?.[node.name] ? (
                  <img
                    className="file-explorer-arrow"
                    src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
                    alt="down-arrow"
                  />
                ) : (
                  <img
                    className="file-explorer-arrow"
                    src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"
                    alt="right-arrow"
                  />
                )}
              </span>
            )}

            <span>
              {node.isFolder ? (
                <>
                  🗂️ {node.name}{" "}
                  <img
                    className="file-explorer-add-folder-icon"
                    src="https://cdn-icons-png.flaticon.com/128/11366/11366824.png"
                    alt="add-folder-icon"
                    onClick={() => showInputField(node)}
                  />{" "}
                  <img
                    className="file-explorer-add-folder-icon"
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    alt="add-folder-icon"
                    onClick={() => RemoveNodeFromList(node)}
                  />{" "}
                </>
              ) : (
                "📄 " + node.name
              )}
            </span>
            {newFolder[node.id] !== undefined &&  (
              <input
                className="file-explorer-input"
                type="text"
                placeholder="folder name"
                value={newFolder[node.id]}
                onChange={(e) => handleInputChange(e, node)}
                onKeyDown={(e) => handleEnterKey(e, node)}
                autoFocus
              />
            )}
            {isExpanded?.[node.name] && node.children && (
              <List data={node.children} setData={setData} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
