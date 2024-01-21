import "../styles/signup.css";

export default function Login() {
  return (
    <form action="" className="mx-5 my-5 signup custom-form">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label ">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary d-block mx-auto loginbtn mt-30"
      >
        Sign Up
      </button>
      <br />
    </form>
  );
}
