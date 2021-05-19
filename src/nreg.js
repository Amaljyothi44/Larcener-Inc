
const nreg = () => {
    return (
        <center>
            <form action="">
                <h1>Login</h1>
            First Name:
                <input type="text" /> <br />
            Second Name:
                <input type="text" /> <br />
            Email:
                <input type="text" /> <br />
            Username:
                <input type="text" /> <br />
            Password:
                <input type="password" /> <br />
            Confirm Password:
                <input type="password" /> <br /> <br />
                <button type="submit">Login</button> &nbsp;
                <button type="reset">Cancel</button>
            </form>
        </center>
    );
}

export default nreg;