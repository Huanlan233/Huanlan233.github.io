var StartTime = new Date('2022/6/5 00:00:00'); // 获取开始时间

function runtime() {
    window.setTimeout("runtime()", 1000);
    var NowTime = new Date(); // 获取现在的时间

    Time = (NowTime.getTime() - StartTime.getTime()) / 1000; // 计算已存活时间(s)

    MaximumUnit = 365 * 24 * 60 * 60; // 最大单位

    Year = Time / MaximumUnit;
    YearINT = Math.floor(Year);

    Month = (Year - YearINT) * 12;
    MonthINT = Math.floor(Month);

    Day = (Month - MonthINT) * (365/12); //平均天数，防止出现过大的偏差
    DayINT = Math.floor(Day);

    Hour = (Day - DayINT) * 24;
    HourINT = Math.floor(Hour);

    Minute = (Hour - HourINT) * 60;
    MinuteINT = Math.floor(Minute);

    Second = Math.floor((Minute - MinuteINT) * 60);


    runtime_span.innerHTML = "本站勉强运行了" + YearINT + "年 " + MonthINT + "月 " + DayINT + "天 " + HourINT + "时 " + MinuteINT + "分 " + Second + "秒";
    // 将数据替换到Span上
};
setInterval("runtime()", 1000); // 重复运行，时刻更新数据
runtime();