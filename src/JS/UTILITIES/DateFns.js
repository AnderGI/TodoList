import { formatDistanceToNow } from "date-fns";
import { addWeeks } from "date-fns";
import { getDaysInMonth } from "date-fns";
export const timeDistanceFromNow = (date) =>
  formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
  });

export const addWeeks = (date, numberOfWeeks) => addWeeks(date, numberOfWeeks);

export const getDaysMonth = (date) => getDaysInMonth(date);
