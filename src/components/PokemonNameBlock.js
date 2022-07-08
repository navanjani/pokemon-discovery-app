import { NavLink } from "react-router-dom";

const PokemonNameBlock = ({ name }) => {
  return (
    <NavLink to={`/details/${name}`}>
      <h3>{name}</h3>
    </NavLink>
  );
};

export default PokemonNameBlock;
