import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/userguide">UserGuide</Link>
        </footer>
    )
}

export default Footer
