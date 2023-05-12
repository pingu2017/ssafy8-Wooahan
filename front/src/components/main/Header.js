import Rewards from './header/Rewards';
import Title from './header/Title';
import Setting from './header/Setting';
import {Link} from 'react-router-dom'
import Home from '../main/books/Home'
import Tutorial from '../main/header/Tutorial'

const Header = (props) => {
    
    return(
        <div className="z-20 absolute px-[4%] mt-[1%] w-screen h-[15%] bg-transparent flex justify-between items-center">
            {(props.topLeftButton === "books") ? <Rewards><Link to="/books"></Link></Rewards> : <Home />}
            {props.titleIsVisible && <Title />}
            <div className="w-[20%] h-full flex justify-around">
                <Tutorial />
                <Setting />
            </div>
        </div>
    )
}

export default Header;