import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { useParams,Link, Outlet } from "react-router-dom";

function Learn() {
  const {courseId}=useParams();
  const course=coursesData.find((course) => course.id === courseId);
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>{course.title}</h1>
        <h4>{course.description}</h4>
      </div>
      <div className={style.chapters}>
        <h1>Chapters</h1>
        <ul>
          {course.chapters.map((chap, i) => {
            return (
              <div className={style.chapterId} key={i}>
                <Link to={`chapter/${chap.chapter}`}>
                {chap.title}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={style.courses}>
        <Outlet context={{...course}}/>
      </div>
    </div>
  );
}

export default Learn;
