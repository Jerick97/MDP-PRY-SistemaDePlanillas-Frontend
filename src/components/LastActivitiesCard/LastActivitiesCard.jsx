import { ActivityBox } from "./ActivityBox";
import "./style/LastActivitie.css";
import { FaSortUp } from "react-icons/fa6";
import PropTypes from "prop-types";

export const LastActivitiesCard = ({ activities, handleAddActivity }) => {
  return (
    <div className={`card-custom border`}>
      <div className="container position-relative py-3">
        <h5 className="title-lastActivities">Actividades Recientes</h5>
        <FaSortUp
          className="rec-close"
          onClick={handleAddActivity}
          size={28}
          color="gray"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="container mx-auto">
            <div className="row flex-nowrap align-items-center overflow-hidden">
              <div className="col-4">
                <div className="header-cardActivities text-truncate">Hora</div>
              </div>
              <div className="col-5 ">
                <div className="header-cardActivities text-truncate">
                  Actividad reciente
                </div>
              </div>
              <div className="col-3 ">
                <div className="header-cardActivities-img text-center ps-3">
                  <img
                    src="../../src/assets/icons/dashboard/points.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="last-activities overflow-auto">
            {activities.map((activity, index) => (
              <ActivityBox
                key={activity.id}
                index={index}
                activity={activity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LastActivitiesCard.propTypes = {
  activities: PropTypes.array.isRequired,
  handleAddActivity: PropTypes.func.isRequired,
};
