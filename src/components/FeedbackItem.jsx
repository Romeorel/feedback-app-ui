import { BsXSquareFill } from 'react-icons/bs'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} 
      className="close">
        <BsXSquareFill color='red' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired, 
}

export default FeedbackItem
