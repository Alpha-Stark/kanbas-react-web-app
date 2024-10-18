import { Link, useLocation, useParams } from "react-router-dom"

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

function CoursesNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    return (
        // make dynamic using links array
        <>
            <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map((link) => (
                    <Link id={`wd-course-${link.toLowerCase()}-link`} className={`list-group-item text-danger border border-0 ${pathname.includes(link) ? "active" : ""}`} to={`/Kanbas/Courses/${cid}/${link}`}>{link}</Link>))
                }

            </div>
            {/* <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                <Link id="wd-course-home-link" className="list-group-item active border border-0" to="/Kanbas/Courses/1234/Home" >Home</Link>
                <Link id="wd-course-modules-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Modules">Modules</Link>
                <Link id="wd-course-piazza-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Piazza">Piazza</Link>
                <Link id="wd-course-zoom-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Zoom">Zoom</Link>
                <Link id="wd-course-quizzes-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Assignments">Assignments</Link>
                <Link id="wd-course-assignments-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Quizzes">Quizzes</Link>
                <Link id="wd-course-grades-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/Grades">Grades</Link>
                <Link id="wd-course-people-link" className="list-group-item text-danger border border-0" to="/Kanbas/Courses/1234/People">People</Link>
            </div> */}
        </>
    )
}

export default CoursesNavigation