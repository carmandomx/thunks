const PokemonItem = ({ name, type, imgUrl }) => {
  return (
    <div>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <img src={imgUrl} alt={name} />
      <h6 style={{ margin: 0 }}>{type}</h6>
    </div>
  )
}

export default PokemonItem
