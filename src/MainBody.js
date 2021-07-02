import React from 'react'

export const MainBody = () => {
    return (
        <form className="mainbody">
            <h3>Get in Touch</h3>
            <div className="fields">
                <input type="text" name="" id="field" placeholder="Your name"/>
                <input type="email" name="" id="field" placeholder="Your e-mail"/>
                <input type="number" name="" id="field" placeholder="Your number"/>
            </div>
            <textarea name="" id="message" cols="103" rows="10" placeholder="Message"></textarea>
            <div className="button">
                <input type="submit" value="Send Message"/>
            </div>     
        </form>
    )
}
