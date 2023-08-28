import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span class="settingsUpdateTitle">Update Account</span>
                    <span class="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div class="settingsPP">
                        <img src="https://media.istockphoto.com/id/1158475162/photo/young-woman-blogger-in-spectacles-publishing-new-post-on-own-website-and-installing-new.webp?b=1&s=612x612&w=0&k=20&c=QQRcRs6Js57h7puRhGfC0cap9x1qc3Q8vStnapRqrm0=" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input class="settingsPPInput" type="file" id="fileInput" style={{display: "none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Tuseef" name="name"></input>
                    <label>Email</label>
                    <input type="text" placeholder="TA@gmail.com" name="email"></input>
                    <label>Username</label>
                    <input type="password" placeholder="Password" name="password"></input>
                    <button class="settingsSubmitButton" type="submit">Update</button>
                </form>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}
