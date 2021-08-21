import { Language, TranslationKeys } from "./types"

const translations: Record<Language, TranslationKeys> = {
  en: {
    heading: "Population structure by Postal code area and Information",
    getStatistics: "Get Statistics",
    postalCode: "Postal code",
    demographic: "Group",
    amount: "Amount",
    postalCodeError: "Invalid postal code",
  },
  fi: {
    heading: "Asukasrakenne muuttujina Postinumeroalue ja Tiedot",
    getStatistics: "Hae tiedot",
    postalCode: "Postinumero",
    demographic: "Ryhmä",
    amount: "Määrä",
    postalCodeError: "Vääränlainen postinumero",
  },
}

export default translations
