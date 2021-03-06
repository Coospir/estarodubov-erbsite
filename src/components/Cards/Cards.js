import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my skills</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="https://miro.medium.com/max/1200/1*aK6-A2EmtFCYriaKgoguPw.png" text="HTML/CSS: for making cool and adaptive websites" label='Skills' path='/about-me'/>
                        <CardItem src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png" text="Javascript: to make website's life" label='Skills' path='/about-me'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src="https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png" text="React JS: level up of creating web apps" label='Skills' path='/about-me'/>
                        <CardItem src="https://www.surrealcms.com/uploads/nodejs-logo.png" text="Node JS: for getting data from the server" label='Skill ' path='/about-me'/>
                        <CardItem src="https://nemcd.com/wp-content/uploads/2019/08/php-slon.png" text="PHP 5.6+: for getting data from the server" label='Skills' path='/about-me'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards