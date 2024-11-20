import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContent } from "../types";



const Page: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const [data, setData] = useState<PageContent | null>(null);

  useEffect(() => {
    fetch("/data/pages.json")
      .then((response) => response.json())
      .then((json: PageContent[]) => {
        const pageData = json.find(p => p.name === page) || null;
        setData(pageData);
      })
      .catch((error) => console.error("Error loading page.json:", error));
  }, [page]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Page;
