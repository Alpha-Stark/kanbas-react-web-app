function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <div><text>Multiple Modules | <b>Not Available Until</b> May 6 at 12:00 AM |</text></div>
                    <div><text><b>Due</b> May 13 at 11:59 PM | 100 pts</text></div>
                </li>
                <li className="wd-assignment-list-item" style={{ margin: '1rem 0rem' }}>
                    {/* Complete On Your Own */}
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
                </li>
            </ul>
        </div>
    )
}

export default Assignments