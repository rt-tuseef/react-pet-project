import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/17849973/pexels-photo-17849973/free-photo-of-facade-of-the-grand-central-terminal-in-manhattan-new-york-city-new-york-united-states.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 class="singlePostTitle">
                    View of the Coit Tower from the San Francisco Bay
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa-solid fa-edit"></i>
                        <i class="singlePostIcon fa-solid fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span class="singlePostAuthor">Author: <b>Tuseef</b></span>
                    <span class="singlePostDate">1 Hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Fazalhaq Farooqi to Rizwan, FOUR runs Beautiful drive! Again picks the gap nicely on the offside. Full and wide of off again, sends this ball down the ground to deep extra cover
                    Fazalhaq Farooqi to Rizwan, FOUR runs Beautiful drive! Again picks the gap nicely on the offside. Full and wide of off again, sends this ball down the ground to deep extra cover
                    Fazalhaq Farooqi to Rizwan, FOUR runs Beautiful drive! Again picks the gap nicely on the offside. Full and wide of off again, sends this ball down the ground to deep extra cover
                </p>

            </div>
        </div>
    )
}
