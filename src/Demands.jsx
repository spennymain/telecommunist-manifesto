import React from "react";
import './Demands.css'
const e1 = `1. A minimal centralized agency tasked with providing telecommunications
as a secure, reliable, and affordable utility to all houses as is done with water and electricity.`
const e2 = `2. A partnership with public universities to create competitive research programs
dedicated to expanding and improving our technological infrastructure`
const a1 = `1. The working class consumers' dependency on private, for-profit, telecom
companies to provide services essential for day-to-day life.`
const a2 = `2. blah blah blah`
const Demands = () => (
	<div className="Demands">
		<div className="establish"><h2><u>Establish</u></h2>
			<p>{e1}</p>
			<p>{e2}</p>
		</div>
		<div className="abolish"><h2><u>Abolish</u></h2>
			<p>{a1}</p>
			<p>{a2}</p>
		</div>
	</div>
);
export default Demands; 
