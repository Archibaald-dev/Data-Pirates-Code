import React, { Component } from 'react'
import one from '../../../../Assets/keymouse/1.png'
import two from '../../../../Assets/keymouse/2.png'
import three from '../../../../Assets/keymouse/3.png'
import four from '../../../../Assets/keymouse/4.png'
import five from '../../../../Assets/keymouse/5.png'
import six from '../../../../Assets/keymouse/6.png'
import seven from '../../../../Assets/keymouse/7.png'
import eight from '../../../../Assets/keymouse/8.png'




export default class KeyMouse extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={one} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Asus</h5>
                                <p className="card-text">This is a super keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={three} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Lenovo</h5>
                                <p className="card-text">This is a super cool keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={four} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Apple</h5>
                                <p className="card-text">This is a super strong keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={six} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Asus</h5>
                                <p className="card-text">This is a keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={five} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Asus</h5>
                                <p className="card-text">This is a super keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={two} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Lenovo</h5>
                                <p className="card-text">This is a super cool keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={seven} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Apple</h5>
                                <p className="card-text">This is a super strong keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src={eight} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Asus</h5>
                                <p className="card-text">This is a keyboard and mouse.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
