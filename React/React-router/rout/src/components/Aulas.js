import React, { useEffect, useState } from 'react'
import data from '../repo/data'
import { Link, useRouteMatch } from 'react-router-dom';

function Aulas(props) {
  const match = useRouteMatch()
  const [url, setUrl] = useState("");

  useEffect(() => {
    const newUrl = match.url.slice(-1) === '/' ? match.url : match.url + '/';
    setUrl(newUrl)
  }, [match])

  return (
    <div className="page">
        <h1>Aulas</h1>
        <ul className="aulas">
            {data.map(aula => {
                return <li key={aula.id}><Link className="link" to={`${url}${aula.id}`}>{aula.title}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default Aulas