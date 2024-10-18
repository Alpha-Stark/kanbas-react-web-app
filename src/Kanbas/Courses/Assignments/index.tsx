import { useParams } from "react-router";
import * as db from "../../Database";


function Assignments() {
    const assignments = db.assignments;
    const { cid } = useParams();
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments"
                style={{ marginBottom: '1rem', padding: '0.1rem', width: "12rem" }} /> {/* Adjusted input padding/margin */}

            <button id="wd-add-assignment-group" style={{ marginRight: '0.5rem', padding: '0.1rem 1rem' }}>+ Group</button>
            <button id="wd-add-assignment" style={{ padding: '0.1rem 1rem' }}>+ Assignment</button>
            <h3 id="wd-assignments-title" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                ASSIGNMENTS 40% of Total <button style={{ padding: '0.1rem 0.5rem' }}>+</button>
            </h3>
            <ul id="wd-assignment-list">
                {
                    assignments.map((assignment) => (
                        assignment.course === cid && (
                            <li className="wd-assignment-list-item" key={assignment._id}>
                                <a className="wd-assignment-link"
                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </a>
                                <div><text>Multiple Modules | <b>Not Available Until</b> {assignment.unavailableUntil} at {assignment.unavailableUntilTime} |</text></div>
                                <div><text><b>Due</b> {assignment.dueDate} at {assignment.dueDateTime} | {assignment.points} pts</text></div>
                            </li>
                        )
                    ))
                }
                {/* <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <div><text>Multiple Modules | <b>Not Available Until</b> May 6 at 12:00 AM |</text></div>
                    <div><text><b>Due</b> May 13 at 11:59 PM | 100 pts</text></div>
                </li>
                <li className="wd-assignment-list-item" style={{ margin: '1rem 0rem' }}>
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <div><text>Multiple Modules | <b>Not Available Until</b> May 13 at 12:00 AM |</text></div>
                    <div><text><b>Due</b> May 20 at 11:59 PM | 100 pts</text></div>
                </li>
                <li className="wd-assignment-list-item" style={{ margin: '1rem 0rem' }}>
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <div><text>Multiple Modules | <b>Not Available Until</b> May 20 at 12:00 AM |</text></div>
                    <div><text><b>Due</b> May 27 at 11:59 PM | 100 pts</text></div>
                </li> */}
            </ul>
        </div>
    )
}

export default Assignments