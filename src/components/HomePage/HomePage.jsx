import "./HomePage.scss"

import NewsContent from "../NewsContent/NewsContent"

import {
	pictureDiscord,
	pictureTelegram,
	iconDiscord,
	iconTelegram,
} from "../../services/images.js"

const HomePage = ({ newsList }) => {
	return (
		<main>
			<section className="home">
				<div className="container">
					<div className="home__wrapper row">
						{
							newsList.length > 0 && <div className="home__news">
								<h1>Новини</h1>
								<div className="home__news-list">
									{
										newsList.map(post => <NewsContent news={post} key={"post-" + post.id} />)
									}
								</div>
							</div>
						}
						<div className="home__ads">
							<a href="https://t.me/terraria_forze" className="home__ads-item">
								<h2>Телеграм</h2>
								<img src={pictureTelegram} alt="pictureTelegram" />
								<h3>Terroristy</h3>
								<p>Заходь у наш телеграм, тут ми спілкуємось та весело проводимо час.</p>
							</a>
							<a href="https://discord.gg/TP5apEQMMD" className="home__ads-item">
								<h2>Діскорд</h2>
								<img src={pictureDiscord} alt="pictureDiscord" />
								<h3>Terroristy</h3>
								<p>Заходь у наш діскорд, грати в голосову каналі набагато цікавіше.</p>
							</a>
						</div>
					</div>
				</div>
				<div className="home__hots row">
					<a href="https://t.me/terraria_forze"><img src={iconTelegram} alt="iconTelegram" /></a>
					<a href="https://discord.gg/TP5apEQMMD"><img src={iconDiscord} alt="iconDiscord" /></a>
				</div>
			</section>
		</main>
	)
}

export default HomePage
