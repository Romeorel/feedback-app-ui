
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
    if(! feedback || feedback.length === 0) {   { /* If no Feedback, display this paragraph */}
        return <p>No Feedback yet</p>
    }

  return (
    <div className="feedback-list">
    {feedback.map((item) => (
        <FeedbackItem key={item.id} 
        item={item} 
        handleDelete={handleDelete} />
    ) )}
    </div>
  )
}



export default FeedbackList
