import React from "react";
import { useParams,useOutletContext } from "react-router-dom";
import styles from './Chapter.module.css'

function Chapter() {
  const {chapterId}=useParams();
  const course=useOutletContext();

  const chapter=course.chapters.find((chapter)=> String(chapter.chapter) === chapterId)
  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <p className={styles.para}>{chapter.details}</p>
    </div>
  );
}

export default Chapter;
