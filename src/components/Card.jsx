import starIcon from "../assets/star.png"
import "./Card.css"

export default function Card() {
	return (
		<section className="card">
			<div className="card-image">
				<p className="card-tag">sold out</p>
			</div>
			<div className="card-details">
				<div className="rowOne">
					<img src={starIcon} alt="star icon" className="star-icon" />
					{/* <p>
					<span className="rating">5.0</span>
					<span className="reviews">(6)</span>
					<span className="location">USA</span>
				</p> */}
					<ul>
						<li>5.0</li>
						<li>(6)</li>
						<li>
							<span>USA</span>
						</li>
					</ul>
				</div>
				<div className="rowTwo">
					<p>Life lessons with Katie Zaferes</p>
					<p>
						<strong>From $136</strong> / person
					</p>
				</div>
			</div>
		</section>
	)
}
