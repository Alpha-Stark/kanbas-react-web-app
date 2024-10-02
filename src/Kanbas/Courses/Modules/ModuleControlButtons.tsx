import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import the plus icon
import GreenCheckmark from "./GreenCheckmark";

function ModuleControlButtons() {
    return (
        <div className="float-end">
            <BsPlus className="fs-4" /> {/* Add the plus icon */}
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}

export default ModuleControlButtons