import React from "react"
import { StatisticsData, Language } from "../types"
import translations from "../translations"

interface TableProps {
  data: StatisticsData
  lang: Language
}

const Table = ({ data, lang }: TableProps) => {
  return (
    <table>
      <caption>{data.label}</caption>
      {data.label ? (
        <tr>
          <th>{translations[lang].demographic}</th>
          <th>{translations[lang].amount}</th>
        </tr>
      ) : null}
      {data.values.map((item) => (
        <tr key={item.label}>
          <td>{item?.label}</td>
          <td>{item.value}</td>
        </tr>
      ))}
    </table>
  )
}

export default Table
