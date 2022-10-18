import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div padding={"1.5rem 2rem"} alignItems="center" justifyContent={"space-between"}>
            <NavLink to="/"><p cursor={"pointer"}>Posts</p></NavLink>
            <ul display={"flex"} alignItems="center" listStyleType={"none"}>
                <NavLink to="/"><li cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>Posts</li></NavLink>
                <NavLink to="/post"><li cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>CreatePost</li></NavLink>
                <NavLink to="/11"><li cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>MyPost</li></NavLink>
            </ul>
        </div>
    )
}

export default Nav;