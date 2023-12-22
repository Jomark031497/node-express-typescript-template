import { format } from 'date-fns';
import { pino } from 'pino';

export const logger = pino({
  base: {
    pid: false,
  },
  transport: {
    // level: 'info',
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },

  timestamp: () => `,"time":"${format(new Date(), 'hh:mm:ss aa | MMM-dd-yyyy')}"`,
});
