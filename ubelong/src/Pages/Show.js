import { Link } from "react-router-dom";
import Affirmations from "../Components/Affirmations";
import Youtube from "../Components/Youtube";

const Show = () => {
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <Affirmations />
            <Youtube />
            <button type="button" onClick={refreshPage}>New Affirmation</button>
        </div>
    )
}

export default Show
