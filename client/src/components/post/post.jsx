import "./post.css"

export default function post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
            <div className="postInfo">
                <div className="postCats">
                    <span class="postCat">Music</span>
                    <span class="postCat">Life</span>
                </div>
                <span class="postTitle">Tets sdsdt sdsgd sdsd</span>
                <hr/>
                <span class="postDate">2 hour ago</span>
            </div>
            <p class="postDesc">To enable the Emmet abbreviation expansion in file types where it is not available by default, use the emmet. include Languages setting. Make sure to use language identifiers for both sides of the mapping, with the right side being the language identifier of an Emmet supported language (see the list above).</p>
        </div>
    )
}
