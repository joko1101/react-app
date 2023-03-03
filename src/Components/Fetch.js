import "../App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, date, avatar }) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{date}</p>
      <img src={avatar} height={200} alt={name} />
    </div>
  )
}

function Api() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/joko1101`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
  return (
    <GithubUser 
    name={data.login} 
    date={data.created_at} 
    avatar={data.avatar_url} />
  )

  return (
    <div className='App'>
      <h1>Data</h1>
    </div>
  );
}

export default Api;