import { useMemo, useState } from "react";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./TravelDateSelector.css";
import LeftArrowIcon from '@/assets/icons/keyboard_arrow_left.svg?react';



export default function TravelDateSelector() {
    const today = new Date();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const monthsShown = useMemo(() => 2, []);

    const handleChange = ([start, end]: [Date | null, Date | null
    ]) => {
        setStartDate(start);
        setEndDate(end);
    }
    const renderHeader = ({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
    }: ReactDatePickerCustomHeaderProps) => (
        <div className="mb-14 flex justify-center">
            <button
                aria-label="Previous Month"
                className={"react-datepicker__navigation react-datepicker__navigation--previous"}
                onClick={decreaseMonth}
                style={{ visibility: customHeaderCount === 0 ? "visible" : "hidden" }}>
                <LeftArrowIcon />
            </button>
            <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("ko-KR", {
                    month: "long",
                    year: "numeric",
                })}
            </span>
            <button
                aria-label="Next Month"
                className={
                    "react-datepicker__navigation react-datepicker__navigation--next"
                }
                onClick={increaseMonth}
                style={{
                    visibility:
                        customHeaderCount === monthsShown - 1 ? "visible" : "hidden",
                }}
            >
                <LeftArrowIcon className="rotate-180" />
            </button>
        </div>
    );


    return (
        <DatePicker
            inline
            monthsShown={2}
            selectsRange
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            locale={ko}
            dateFormatCalendar="yyyy년 M월"
            minDate={today}
            maxDate={
                startDate !== null && endDate === null
                    ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 10)
                    : undefined}
            onChange={handleChange}
            renderCustomHeader={renderHeader}
        />
    )
}