import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state: any) => {
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
    </div>
  )
}

export default RepositoriesList;