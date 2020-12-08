import React, {Component} from 'react'
import laptop from '../../../../Assets/laptop/4.png'




export default class ArticlesElements extends Component{
    render() {
        return(

            <div className="container d-flex">
                <div className="row">


                        <div className="col-sm">
                            <figure>
                                <img src={laptop} alt="article : laptop"/>
                            </figure>
                        </div>
                    <div className="tile is-ancestor col-sm">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">M1</p>
                                <p>M1 has the fastest CPU we’ve ever made. With that kind of processing speed,
                                    MacBook Air can take on new extraordinarily intensive tasks like professional-quality
                                    editing and action-packed gaming. But the 8‑core CPU on M1 isn‘t just up to 3.5x faster
                                    than the previous generation2 — it balances high-performance cores with efficiency cores
                                    that can still crush everyday jobs while using just a tenth of the power.</p>

                                <p>
                                    8-core CPU
                                    The 8-core CPU in M1 is the highest-performing CPU we’ve ever built,
                                    by far. It combines four performance cores and four efficiency cores
                                    that work together to tackle demanding multithreaded tasks, resulting
                                    in a quantum leap in performance at a fraction of the power — and
                                    a significant boost to battery life.
                                </p>

                                <p>
                                    Four performance cores
                                    Our high-performance core is the world‘s fastest CPU core when it comes
                                    to low-power silicon3 — and M1 has four of them combining their efforts
                                    for a massive boost in performance. Compile in Xcode in significantly
                                    less time. Record, mix, and master professional-quality music in Logic Pro
                                    with scores of tracks, plug‑ins, and virtual instruments. And create stunning
                                    images in Adobe Lightroom with unprecedented speed and responsiveness.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}
