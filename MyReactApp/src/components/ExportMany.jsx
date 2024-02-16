
export const Firstname = () => {
  return (
    <h1>
      <h1>Mayappa</h1>
    </h1>
  );
};


export const Lastname = () => {
  return (
    <h1>
      <p>Pujari</p>
    </h1>
  );
};


export const Fullname = () => {
  return (
    <h3>
    Mayappa Pujari
    </h3>)
};


export const Addition = ({a, b}) => {
  return (
    <>
    <p>Addition: {a + b}</p>
    </>
  )
};

export const MyButton = () => {
  return (
    <button className="btn btn-success mx-4">Log In</button>
  )
};
