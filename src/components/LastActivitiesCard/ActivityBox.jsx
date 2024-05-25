import PropTypes from "prop-types";
import ActionIcon from "../../assets/icons/dashboard/action1.png";
import UserBlue24 from "../../assets/icons/typeUser/blue-24.png";
import UserGreen24 from "../../assets/icons/typeUser/green-24.png";

export const ActivityBox = ({ activity, index }) => {
  return (
    <div
      className={`row flex-nowrap align-items-center overflow-x-hidden my-2 activity ${
        index === 0 ? "new-activity" : "old-activity"
      }`}
    >
      <div className="col-2">
        <div className="text-hour-activity ">{activity.hour}</div>
      </div>
      <div className="col-1 status-activity ">
        <img src={ActionIcon} alt="action icon" className="mt-3" />
        <div className="lineagris" />
      </div>
      <div className="col-7">
        <div className="text-name-activity mx-1 text-truncate d-flex justify-content-start align-items-center">
          {activity.name}
        </div>
      </div>
      <div className="col-2 userimg d-flex justify-content-center align-items-center">
        <img
          className="img-user-type"
          src={`${activity.typeUser === "usuario" ? UserGreen24 : UserBlue24}`}
          alt="userimg"
        />
      </div>
    </div>
  );
};

ActivityBox.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    typeUser: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
