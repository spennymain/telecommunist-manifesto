import React from "react";
import { hot } from 'react-hot-loader'

import * as provCons from './ProvidersConsumers'
import * as preface from './PrefaceText'
import './Manifesto.css'
class Manifesto extends React.Component {
  render() {
		return (
			<div className="Manifesto">
				<header><h1>The Manifesto of the Telecommunist Party</h1></header>
			 <h1>Preface</h1>
				<p>{preface.briefIntro}</p>
				<p>{preface.result}</p>
			 <h1>I. Providers and Consumers</h1>
				<p>{provCons.introClassStructure}</p>
				<p>{provCons.theProviders}</p>
			 <h1>II. Consumers and Telecommunists</h1>
			 <h1>III. Principles of Telecommunism</h1>
			 <h1>IV. Demands of the Telecommunist Party in Canada</h1>
			 <h1>V. Position of the Telecommunists in Relation to the Various Opposing Parties</h1>
			</div>
		)
  }
}
export default hot(module)(Manifesto)
