import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Scheduler from "devextreme-react/scheduler";
import * as AspNetData from "devextreme-aspnet-data-nojquery";

const Container = styled.div`
/*height: 600px;*/
height: 105vh;
padding-bottom: 250px;
`;

const Schedule = (props) => {
  const url = "https://js.devexpress.com/Demos/Mvc/api/SchedulerData";
  const dataSource = AspNetData.createStore({
    key: "AppointmentId",
    loadUrl: `${url}/Get`,
    insertUrl: `${url}/Post`,
    updateUrl: `${url}/Put`,
    deleteUrl: `${url}/Delete`,
    onBeforeSend(_, ajaxOptions) {
      ajaxOptions.xhrFields = { withCredentials: true };
    }
  });

  const views = ["day", "week", "month"];

  function getCityName() {
    const city = props.match.params.id;
    return city;
  }

  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
  const handlePropertyChange = useCallback((e) => {
    if (e.name === "currentDate") {
      setCurrentDate(e.value);
    }
  }, []);

  return (
    <Container style={{ overflowY: "hidden" }}>
      <Scheduler
        id={getCityName()}
        dataSource={dataSource}
        views={views}
        firstDayOfWeek={1}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        currentView="week"
        currentDate={currentDate}
        height={600}
        startDayHour={9}
        endDayHour={18}
        timeZone="CET"
        remoteFiltering={true}
        dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
        textExpr="Text"
        startDateExpr="StartDate"
        endDateExpr="EndDate"
        allDayExpr="AllDay"
        recurrenceRuleExpr="RecurrenceRule"
        recurrenceExceptionExpr="RecurrenceException"
        onOptionChanged={handlePropertyChange}
      />
    </Container>
  );
};

export default Schedule;
