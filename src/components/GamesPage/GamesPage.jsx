import "./GamesPage.scss"
import { Link } from "react-router-dom"
import { ImCoinDollar } from "react-icons/im";

const GamesPage = () => {
	return (
		<main>
			<section className="games">
				<div className="container">
					<h1>Міні ігри</h1>

					<div className="games__box row">
						<Link className="nav-link" to={`/games/tap-frzc`} ><ImCoinDollar /><p>Тапалка</p></Link>
					</div>
				</div>
			</section>
		</main>
	)
}

export default GamesPage