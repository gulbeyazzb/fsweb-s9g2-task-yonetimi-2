import {
  differenceInDays,
  formatDistance,
  formatDistanceToNow,
} from "date-fns";
import React from "react";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);
  const difDays = formatDistanceToNow(date, {
    addSuffix: true,
    locale: tr,
  });
  const accentClass =
    differenceInDays(date, new Date()) <= 3 ? "normal" : "urgent";
  return (
    <div className="task">
      <h3 className="text-lg text-colorOrange ">{taskObj.title}</h3>
      <div className="text-sm pt-1">
        son teslim: <span className={`${accentClass} `}>{difDays}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
