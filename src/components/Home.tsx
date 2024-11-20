import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState<{ title: string; subtitle: string } | null>(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading home.json:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
    </div>
  );
};

export default Home;
