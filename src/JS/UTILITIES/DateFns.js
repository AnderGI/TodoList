import { formatDistanceToNow } from "date-fns";
import { addWeeks } from "date-fns";
import { getDaysInMonth } from "date-fns";
export const timeDistanceFromNow = (date) => {
  if (typeof date === "string") {
    date = Date.parse(date);
  }

  return formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
  });
};
export const addWeeksFromDate = (date, numberOfWeeks) =>
  addWeeks(date, numberOfWeeks);

export const getDaysMonth = (date) => getDaysInMonth(date);
