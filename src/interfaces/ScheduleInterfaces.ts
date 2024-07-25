export declare interface ScheduleRecord {
  taskName: string,
  isTaskDone?: boolean,
  isTaskAbandon?: boolean,
  isResultFixed: boolean,
}

export declare interface Schedule {
  scheduleName: string,
  scheduleDescription: string,
  scheduleRecords: ScheduleRecord[],
  scheduleEnded: boolean,
}