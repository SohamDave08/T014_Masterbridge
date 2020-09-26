import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getAnalytics } from '../../actions/courseActions'

const ShowAll = ({ show, getAnalytics, current }) => {

    const showan = (userid) => {
        getAnalytics(current._id, userid)
    }

    return (
        <div>
            <div className="container">
                <h1>
                    <span class="grey-text">All</span>
                    <span className="teal-text"> Students</span>
                </h1>
            </div>
            { show && show.map(sh =>
                <div className="container" float="left" width="50%">
                    <div className="col s6 m4 l6">
                        <div className="card">
                            <div class="card-content">
                                <span>
                                    <h4>
                                        <span>{sh.name}</span>&nbsp;&nbsp;
                                        <Link
                                            to="/getAnalytics"
                                            class="btn-floating waves-effect waves-light teal"
                                            onClick={showan.bind(this, sh._id)}

                                        >
                                            <i class="material-icons">keyboard_arrow_right</i>
                                        </Link>
                                    </h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>


    )
}


const mapStateToProps = (state) => ({
    show: state.course.show,
    current: state.course.currentCourse
})

export default connect(mapStateToProps, { getAnalytics })(ShowAll)
