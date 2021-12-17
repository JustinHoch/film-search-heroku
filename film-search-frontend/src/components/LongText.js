// React Components
import { useState } from 'react'

function LongText({ heading, text }) {

  const [readMore, setReadMore] = useState(true)
  const [displayText, setDisplayText] = useState(text.slice(0, 400) + '...')
  const [readMoreLinkText, setReadMoreLinkText] = useState('Read More')

  let shortText = false
  if(text.length > 400){
    shortText = true
  }

  const textSwtich = () => {
    if(readMore){
      setDisplayText(text)
      setReadMore(!readMore)
      setReadMoreLinkText('Read Less')
    }
    if(!readMore){
      setDisplayText(text.slice(0, 400) + '...')
      setReadMore(!readMore)
      setReadMoreLinkText('Read More')
    }
  }

  return (
    <div className="p-2">
      <h2 className="text-lg font-bold text-green-500 text-center">{heading}</h2>
      
      <p className="text-white">{shortText ? displayText : text}</p>
      {
        shortText ?
          <div className="flex justify-center">
            <button
              onClick={()=>textSwtich()}
              className="bg-green-500 rounded-xl px-2 mt-1 text-sm text-gray-800 font-bold focus:outline-none">
                {readMoreLinkText}
            </button>
          </div>
        : null
      }
    </div>
  )
}

export default LongText
