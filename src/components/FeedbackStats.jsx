import PropTypes from "prop-types" 

function FeedbackStats({feedback}) {
  let moyenne = 
  feedback.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating
  }, 0) / feedback.length

  // console.log(moyenne)

  moyenne = moyenne.toFixed(1)

  return (
    <div className="feedback-stats"> 
    <h4>Number of feedback: {feedback.length}</h4>
    <h4>Moyenne des notes: {isNaN(moyenne) ? 0 : moyenne}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}


export default FeedbackStats
