import React from "react";

const q1 = "What is Telecommunism?";
const q2 = "What is the consumer?";
const q3 = "What will this new social order have to be like?"
const q4 = "Was the abolition of private property not possible at an earlier time?"
const a1 = "Telecommunism is the doctrine of the conditions of the liberation of consumers"
const a2 = `The consumer is a working class member of society who depends entirely on a private provider's resources
to perform daily and essential technological and communication based activities `
const a3 = `Above all, it will have to take the industrial control of telecommunications and all branches of production
therein out of the hands of the acompetitive corporation and instead institute a system where information systems
are operated by society as a whole`
const a4 = "blah"
const arr = [[q1,a1],[q2,a2],[q3,a3],[q4,a4]];

const Principles = arr.map((entry, index) => (
  <div key={index}>
		<h2>--{index + 1}--</h2>
    <h3>{entry[0]}</h3>
    <p>{entry[1]}</p>
  </div>
));
export default Principles;
