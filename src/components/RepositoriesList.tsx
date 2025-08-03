import { useState } from "react";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => {
    return state.repositories;
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}
      {!error && !loading && (
        <ul>
          {data.map((name) => {
            return (
              <li key={name}>{name}</li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default RepositoriesList;