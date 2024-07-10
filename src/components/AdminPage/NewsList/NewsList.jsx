import "./NewsList.scss"
import NewsContent from "../../NewsContent/NewsContent"
import { deleteNews } from "../../../services/server.js"

const NewsList = ({ newsControll }) => {

	const { newsList, setNewsList } = newsControll

	const removeNews = (id) => {
		let status = window.confirm("Ви дійсно бажаєте видалити новину?")

		if (status) {
			deleteNews(id).then(data => {
				if (data && data.status) {
					setNewsList(data.news)
				}
			})
		}
	}

	return (
		<section className="news__list">
			{
				newsList.length > 0 && <div className="news__list-news">
					<h1>Новини</h1>
					<div className="news__list-wrapper">
						{
							newsList.map(post => <div key={"admin-news-" + post.id} className="news__list-item">
								<NewsContent news={post} />
								<button onClick={() => removeNews(post.id)} className="news__list-delete btn">Видалити</button>
							</div>)
						}
					</div>
				</div>
			}
		</section>
	)
}

export default NewsList

