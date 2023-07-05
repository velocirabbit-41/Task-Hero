import React from "react";

const Base = () => {
    return (
        <div className="statusColumns">
            <div className="blank">
            </div>
            
            <div className="toDoColumn">
                To Do
            </div>
            
            <div className="inProgressColumn">
                In Progress
            </div>
            
            <div className="=inReviewColumn">
                In Review
            </div>

            <div className="completedColumn">
                Completed
            </div>
        </div>
    )
}

export default Base;