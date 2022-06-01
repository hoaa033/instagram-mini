import './RightNav.css';
import User from './User/User';

function RightNav() {
    return (
        <div className='right-nav__wrapper'>
            <div className='right-nav__container'>
                <div id="right-nav__user">
                    <img src="https://via.placeholder.com/60" alt="img" />
                    <div className="right-nav__name">
                        <div className="right-nav__account">nthoaa033</div>
                        <div className="right-nav__user-name">Hoa Nguyen</div>

                    </div>
                    <div className="right-nav__switch">
                        <p>Switch</p>
                    </div>
                </div>
                <div id='right-nav__suggestion'>
                    <div><p>Suggetions For You</p></div>
                    <button className='suggetion__btn'>See all</button>
                </div>
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>

    )
}

export default RightNav;