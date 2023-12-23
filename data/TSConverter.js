import Papa from 'papaparse'
import fs from 'fs'

import process from 'process'

export let chartData = {}

function loadData(filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createReadStream(filePath)
    let allData = [] // Create an array to store all the data

    Papa.parse(file, {
      header: true,
      step: function (row) {
        allData.push(row.data) // Add the current row's data to the array
      },
      complete: function () {
        resolve(allData) // Resolve the promise with the data
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
}

function transformData(data, strikeOut = 20, round = 2) {
  let transformedData = {}
  let counter = 0

  data.forEach((item) => {
    counter++
    if (counter % strikeOut !== 0) {
      return
    }

    for (let key in item) {
      if (!transformedData[key]) {
        transformedData[key] = []
      }
      // Check if the value is numeric
      if (!isNaN(item[key])) {
        // If the value is numeric, round it
        transformedData[key].push(roundNumber(parseFloat(item[key]), round))
      } else {
        // If the value is not numeric, add it as is
        transformedData[key].push(item[key])
      }
    }
  })

  return transformedData
}

export async function getData() {
  const filePath = process.argv[2]
  const data = await loadData(filePath)
  chartData = transformData(data)
  return chartData
}

getData()
  .then((chartData) => console.log(chartData))
  .catch((err) => console.error(err))
