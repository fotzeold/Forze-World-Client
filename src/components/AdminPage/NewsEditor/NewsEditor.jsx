import "./NewsEditor.scss"
import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState } from "react"

import NewsContent from "../../NewsContent/NewsContent"
import TextEditor from "../../TextEditor/TextEditor"
import { postNews } from "../../../services/server";

const NewsEditor = ({ user, newsControll }) => {
	const [content, setContent] = useState("")

	const { newsList, setNewsList } = newsControll

	const onContentChange = (newContent) => {
		setContent(newContent)
	}

	const sendNews = () => {
		let newNews = {
			author: "forzeold",
			body: "<figure>Обнова</figure>" + content
		}

		postNews(newNews).then(data => {
			if (data && data.status) {
				setNewsList(data.news)
				window.alert("Новину опубліковано")
			}
		})
	}

	return (
		<section className="news__editor">
			<div className="grid">
				<div className="admin__editor">
					<h1>Добавити новину</h1>
					<TextEditor onContentChange={onContentChange} />
				</div>
				{
					content ?
						<div className="news__preview">
							<h2 className="news__preview-title">Попередній перегляд</h2>
							<NewsContent news={{ author: "forzeold", body: content, date: new Date().toISOString() }} />
							<button onClick={sendNews}>Опублікувати</button>
						</div> :
						<div className="news__preview">
							<h2 className="news__preview-title">Попередній перегляд</h2>
							<SkeletonTheme baseColor="#751DC6" highlightColor="#9540E3">
								<p>
									<Skeleton count={1} height={150} />
								</p>
							</SkeletonTheme>
						</div>
				}
			</div>
		</section>
	)
}

export default NewsEditor