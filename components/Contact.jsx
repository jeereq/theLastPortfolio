import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
	return (
		<>
			<div className="contact" id="contact">
				<div className="left"></div>
				<div className="right">
					<form>
						<h3>Let's talk.</h3>
						<p>lorem ipsum vas te faire foutre</p>

						<div className="input">
							<input type="text" name="name" placeholder="name"></input>
						</div>
						<div className="input">
							<input type="email" name="email" placeholder="email"></input>
						</div>
						<div className="input">
							<textarea
								name="message"
								placeholder="message"
								rows="4"
							></textarea>
						</div>
						<button type="submit">
							<FontAwesomeIcon icon={faShare} />
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
