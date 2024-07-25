import { List, ListItem, Paper } from "@mui/material";
import { ScheduleItem } from "./scheduleItem.tsx";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";
import { useState } from "react";

interface Props {
  data: ScheduleRecord[],
}

interface HoverTransform {
  shadow: number;
  transformX: number;
  transformY: number;
}


export const ScheduleList = ({ data }: Props) => {
  const [hoverEffect, setHoverEffect] = useState<HoverTransform>(
    { shadow: 10, transformX: 1, transformY: 1 });
  const listItems = data.map((item) => (
    <ListItem key={ item.taskName }><ScheduleItem
      task={ item.taskName }
      doneValue={ item.isTaskDone }
      abandonValue={ item.isTaskAbandon }
      isResultFixed={ item.isResultFixed }/></ListItem>
  ))
  return (
    <>
      <Paper sx={ {
        bgcolor: '#242424',
        color: 'primary.light',
        borderRadius: '20px',
        boxShadow: `0px 0px ${ hoverEffect.shadow }px #123455`,
        marginTop: 7,
        paddingY: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `scale3d(${ hoverEffect.transformX },${ hoverEffect.transformY },1)`,
        transition: 'all 300ms'
      } } elevation={ 10 } onMouseEnter={ () => setHoverEffect(
        { shadow: 100, transformX: 1.006, transformY: 1.006 }) }
             onMouseLeave={ () => setHoverEffect(
               { shadow: 10, transformX: 1, transformY: 1 }) }>
        <List>
          { listItems }
        </List>
      </Paper>
    </>
  );
}