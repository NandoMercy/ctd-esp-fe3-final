import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state, dispatch } = useGlobalContext();

  const clearFavs = () => {
    dispatch({ type: 'CLEAR_FAVS' });
  };

  return (
    <>
      <h1>Your Favorite Dentists</h1>
      {state.favs.length > 0 && (
        <button className="clearButton" onClick={clearFavs}>
          Clear favorites list
        </button>
      )}
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map(item => <Card key={item.id} item={item} />)
        ) : (
          <h3>You have no favorites added.</h3>
        )}
      </div>
    </>
  );
};

export default Favs;
