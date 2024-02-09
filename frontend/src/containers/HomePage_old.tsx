// import Button from "@mui/material/Button";
import "./HomePage.css";
import "../images/MKS_environment.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Introduction } from "../components/Introduction";
import ImageURL from "../images/MKS_environment.jpg";

export const HomePage = () => {
  const navigate = useNavigate();
  // const navigate = useNavigate();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const scheduleData = [
    [
      "9:00-12:00",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "13:00-16:00 (A)",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "13:00-16:00 (B)",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "18:00-21:00",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
  ];

  return (
    <div>
      <div>
        {/* <div>Home Page</div>
        <p>
          歡迎來到 Virtual MakerSpace 的首頁
          這裡有東西囉
          <br />
          應該要有:簡略公告、常用連結、管理員班表
        </p> */}
        <div style={{ position: "relative", maxWidth: "100%" }}>
          <img
            src={ImageURL}
            alt="Environment"
            style={{ width: "100%", zIndex: -1, position: "relative" }}
            useMap="#image-map"
          />
          <map name="image-map">
            <area
              shape="rect"
              coords="x1,y1,x2,y2"
              alt="Learn More"
              href="LearnMore"
            />
            {/* Define the coordinates (x1, y1, x2, y2) for the clickable area */}
          </map>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 8,
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "xxx-large",
                marginBottom: "16px",
              }}
            >
              New To Us ?
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "xxx-large",
                marginTop: "0px",
              }}
            >
              Click here to learn more!
            </p>
            <a href="LearnMore">
              <button>
                <Link
                  to="/TutorialPage"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  Go
                </Link>
              </button>
            </a>
          </div>
        </div>
        <div>
          <b>Announcement</b>
          <br />
          <button onClick={() => navigate("/AnnouncementPage")}>
            View all
          </button>
          <br />
          <b>
            <h3>常用連結</h3>
          </b>
          <br />
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <b>Opening Hours</b>
            </div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Time</th>
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((shifts, index) => (
                  <tr key={index}>
                    {shifts.map((shift, shiftIndex) => (
                      <td key={shiftIndex}>{shift}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Introduction />
      </div>
    </div>
  );
};

// import { useNavigate } from "react-router-dom"

// export const HomePage = () => {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <div>Home Page</div>
//       <p>
//         歡迎來到 Virtual MakerSpace的首頁
//         這裡空空如也
//         <br></br>
//         應該要有:簡略公告、常用連結、管理員班表
//       </p>
//       <div>
//         <b>Announcement</b>
//         <br></br>
//         <button onClick={() => navigate("/AnnouncementPage")}>View all</button>
//         <br></br>
//         <b>常用連結</b>
//         <br></br>
//         <button>Edit</button>
//         <br></br>
//         <div>
//           <b>班表</b>
//         </div>
//       </div>
//     </div>
//   )
// }
