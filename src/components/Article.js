import React from 'react'

function Article({ title , date = "January 1, 1970" , preview , minutes}) {

    const totalEmojis = () => {
        if ( minutes < 30) {
          let emojis = ["☕️","☕️","☕️","☕️","☕️","☕️"]
          let round = Math.round( minutes / 10 ) * 10
          let multiplier = round / 5
          let diff = 6 - multiplier
          console.log(diff)
          return emojis.slice(diff).join(",")
        } else {
          let emojis = ["🍱","🍱","🍱","🍱","🍱","🍱"]
          let round = Math.round( minutes / 10 ) * 10
          let multiplier = round / 10
          let diff = 6 - multiplier
          console.log(diff)
          return emojis.slice(diff).join(",")
        }
    }

    // console.log(totalEmojis())

  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{totalEmojis()} {minutes} min read</p>
    </article>
  )
}

export default Article