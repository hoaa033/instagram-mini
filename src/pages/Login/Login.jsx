import './Login.css';
import FacebookIcon from '@mui/icons-material/Facebook';

function Login() {
    return (
        <div className='login-background'>
            <div className='login-container'>

                <img className='login__img' src="https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/vi_VN/1ebd5a68afcb2cd335153627e45c1586.png" alt="img" />

                <div className='login__wrapper'>
                    <div className='login__details'>
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="logo" />

                        <div className='login'>
                            <div className='login__item username'>
                                <input type="text" placeholder='Phone number, username or email' />
                            </div>
                            <div className='login__item password'>
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className='login__item'>
                                <button>
                                    Log In
                                </button>
                            </div>
                            <div className='login__item' >
                                <p>--------OR--------</p>
                            </div>
                            <div className='login__item'>
                                
                                <a className='fb' href="https://www.facebook.com/"><FacebookIcon/> Log in with Facebook</a>
                            </div>
                            <div className='login__item'>
                                <a className='forgot-password' href="#">Forgot password?</a>
                            </div>

                        </div>
                    </div>

                    <div className='sign-up'>
                        <p>Don't have account? <span><a href="#">Sign up</a></span></p>
                    </div>
                    <div className='download'>
                        <p>Get the app</p>
                        <div className='download-link'>
                            <div className='android'>
                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D696735F2-1F9D-4784-9DC3-AD416CE44A1A%26utm_content%3Dlo%26utm_medium%3Dbadge"
                                    target="_blank">
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="ios" />
                                </a>
                            </div>
                            <div className=' ios'>
                                <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" 
                                    target="_blank">
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="android" />
                                </a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;