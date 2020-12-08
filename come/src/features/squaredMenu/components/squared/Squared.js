import React, {Component} from 'react'
import laptop from '../../../../Assets/laptop/4.png'
import webcam from '../../../../Assets/webcam/3.png'
import microphone from '../../../../Assets/micro/7.png'
import screen from '../../../../Assets/screen/8.png'
import stationerie from '../../../../Assets/stationeries/4.png'
import printer from '../../../../Assets/printer/6.png'
import support from '../../../../Assets/supports/3.png'
import keymouse from  '../../../../Assets/keymouse/1.png'
import blog from '../../../../Assets/blog/2.png'
import {NavLink} from "react-router-dom";





export default class Squared extends Component{
    render() {
        return(
            <div className="container mt-5">

                <div className="row mb-5">

                    <NavLink to="article" className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={laptop}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>

                        <div className="media-content ">
                            <p className="title is-4">Laptops</p>
                        </div>

                    </NavLink>

                    <div className="col-sm">

                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={webcam}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Webcams</p>
                        </div>


                    </div>

                    <div className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={microphone}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Microphones</p>
                        </div>
                    </div>

                </div>





                <div className="row mb-5">

                    <div className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={screen}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>

                            <div className="media-content ">
                                <p className="title is-4">Screens</p>
                            </div>

                    </div>

                    <div className="col-sm">

                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={stationerie}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Stationeries</p>
                        </div>


                    </div>

                    <div className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={printer}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Printers</p>
                        </div>
                    </div>

                </div>


                <div className="row">

                    <div className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={support}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Supports</p>
                        </div>
                    </div>

                    <div className="col-sm">

                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={keymouse}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content ">
                            <p className="title is-4">Keyboards & Mouses</p>
                        </div>

                    </div>

                    <div className="col-sm">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={blog}
                                     alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">

                            <div className="media-content ">
                                <p className="title is-4">Blog</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
