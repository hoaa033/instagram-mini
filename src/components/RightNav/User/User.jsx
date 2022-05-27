import './User.css'

function User() {
    return (
        <div id="user__user">
            <img src="https://via.placeholder.com/40" alt="img" />
            <div className="user__name">
                <div class="user__account">
                    <p> user_name</p>
                </div>
                <div class="user__suggested">
                    <p>Suggested for you</p>
                </div>

            </div>
            <div class="user__follow">
                <p>Follow</p>
            </div>
        </div>
    )

}

export default User;