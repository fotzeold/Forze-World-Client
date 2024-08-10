import "./TapCoin.scss";
import { tapPig } from "../../../services/images.js";
import { useState } from "react";

const TapCoin = () => {
	const [currCoin, setCurrCoin] = useState(0);
	const [stamina, setStamina] = useState(100);
	const [chance, setChance] = useState(3)
	const [coinPops, setCoinPops] = useState([]);

	const tapCoinHandle = (event) => {
		if (stamina != 0) {
			const rect = event.target.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			setCurrCoin((prev) => prev + 1);
			setStamina((prev) => prev - 0.1);

			const newCoin = { id: Date.now(), x, y };

			setCoinPops((prev) => [...prev, newCoin]);
			setTimeout(() => {
				setCoinPops((prev) => prev.filter((coin) => coin.id !== newCoin.id));
			}, 1000);
		} else {
			if (chance != 0) {
				setChance(prev => prev - 1)
				setStamina(100)
			}
		}
	};

	return (
		<main>
			<section className="tap-coin">
				<div className="container">
					<div className="tap-coin__wrapper row">
						<div className="tap-coin__total">
							<h1>{currCoin}</h1>
						</div>
						<div className="tap-coin__target">
							<img src={tapPig} alt="tapPig" onClick={tapCoinHandle} />
							{coinPops.map((coin) => (
								<div
									key={coin.id}
									className="coin-popup"
									style={{ left: `${coin.x}px`, top: `${coin.y}px` }}
								>
									+1
								</div>
							))}
						</div>
						<div className="tap-coin__progress row">
							<div className="progress__counter">{chance}</div>
							<div className="progress__bar">
								<div
									className="progress__bar-element"
									style={{ width: stamina + "%" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default TapCoin;