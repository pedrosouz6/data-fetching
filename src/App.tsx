import axios from 'axios';
import { useQuery } from 'react-query';

import './App.css';

interface Repository {
  full_name: string,
  description: string
}

export default function App() {
  
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/pedrosouz6/repos')

    return response.data;
  })

  return (
    <ul>
      { isFetching && <p>carregando...</p> }

      { 
        data?.map((item, key) => (
          <div key={key}>
            <li>{ item.full_name }</li>
            <strong>{ item.description }</strong> 
            <br/>
            <br/>
          </div>
        ))
      }
    </ul>
  );
}