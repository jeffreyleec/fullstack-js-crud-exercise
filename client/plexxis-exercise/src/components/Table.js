import React from 'react'
import {useTable }from 'react-table'
import {mockData} from './mockData'
import {Columns} from './Columns'

export const Table = () => {

  console.log(mockData)
  console.log(Columns)

  return (
    <div>Table</div>
  )
}
