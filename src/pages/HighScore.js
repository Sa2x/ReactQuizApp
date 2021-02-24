import React from "react";
import HighScoreTable from "../components/HighScoreTable";

const HighScore = () => {
  const columns = [
    {
      Header: "User",
      accessor: "user",
    },
    {
      Header: "Point",
      accessor: "point",
    },
  ];

  return (
    <div className="highscore">
      <HighScoreTable columns={columns} />
    </div>
  );
};

export default HighScore;
