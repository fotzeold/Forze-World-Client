import "./RulesPage.scss"
import { useState } from "react";

const RulesPage = () => {
	const [chatRules, setChatRules] = useState(false)
	const [serverRules, setServerRules] = useState(false)

	return (
		<main>
			<div className="container">
				<section className="rules">
					<h1>Правила</h1>
					<div className="rules__label" onClick={() => setChatRules(prev => !prev)}>Діскорд та телеграм</div>
					<div className={`rules__body ${chatRules && "active"}`}>
						<p className="rules__body-title">{`1) 18+ контент`}</p>
						<p className="rules__body-warn">⚠️ Мут 3 години!</p>
						<p className="rules__body-title">{`2) Реклама будь чого у чаті, без згоди адміністрації `}</p>
						<p className="rules__body-warn">⚠️ Варн 1 шт. або мут на 2 години!</p>
						<p className="rules__body-title">{`3) Токсична поведінка, до неї входить:`}</p>
						<p className="rules__body-warn">
							- Зневага до учасників ком'юніті. <br />
							- Груба поведінка з іншими учасниками.<br />
							- Спам та погрози.<br />
							⚠️ Мут 30 хв!
						</p>
						<p className="rules__body-title">{`4) Будь-яка згадка про близьких.`}</p>
						<p className="rules__body-warn">⚠️ Мут 12 годин!</p>
						<p className="rules__body-title">{`5) Розповсюдження особистої інформації користувача без його згоди / поширення дизінформації, пов'язаної зі стрімерами/блогерами. Видача себе за іншу людину.`}</p>
						<p className="rules__body-warn">⚠️ Покарання залежить від масштабності порушення й вимог адміністрації.</p>
						<p className="rules__body-title">{`6) Будь-яка агресія до новачків чату.`}</p>
						<p className="rules__body-warn">⚠️ Мут 4 години!</p>
						<p className="rules__body-title">
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							‼️ Також модератори можуть змінювати час мута або кількість варнів(залежить від того, що зробив порушник).<br />
							‼️ Просимо вас якщо хтось порушує правила неодмінно скріньте й повідомляйте адміністрацію про порушення правила<br />
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							Адміни видають варни і мути!<br />
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							Видавати бани може тільки власник чату: <br />
							👑Roma👑 - @forzeoldgg
						</p>
					</div>
					<div className="rules__label" onClick={() => setServerRules(prev => !prev)}>Майнкрафт сервер</div>
					<div className={`rules__body ${serverRules && "active"}`}>
						<p className="rules__body-title">{`1) Реклама будь чого у чаті, без згоди адміністрації `}</p>
						<p className="rules__body-warn">⚠️ Бан 1 день!</p>
						<p className="rules__body-title">{`2) Токсична поведінка, до неї входить:`}</p>
						<p className="rules__body-warn">
							- Зневага до учасників ком'юніті. <br />
							- Груба поведінка з іншими учасниками.<br />
							- Спам та погрози.<br />
							- Згадка батьків<br />
							- Втручання в особистий простір іншого гравця - за наявності скарги!<br />
							⚠️ Бан 1 дeнь
						</p>
						<p className="rules__body-title">{`3) Кража та поломка чужих ресурсів / території`}</p>
						<p className="rules__body-warn">⚠️ Бан 3 дні</p>
						<p className="rules__body-title">{`4) Вбивство гравця!`}</p>
						<p className="rules__body-warn">⚠️ Бан 1 день</p>
						<p className="rules__body-title">
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							🚀 Можна вбивати лише гравців зі статусом [Герой], за це покарання не буде! 🚀<br />
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							‼️ Також модератори можуть змінювати час бану в залежить від того, що зробив порушник.<br />
							‼️ Просимо вас якщо хтось порушує правила неодмінно скріньте й повідомляйте адміністрацію про порушення правила<br />
							┄┄┄┄┄┄┄┄┄┄┄┄┄┄<br />
							Видавати бани може тільки власник серверу: <br />
							👑Roma👑 - @forzeold
						</p>
					</div>
				</section>
			</div>
		</main >
	)
}

export default RulesPage