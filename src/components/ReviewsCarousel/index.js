import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="reviews-carousel-container">
        <h1 className="heading"> Reviews </h1>
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="username"> {username} </p>
        <p className="company-name"> {companyName} </p>
        <p className="description"> {description} </p>
      </div>
    )
  }

  onClickLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <button
          className="arrow-btn"
          type="button"
          data-testid="leftArrow"
          onClick={this.onClickLeft}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          className="arrow-btn"
          type="button"
          data-testid="rightArrow"
          onClick={this.onClickRight}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
