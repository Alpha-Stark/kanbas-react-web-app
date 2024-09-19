function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <button>Unpublish</button> <button>Publish</button>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                <button>Import Existing Content</button>
                <button>Import from Commons</button>
                <button>Choose Home Page</button>
                <button>View Course Stream</button>
                <button>New Announcement</button>
                <button>New Analysis</button>
                <button>View Course Notifications</button>
            </div>


        </div>
    )
}

export default CourseStatus