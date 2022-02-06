import React from "react";

const q1 = "Government?";
const q2 = "The Telecomms";
const q3 = "Small Businesses"
const q4 = "The FOSS Community"
const a1 = "The insight into unfettered data is used to control individuals, privacy and integrity stand at the centre of public telecommunications"
const a2 = "The Telecomm giants live in large, well maintained, manisons. They vacation in exotic locations. Are they concerned with assuming the status of public citizen? Does the executive society damage our freedom?"
const a3 = `Work shall not be inforced but your life bears a duty to work so you are able.`
const a4 = `Our skills and inheritance of knowledge permit us to live incredible lives. Without these tools and our ancestors these words would not exist.`
const arr = [[q1,a1],[q2,a2],[q3,a3],[q4,a4]];

const Positions = arr.map((entry, index) => (
  <div key={index}>
    <h3>-- {entry[0]} --</h3>
    <p>{entry[1]}</p>
  </div>
));
export default Positions;
