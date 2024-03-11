import { useState, useEffect } from "react"

function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState("")

  const getCurrentUrl = async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    setCurrentUrl(tab.url);
  }

  useEffect( () => {
    getCurrentUrl()
  }, [currentUrl])

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        You are currently looking at at {currentUrl}
      </h2>
    </div>
  )
}

export default IndexPopup
