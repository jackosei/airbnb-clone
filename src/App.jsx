import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "../src/data/data.js"

function App() {

	const CardComponents = cardData.map(({
		id, coverImg, stats, location, title, price, openSpots
		}) => 
			<Card 
				key={id}
				img={coverImg}
				rating={stats.rating}
				reviewCount={stats.reviewCount}
				location={location}
				title={title}
				price={price}
				openSpots={openSpots}
			/>   
	)

	return (
		<>
			<header>
				<Navbar />
				<Hero />
				<section className="experiences section">{CardComponents}</section>
			</header>
		</>
	)
}

export default App
