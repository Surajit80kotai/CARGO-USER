import { addDays, differenceInMilliseconds, format, isAfter, parse } from 'date-fns';

export const timeDifferenceCalculation = (startTimeString, endTimeString) => {
    // Parse the time strings using date-fns
    const startTime = parse(startTimeString, 'h:mm:ssa', new Date());
    let endTime = parse(endTimeString, 'h:mm:ssa', new Date());

    // Check if endTime is before startTime
    if (!isAfter(endTime, startTime)) {
        // If it's not after, assume it's on the next day
        endTime = addDays(endTime, 1);
    };

    // Calculate the time difference in milliseconds
    const timeDifference = differenceInMilliseconds(endTime, startTime);

    // Convert the time difference to hours and minutes
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const formattedStartTime = format(startTime, 'h:mm a');
    const formattedEndTime = format(endTime, 'h:mm a');

    return {
        hours,
        minutes,
        formattedStartTime,
        formattedEndTime,
    }
};