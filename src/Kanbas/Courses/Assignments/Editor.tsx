import { useParams } from "react-router";

function AssignmentEditor() {
    const { aid } = useParams();
    const { cid } = useParams();
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                {/* Complete on your own */}
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <br /><br />
                        <label htmlFor="wd-text-entry">Online Entry Options</label><br />
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotations</label><br />
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        Assign
                    </td>
                    <td>
                        <label>Assign to</label><br />
                        <textarea id="wd-assign-to" placeholder="Everyone">Everyone</textarea>
                        <div id="wd-due-date">
                            <label>Due</label>
                        </div>
                        <div id="wd-due-date">
                            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="wd-available-from">Available From</label><br />
                                <input type="date" id="available-from" defaultValue="2024-05-06" />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="wd-available-until">Until</label><br />
                                <input type="date" id="available-until" defaultValue="2024-05-20" />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="right">
                        <button style={{ marginRight: '5px' }}>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AssignmentEditor