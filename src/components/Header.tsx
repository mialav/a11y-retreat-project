import React, { MouseEvent } from "react"

interface HeaderProps {
  heading: string
  handleLanguageToggle: (event: MouseEvent<HTMLElement>) => void
}

const Header = ({ heading, handleLanguageToggle }: HeaderProps) => {
  return (
    <header>
      <h1>{heading}</h1>
      <div className="row center">
        <button className="button" id="en" onClick={handleLanguageToggle}>
          En
        </button>
        <button className="button" id="fi" onClick={handleLanguageToggle}>
          Fi
        </button>
      </div>
    </header>
  )
}

export default Header
