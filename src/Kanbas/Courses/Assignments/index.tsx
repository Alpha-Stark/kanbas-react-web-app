import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import ModulesControls from "../Modules/ModulesControls";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { assignments } from "../../Database";


export default function Assignments() {
    const { cid } = useParams(); // Extract course ID from route params

    return (
        <div id="wd-assignments">
            <ModulesControls />
            <br /><br /><br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignments
                        <div className="float-end">
                            <a
                                style={{
                                    border: '1px solid #000',
                                    borderRadius: '15px',
                                    padding: '2px 10px',
                                    marginRight: '10px',
                                    color: '#000',
                                    textDecoration: 'none',
                                }}
                                href="/Kanbas/Courses/Assignments/Grades"
                            >
                                40% of Total
                            </a>
                            <button style={{
                                padding: '0.1rem 0.5rem',
                                border: "none",
                                backgroundColor: "none",
                            }}>+</button>
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid) // Filter assignments by course ID
                            .map((assignment: any) => (
                                <li
                                    key={assignment._id}
                                    className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start"
                                >
                                    <BsGripVertical className="me-2 fs-3" />
                                    <HiOutlinePencilAlt
                                        className="me-2"
                                        style={{ color: "#000", fontSize: "2rem" }}
                                    />

                                    <div className="flex-grow-1">
                                        <a className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <div className="text-start">
                                            <span className="text-danger">Multiple Modules</span> | <b>Not Available until</b> {assignment.unavailableUntil} {assignment.unavailableTime}
                                            <br />
                                            Due {assignment.dueDate} {assignment.dueDateTime} | {assignment.points} pts
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div >
    );
}
