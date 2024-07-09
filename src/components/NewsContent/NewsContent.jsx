import "./NewsContent.scss"
import { formatedDate } from "../../services/service.js"

const NewsContent = ({ news }) => {

	const { body, author, date } = news

	return (
		<div className="news-post">
			<div className="post__content" dangerouslySetInnerHTML={{ __html: body }}></div>
			<div className="post__content-footer row ">
				<div className="post__author">
					Автор: {author}
				</div>
				<div className="post__date">
					{formatedDate(date)}
				</div>
			</div>
		</div>
	)
}

export default NewsContent