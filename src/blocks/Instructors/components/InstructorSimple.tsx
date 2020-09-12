import React, { memo, ReactNode } from "react";

const InstructorSimple = ({
  imgSrc,
  name,
  jobTitle,
}: {
  imgSrc: string;
  name?: ReactNode;
  jobTitle?: ReactNode;
}) => {
  return (
    <div className="container-fluid instructorSimple">
      <div>
        <img
          src={imgSrc}
          alt="instructor"
          className="rounded-circle instructorImgContainer"
          width={200}
        />
      </div>
      <div className="instructorName row-cols-4">{name}</div>
      <div className="instructorTitle row-cols-4">{jobTitle}</div>
    </div>
  );
};

export default memo(InstructorSimple);
