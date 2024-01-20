export default function Navbar() {
    return (
        <form action="" className="loginform">
            <label for="username">username  </label><br />
            <input type="text" placeholder="Enter Username" /> <br /><br />

            <label for="username">Password  </label><br />
            <input type="password" placeholder="Enter Password" /> <br />
            <br />
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}