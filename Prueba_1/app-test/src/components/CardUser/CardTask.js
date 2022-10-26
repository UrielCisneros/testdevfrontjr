import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Avatar,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { red, green } from "@mui/material/colors";
export const labelCheck = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CardTask({ task, user }) {
    
    const [checkbox, setCheckbox] = useState(task.completed)
    const color = checkbox ? green[300] : red[500];

  return (
    <Card sx={{ width: 345, height: 180, m: 1.5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {user.name.charAt(0)}
          </Avatar>
        }
        title={task.title}
        subheader={`${user.name} - No. task ${task.id}`}
      />
      <CardContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Status task</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  {...labelCheck}
                  defaultChecked={task.completed}
                  value={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                  sx={{
                    color: red[500],
                    "&.Mui-checked": {
                      color: green[300],
                    },
                  }}
                />
              }
              label={`Task is ${checkbox ? "completed" : "incompleted"}`}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
