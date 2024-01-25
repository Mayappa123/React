
const Props = ({ name, message }) => {
  return (
    <div>
      <h1>{`Hello, ${name} ${message}`}</h1>
    </div>
  );
};

export default Props;



// import "bootstrap/dist/css/bootstrap.css";
// import Props from "./components/props";

// function App() {
//   const name = "maya";
//   const message = "Good morning";
//   return (
//     <>
//       <Props name={name} message={message} />  OR
     //  <Props name="maya" message="How are you?" />;

//     </>
//   );
// }

// export default App;