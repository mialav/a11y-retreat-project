import React from "react"
import translations from "../translations"
import { Language } from "../types"

interface ErrorProps {
  error: string
  lang: Language
}

const ErrorMessage = ({ error, lang }: ErrorProps) =>
  error ? <div className="error">{translations[lang].postalCodeError}</div> : null

export default ErrorMessage
