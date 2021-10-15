import { CloudDownload, Directions, DirectionsBike, Shop } from "@material-ui/icons";
import "./packages.css";

const Packages = () => {
    return (
        <div className="packages">
            <div className="packageItems"><CloudDownload/> Download App</div>
            <div className="packageItems"><Shop /> Domot Foods</div>
            <div className="packageItems"><DirectionsBike /> Logistics</div>
            <div className="packageItems"><Directions /> Other Offers</div>
        </div>
    )
}

export default Packages
