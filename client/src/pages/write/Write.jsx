import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <form class="writeForm">
                <div class="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" class="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" class="writeInput writeText" />
                </div>
                <button class="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
