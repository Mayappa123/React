const ParisOlympic = ({ medals }) => {
  return (
    <div>
      {medals.length > 0 ? (
        <ul>
          {medals.map((medal) => (
            <li key={medal.id}>
              {medal.country} won {medal.medals} medals.
            </li>
          ))}
        </ul>
      ) : (
        <p>No medals available.</p>
      )}
    </div>
  );
};

export default ParisOlympic;
