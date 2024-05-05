import { useState } from "react";
import { Resend } from "resend";

function ContactMe() {
    const [userMail, setUserMail] = useState("");
    const [userSubject, setUserSubject] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const resendApiKey = import.meta.env.VITE_API_KEY_RESEND;
    const resend = new Resend(resendApiKey);

    const sendEmail = () => {
        try {
            console.log("Email enviado...");
            resend.emails.send({
                from: userMail,
                to: 'nadergomezj@gmail.com',
                subject: userSubject,
                html: `<p>${userMessage}</p>`
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="section contact-section-container">
            <div className="title-contact-container">
                <h2 className="title">Contact me</h2>
            </div>
            <form action="" className="contact-container">
                <div className="form-data-container email-info-container">
                    <label htmlFor="">Your email:</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Email"
                        onChange={(event) => setUserMail(event.target.value)}
                    />
                </div>
                <div className="form-data-container subject-info-container">
                    <label htmlFor="">Subject:</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Subject"
                        onChange={(event) => setUserSubject(event.target.value)}
                    />
                </div>
                <div className="form-data-container message-info-container">
                    <label htmlFor="">Message:</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="inputs text-area"
                        placeholder="Message"
                        onChange={(event) => setUserMessage(event.target.value)}
                    ></textarea>
                </div>
                <button
                    className="button-send"
                    onClick={sendEmail}
                >Send
                </button>
            </form>
        </section>
    );
}

export { ContactMe };