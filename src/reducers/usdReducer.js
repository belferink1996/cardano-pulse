import {maxQueue, percentDecimals, usdDecimals} from '../constants'

export default function reducer(state, action) {
  const {dataPoints} = state
  const {
    type,
    payload: {price, priceChange, priceChangePercent},
  } = action

  switch (type) {
    case 'ADD_PRICE': {
      const prev = [...dataPoints]
      // add the price data to the state array,
      // whilst making sure the queue length doesn't exceed the allowed number (see variable "maxQueue")
      while (prev.length >= maxQueue) prev.shift()
      return {
        ...state,
        dataPoints: [
          ...prev,
          {
            price: price.substring(0, usdDecimals + (price > 0 ? 2 : 3)),
            timestamp: Date.now(),
          },
        ],
      }
    }

    case 'ADD_24HOUR': {
      // add the price change data to the state object
      return {
        ...state,
        change24hr: {
          priceChange: priceChange.substring(0, usdDecimals + (priceChange > 0 ? 2 : 3)),
          priceChangePercent: priceChangePercent.substring(
            0,
            percentDecimals + (priceChangePercent > 0 ? 2 : 3),
          ),
          timestamp: Date.now(),
        },
      }
    }

    default: {
      return state
    }
  }
}
