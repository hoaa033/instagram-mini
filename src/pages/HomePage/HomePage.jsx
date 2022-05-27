import './HomePage.css';
import Header from "../../components/Header/Header";
import RightNav from '../../components/RightNav/RightNav';
import Content from '../../components/Content/Content';

function HomePage() {
    return (
        <div>
            <Header className="home-page__header" />
            <div className='home-page__row'>
                <div className='home-page__news'>
                <Content/>
                </div>
                <RightNav className="home-page__user"/>
            </div>
        </div>
    )
}

export default HomePage;