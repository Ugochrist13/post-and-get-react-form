import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink to="/"><p>Home</p></NavLink>
            <ul className='nav-link'>
                <NavLink to="/"><li>Posts</li></NavLink>
                <NavLink to="/post"><li>CreatePost</li></NavLink>
                <NavLink to="/11"><li>MyPost</li></NavLink>
            </ul>
        </div>
    )
}

export default Nav;