import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const handleClick = function (clickType) {
  amplitude.track(clickType);
};

function ToDoCard({
  taskTitle,
  taskOwner,
  taskDescription,
  taskStatus,
  variantValue,
}) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Task
        </Typography>
        <Typography variant="h5" component="div">
          Submit Timesheet
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          James Appleton
        </Typography>
        <Typography variant="body2">Due date: July 10, 2025</Typography>
        <br />
        <button
          id="view-profile-button"
          data-amp-mask
          onClick={() => handleClick("View Personal Information")}
        >
          View Personal Information
        </button>
        <button id="delete-button" onClick={() => handleClick("Task Deleted")}>
          Delete
        </button>
        {variantValue === "visible" ? (
          <button onClick={() => handleClick("Experiment Button Clicked")}>
            Experiment Button
          </button>
        ) : null}
      </CardContent>
    </Card>
  );
}
export default ToDoCard;
