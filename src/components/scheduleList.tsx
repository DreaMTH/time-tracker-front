import { List, ListItem } from "@mui/material";
import { ScheduleItem } from "./scheduleItem.tsx";
import { ScheduleRecord } from "../interfaces/ScheduleInterfaces.ts";

interface Props {
  data: ScheduleRecord[],
}

export const ScheduleList = ({ data }: Props) => {
  const listItems = data.map((item) => (
    <ListItem key={ item.taskName }><ScheduleItem task={ item.taskName }
                                                  doneValue={ item.isTaskDone }
                                                  abandonValue={ item.isTaskAbandon }
                                                  isResultFixed={ item.isResultFixed }/></ListItem>
  ))
  return (
    <>
      <List >
        { listItems }
      </List>
    </>
  );
}