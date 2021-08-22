import Affirmations from "../Components/Affirmations";
import Youtube from "../Components/Youtube";
import "../App.css";

const Show = () => {
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
             <div className="Logo">
        <h4>uBelong</h4>
      </div>
            <Affirmations />
            <Youtube />
            <button type="button" onClick={refreshPage} className="Animation">New Affirmation</button>
        </div>
    )
}

export default Show
