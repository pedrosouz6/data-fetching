import { useFetch } from './hooks';

import './App.css';

interface Repository {
  full_name: string,
  description: string
}

export default function App() {
  
  const { data, isFetching } = useFetch<Repository[]>('https://api.github.com/users/pedrosouz6/repos');
  
  return (
    <ul>
      { isFetching && <p>carregando...</p> }
      
      { 
        data &&
        data.map((item, key) => (
          <div>
            <li key={key}>{ item.full_name }</li>
            <strong>{ item.description }</strong> 
            <br/>
            <br/>
          </div>
        ))
      }
    </ul>
  );
}