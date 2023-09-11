import {useState} from 'react'
import Card from "./shared/Card"

function FeedbackForm() {
    const [text, setText] = useState('') 

    const handleTextChange = (event) => {
        setText(event.target.value)
        
    }


  return (
    <Card>
        <form>
            <h2>How was the service ?
            </h2>
            <div className="input-group">
            <input 
            onChange={handleTextChange}
            type="text" 
            placeholder="Your review"
            value={text}
            />
            <button type="submit">Send</button>

            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm
