import { adminTimetable, week } from "@/constants";

function Timetable() {
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-8jgo">
            <span className="font-bold">Time</span>
          </th>
          {week.map((day: string) => (
            <th className="tg-aw21" key={day}>
              <span className="font-bold">{day}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tg-8jgo">09:00-12:00</td>
          {adminTimetable.first.map((name: string) => (
            <td key={"first: " + name} className="tg-8jgo">
              {name}
            </td>
          ))}
        </tr>
        <tr>
          <td className="tg-8jgo">13:00-16:00 (A)</td>
          {adminTimetable.second.map((name: string) => (
            <td key={"second: " + name} className="tg-8jgo">
              {name}
            </td>
          ))}
        </tr>
        <tr>
          <td className="tg-8jgo">13:00-16:00 (B)</td>
          {adminTimetable.third.map((name: string) => (
            <td key={"third: " + name} className="tg-8jgo">
              {name}
            </td>
          ))}
        </tr>
        <tr>
          <td className="tg-8jgo">18:00-21:00</td>
          {adminTimetable.last.map((name: string) => (
            <td key={"last: " + name} className="tg-8jgo">
              {name}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Timetable;
