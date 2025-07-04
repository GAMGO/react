import React, { useEffect, useRef, useState } from 'react'
// import date from "../../lesson04_svr/TimeTable.json"
const API_BASE_URL = "http://localhost:5000/api/TimeTable"
export default function ScheduleTable() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false); //fetch 실행 중이면 true
  const fetchSch = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL); //GET요청, 두번째 인자(입력)X
      if (response.ok) {
        const data = await response.json();
        setSchedule(data)
        console.log(data)
      } else {
        console.error("Data Bringing Failer!", error)
      }
    } catch (error) {
      console.error("Network Malfunction.", error)
    } finally {//해당 구문이 끝나면 실행하는 함수
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSch();
  }, []);
  const handleSelected = (idx) => {
    setSchedule(schedule[idx]);
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {schedule.map((sch, idx) => (
          <button
            key={idx}
            onClick={() => handleSelected(idx)}
            disabled={schedule.date === sch.date}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: schedule.date === sch.date ? "#ccc" : "#007bff",
              color: schedule.date === sch.date ? "#666" : "white",
              border: "none",
              borderRadius: "4px",
              cursor: schedule.date === sch.date ? "not-allowed" : "pointer",
            }}
          >
            {sch.date}
          </button>
        ))}
      </div>
      <hr />
      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{schedule.date}</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                textAlign: "center",
              }}
            >
              TIME
            </th>
            {schedule.todos.map((t, idx) => (
              <th
                key={`time-${idx}`}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {t.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              TODO
            </td>
            {schedule.todos.map((t, idx) => (
              <td
                key={`todo-${idx}`}
                style={{ padding: "10px", textAlign: "center" }}
              >
                {t.text}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
