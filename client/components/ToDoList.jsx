import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ToDoCard({
  taskTitle,
  taskOwner,
  taskDescription,
  taskStatus,
  variantValue,
}) {
  const handleClick = function (clickType) {
    amplitude.track(clickType);
  };
  console.log(variantValue);
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
          data-amp-mask
          onClick={() => handleClick("View Personal Information")}
        >
          View Personal Information
        </button>
        <button onClick={() => handleClick("Task Deleted")}>Delete</button>
        {variantValue === "visible" ? (
          <button onClick={() => handleClick("Experimet Button Clicked")}>
            Experiment Button
          </button>
        ) : null}
      </CardContent>
    </Card>
  );
}
export default ToDoCard;
