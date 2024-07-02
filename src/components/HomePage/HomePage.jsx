import "./HomePage.scss"

import { useState, useEffect } from "react"
import { getNews } from "../../services/server"
import { formatedDate } from "../../services/service.js"
import { pictureDiscord, pictureTelegram } from "../../services/images.js"

const HomePage = () => {

	const [newsList, setNewsList] = useState([])

	useEffect(() => {
		getNews().then((data) => {
			if (data.status) {
				setNewsList(data.news)
			}
		})
	}, [newsList])

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
										newsList.map(post => {
											return (
												<div className="home__news-post" key={"post-" + post.id}>
													<div className="post__content" dangerouslySetInnerHTML={{ __html: post.body }}></div>
													<div className="post__content-footer row ">
														<div className="post__author">
															Автор: {post.author}
														</div>
														<div className="post__date">
															{formatedDate(post.date)}
														</div>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						}
						<div className="home__ads">
							<a href="#" className="home__ads-item">
								<h2>Телеграм</h2>
								<img src={pictureTelegram} alt="pictureTelegram" />
								<h3>Terroristy</h3>
								<p>Заходь у наш телеграм, тут ми спілкуємось та весело проводимо час.</p>
							</a>
							<a href="#" className="home__ads-item">
								<h2>Діскорд</h2>
								<img src={pictureDiscord} alt="pictureDiscord" />
								<h3>Terroristy</h3>
								<p>Заходь у наш діскорд, грати в голосову каналі набагато цікавіше.</p>
							</a>
						</div>
					</div>
				</div>
				<div className="home__hots row">
					<a href=""></a>
					<a href=""></a>
				</div>
			</section>
		</main>
	)
}

export default HomePage
