import starIcon from "../../assets/star.png"
import "./Card.css"

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
	let tagText
	let isOnline = location === "Online"
	
	// Method 1
	tagText = isOnline ? "online" : 
		(openSpots === 0 ? tagText = "sold out" : null)

	//Method 2
	// isOnline ? tagText = "online" :
	// openSpots === 0 ? tagText = "sold out" : null

	return (
		<section className="card">
			<div className="card-image" style={{backgroundImage: `url(../../assets/${img})`}}>
			{tagText && <p className="card-tag">{tagText}</p>}
			</div>
			<div className="card-details">
				<div className="rowOne">
					<img src={starIcon} alt="star icon" className="star-icon" />
					<div className="stats">
						<span className="rating">{rating} </span>
						<span className="reviews">({reviewCount}) </span>
						<span className="separator">•</span>
						<span className="location">{location} </span>
					</div>
				</div>
				<div className="rowTwo">
					<h2 className="title">{title}</h2>
					<p className="price">
						<span>From ${price}</span> / person
					</p>
				</div>
			</div>
		</section>
	)
}
