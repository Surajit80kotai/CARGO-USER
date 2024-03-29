(function () {
    var MONTHS_LONG = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var DAYS_LONG = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var dateInputElement = document.querySelector(".dateinput");
    if (dateInputElement) {
        dateInputElement.addEventListener("click", displayCalendar);
    }

    document.body.addEventListener("click", clickDayEvent);

    function clickDayEvent(evt) {
        var selectedMonth, calendarElem, currentYear, currentMonth;

        if (
            evt.target.classList.contains("calendar-day") ||
            evt.target.closest(".calendar-day")
        ) {
            let target = evt.target.classList.contains("calendar-day")
                ? evt.target
                : evt.target.closest(".calendar-day");
            if (!target.dataset.date) {
                return;
            }
            target
                .closest(".calendar")
                .querySelector(".dateinput").value = humanReadableDate(
                    target.dataset.date + "T00:00:00"
                );
            target.closest(".calendar").querySelector(".dateinput").dataset.value =
                target.dataset.date;

            // Extracted shipment date
            var shipmentDate = target.dataset.date;

            // Set the shipment date in formValues
            setFormValues({ ...formValues, shipmentDate });

            target.closest(".calendar").classList.remove("calendar-open");
            target.closest("#calendarElem").remove();
            return;
        }

        if (
            evt.target.tagName === "BUTTON" &&
            evt.target.classList.contains("previous")
        ) {
            calendarElem = evt.target
                .closest(".calendar")
                .querySelector("#calendarElem");

            selectedMonth = new Date(
                calendarElem.dataset.selectedMonth + "T00:00:00"
            );

            currentYear = selectedMonth.getFullYear();
            currentMonth = parseInt(selectedMonth.getMonth(), 10);

            if (currentMonth - 1 < 0) {
                currentMonth = 12;
                currentYear = currentYear - 1;
            }

            var previousMonth = currentYear + "-" + leadingZero(currentMonth) + "-01";

            buildCalendarView(
                calendarElem,
                previousMonth,
                evt.target.closest(".calendar").querySelector(".dateinput").dataset.value
            );
        }

        if (
            evt.target.tagName === "BUTTON" &&
            evt.target.classList.contains("next")
        ) {
            calendarElem = evt.target
                .closest(".calendar")
                .querySelector("#calendarElem");

            selectedMonth = new Date(
                calendarElem.dataset.selectedMonth + "T00:00:00"
            );

            currentYear = selectedMonth.getFullYear();
            currentMonth = parseInt(selectedMonth.getMonth(), 10) + 2;

            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear = currentYear + 1;
            }

            previousMonth = currentYear + "-" + leadingZero(currentMonth) + "-01";

            buildCalendarView(
                calendarElem,
                previousMonth,
                evt.target.closest(".calendar").querySelector(".dateinput").dataset.value
            );
        }
    }

    function leadingZero(num) {
        return String(num).length < 2 ? "0" + num : num;
    }

    function humanReadableDate(date) {
        date = new Date(date);

        return (
            DAYS_LONG[date.getDay()] +
            ", " +
            MONTHS_LONG[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()
        );
    }

    function displayCalendar(evt) {
        var elem = evt.currentTarget;
        elem.blur();

        var calendarElem = document.getElementById("calendarElem");

        if (elem.closest(".calendar").classList.contains("calendar-open")) {
            if (calendarElem) {
                calendarElem.parentNode.removeChild(calendarElem);
            }
            elem.closest(".calendar").classList.remove("calendar-open");
            return;
        }

        if (!calendarElem) {
            calendarElem = document.createElement("div");
            calendarElem.id = "calendarElem";
            calendarElem.classList.add("calendar-element");
        }

        elem.closest(".calendar").classList.add("calendar-open");
        elem.closest(".calendar").appendChild(calendarElem);

        /* Get today's date if one is not passed */
        var selectedDate = elem.dataset.value
            ? new Date(elem.dataset.value + "T00:00:00")
            : new Date();

        var selectedDateFormatted =
            selectedDate.getFullYear() +
            "-" +
            leadingZero(selectedDate.getMonth() + 1) +
            "-" +
            leadingZero(selectedDate.getDate());

        elem.dataset.value = selectedDateFormatted;
        elem.value = humanReadableDate(selectedDate);

        //console.log(buildCalendarViewArray(selectedDateFormatted));

        buildCalendarView(
            calendarElem,
            selectedDateFormatted,
            selectedDateFormatted
        );
    }

    function buildCalendarView(
        calendarElem,
        selectedMonthFormatted,
        selectedDateFormatted
    ) {

        var selectedDate = new Date(selectedMonthFormatted + "T00:00:00");

        calendarElem.innerHTML =
            '<div class="calendar-title"><button class="previous">Previous</button>' +
            MONTHS_LONG[selectedDate.getMonth()] +
            " " +
            selectedDate.getFullYear() +
            '<button class="next">Next</button></div>' +
            '<div class="calendar-week title">' +
            '  <div class="calendar-day"><span>Su</span></div>' +
            '  <div class="calendar-day"><span>Mo</span></div>' +
            '  <div class="calendar-day"><span>Tu</span></div>' +
            '  <div class="calendar-day"><span>We</span></div>' +
            '  <div class="calendar-day"><span>Th</span></div>' +
            '  <div class="calendar-day"><span>Fr</span></div>' +
            '  <div class="calendar-day"><span>Sa</span></div>' +
            "</div>";

        calendarElem.dataset.selectedMonth = selectedMonthFormatted;
        calendarElem.dataset.selectedDate = selectedDateFormatted;

        buildCalendarViewArray(
            selectedMonthFormatted,
            selectedDateFormatted
        ).forEach(function (week) {
            var weekElem = document.createElement("div");
            weekElem.classList.add("calendar-week");

            week.forEach(function (day) {
                var dayElem = document.createElement("div");
                dayElem.classList.add("calendar-day");

                dayElem.dataset.date = day.year + "-" + day.month + "-" + day.date;

                if (day.weekend) {
                    dayElem.classList.add("weekend");
                }

                if (day.inactive) {
                    dayElem.classList.add("inactive");
                }

                if (day.today) {
                    dayElem.classList.add("today");
                }

                if (day.selected) {
                    dayElem.classList.add("selected");
                }

                dayElem.innerHTML = "<span>" + parseInt(day.date, 10) + "</span>";

                weekElem.appendChild(dayElem);
            });

            calendarElem.appendChild(weekElem);
        });
    }

    function buildCalendarViewArray(selectedMonthFormatted, selectedDateFormatted) {
        const selectedMonth = new Date(selectedMonthFormatted + "T00:00:00");
        const theCurrentDate = new Date();

        const selectedMonthStart = new Date(
            `${selectedMonth.getFullYear()}-${leadingZero(
                selectedMonth.getMonth() + 1
            )}-01T00:00:00`
        );
        const selectedMonthStartDay = selectedMonthStart.getDay();
        const selectedMonthTotalDays = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            0
        ).getDate();
        const selectedMonthEndDay = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            selectedMonthTotalDays
        ).getDay();

        const previousMonth = leadingZero(
            new Date(
                selectedMonth.getFullYear(),
                selectedMonth.getMonth(),
                0
            ).getMonth() + 1
        );
        const previousMonthYear = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            0
        ).getFullYear();
        const previousMonthTotalDays = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth(),
            0
        ).getDate();

        const nextMonth = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            1
        ).getMonth();
        const nextMonthYear = new Date(
            selectedMonth.getFullYear(),
            selectedMonth.getMonth() + 1,
            1
        ).getFullYear();

        const today = `${theCurrentDate.getFullYear()}-${leadingZero(
            theCurrentDate.getMonth() + 1
        )}-${leadingZero(theCurrentDate.getDate())}`;

        let i = 0;
        let calendar = [];
        let day;

        /* Setup the number of weeks in the selected month's view */
        const weeksInMonth = Math.ceil(
            (selectedMonthTotalDays + selectedMonthStartDay) / 7
        );
        for (i = 0; i < weeksInMonth; i++) {
            calendar.push([]);
        }

        const formattedObject = (
            day,
            inactive,
            displayShortMonth,
            isFirstDayOfPreviousMonth
        ) => {
            return {
                year: day.getFullYear(),
                date: leadingZero(day.getDate()),
                month: leadingZero(day.getMonth() + 1),
                ...(isFirstDayOfPreviousMonth
                    ? {
                        isFirstDayOfPreviousMonth: isFirstDayOfPreviousMonth
                    }
                    : {}),
                ...(today ===
                    `${day.getFullYear()}-${leadingZero(day.getMonth() + 1)}-${leadingZero(
                        day.getDate()
                    )}`
                    ? {
                        today: "today"
                    }
                    : {}),
                ...(day.getDay() === 0 || day.getDay() === 6
                    ? {
                        weekend: "weekend"
                    }
                    : {}),
                ...(inactive
                    ? {
                        inactive: "inactive"
                    }
                    : {}),
                ...(displayShortMonth || isFirstDayOfPreviousMonth
                    ? {
                        displayShortMonth: true
                    }
                    : {}),
                ...(selectedDateFormatted ===
                    `${day.getFullYear()}-${leadingZero(day.getMonth() + 1)}-${leadingZero(
                        day.getDate()
                    )}`
                    ? { selected: true }
                    : {})
            };
        };

        /* Add previous month's final days to the first week, and populate first week */
        for (
            i = Math.abs(selectedMonthStartDay - 8) - 7;
            i <= 7 - selectedMonthStartDay;
            i++
        ) {
            let isFirstDayOfPreviousMonth = false;

            day = new Date(
                `${selectedMonth.getFullYear()}-${leadingZero(
                    selectedMonth.getMonth() + 1
                )}-${leadingZero(i)}T00:00:00`
            );

            if (i <= 0) {
                day = new Date(
                    `${previousMonthYear}-${leadingZero(previousMonth)}-${leadingZero(
                        previousMonthTotalDays + i
                    )}T00:00:00`
                );
            }

            /* Determine if this is the first date of the previous month that is visible */
            if (i === Math.abs(selectedMonthStartDay - 8) - 7) {
                isFirstDayOfPreviousMonth = true;
            }

            calendar[0].push(
                formattedObject(day, i <= 0, i === 1, isFirstDayOfPreviousMonth)
            );
        }

        /* Add the current month's remaining days to the calendar */
        let currentWeek = 1;
        let currentDayOfWeek = 0;

        for (i = 8 - selectedMonthStartDay; i <= selectedMonthTotalDays; i++) {
            currentDayOfWeek++;
            day = new Date(
                `${selectedMonth.getFullYear()}-${leadingZero(
                    selectedMonth.getMonth() + 1
                )}-${leadingZero(i)}T00:00:00`
            );
            calendar[currentWeek].push(formattedObject(day));

            if (currentDayOfWeek === 7) {
                currentDayOfWeek = 0;
                currentWeek++;
            }
        }

        /* Fill in the final week with the days from the next month */
        for (i = 1; i < 7 - selectedMonthEndDay; i++) {
            day = new Date(
                `${nextMonthYear}-${leadingZero(nextMonth + 1)}-${leadingZero(
                    i
                )}T00:00:00`
            );
            calendar[currentWeek].push(formattedObject(day, true, i === 1));
        }

        return calendar;
    }
})();