import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ToDoCard({taskTitle, taskOwner, taskDescription, taskStatus}) {


  return (
    <Card> 
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Task
        </Typography>
        <Typography variant="h5" component="div">
          Complete Mock Presentation
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Motley fool data review</Typography>
        <Typography variant="body2">
          Due date: July 10, 2025
        </Typography>
      </CardContent>
    </Card>
  );
}
export default ToDoCard;