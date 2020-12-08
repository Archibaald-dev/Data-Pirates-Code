import React, {Component} from 'react'
import one from '../../../../Assets/Logo_FW_CB.png'
import two from '../../../../Assets/blog/1.png'
import  '../../../../index.css'

export default class Home extends Component{
    render() {
        return(
            <div className="container">

                <img className="logoHome" src={one} alt="Card image cap" />
                <h2 class="firstTitle"> Lorem Ipsum</h2>
                <p class="firstParagraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                
                <img className="image2" src={two} alt="Card image cap" />
                <h2 class="secondTitle"> Lorem Ipsum</h2>
                <p class="secondParagraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            </div>
        )
    }
}
