import './HomePage.css';
import Header from "../../components/Header/Header";
import RightNav from '../../components/RightNav/RightNav';
import Content from '../../components/Content/Content';

function HomePage() {
    return (
        <div >
            <Header/>
            <div className='home-page__row'>
                <div className='home-page__news'>
                <Content/>
                </div>
                <RightNav/>
            </div>
        </div>
    )
}

export default HomePage;