import './User.css'

function User() {
    return (
        <div id="user__user">
            <img src="https://via.placeholder.com/40" alt="img" />
            <div className="user__name">
                <div className="user__account">
                    <p> user_name</p>
                </div>
                <div className="user__suggested">
                    <p>Suggested for you</p>
                </div>

            </div>
            <div className="user__follow">
                <p>Follow</p>
            </div>
        </div>
    )

}

export default User;