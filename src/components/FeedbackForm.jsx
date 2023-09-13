import {useState} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'

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
            <Button type='submit' version='secondary'>
              Send
            </Button>
          </div>
        </form>
    </Card>
  )
}

export default FeedbackForm
