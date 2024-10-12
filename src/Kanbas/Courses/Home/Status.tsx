import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
// /* Find more icons */
import { MdHome } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";


function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px", margin: "0 1.5rem" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish </button>
                </div>
            </div><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

            {/* Complete the rest of the buttons: Choose Home page, View Course Screen, New Announcement, New Analytics, View Course Notification */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <MdHome className="me-2 fs-5" /> Choose Home page </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <RiBarChart2Fill className="me-2 fs-5" /> View Course Screen </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <RiBarChart2Fill className="me-2 fs-5" /> New Analytics </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <IoIosNotifications className="me-2 fs-5" /> View Course Notification </button>

        </div >

    )
}

export default CourseStatus