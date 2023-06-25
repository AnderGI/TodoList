import { formatDistanceToNow } from "date-fns";

export const timeDistanceFromNow = (date) =>
  formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
  });
