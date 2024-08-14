const ParisOlympic = ({ medals }) => {
  return (
    <div>
      {medals.length > 0 ? (
        <ul>
          {medals.map((medal) => (
            <li key={medal.id} className="medal">
              {medal.country} won {medal.medals} medals.
            </li>
          ))}
        </ul>
      ) : (
        <p>Data not available.</p>
      )}
    </div>
    
  );
};

export default ParisOlympic;

