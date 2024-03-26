import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {

  const { id, name, username } = item;
  const { state, dispatch } = useGlobalContext();


  const isFav = state.favs.some(fav => fav.id === item.id);

  const addFav = () => {
    if (isFav) {
      dispatch({ type: 'DEL_FAV', payload: item });
    } else {
      dispatch({ type: 'ADD_FAV', payload: item });
    }

  };

  return (
    <div className="card">
      <img className="card img" src="/images/doctor.jpg" alt="avatar" />
      <h3>{name} </h3>
      <h4>{username}</h4>

      <Link to={'/detail/' + id}>
        <button className="detailButton">View Details</button>
      </Link>

      <label onClick={addFav} className="favButton">
        {isFav ? (
          <img src="/images/fav.svg" className="Fav" alt="Fav" />
        ) : (
          <img src="/images/nofav.svg" className="noFav" alt="noFav" />
        )}
      </label>
    </div>
  );
};

export default Card;
