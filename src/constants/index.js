import CardanoLogo from '../images/cardano-logo-1024x1024.png'

export const usdSymbol = '$'
export const btcSymbol = '₿'

export const usdDecimals = 3
export const btcDecimals = 8
export const percentDecimals = 2
export const maxQueue = 60

export const initialPriceReducerState = {
  dataPoints: [],
  change24hr: {
    priceChange: 0,
    priceChangePercent: 0,
  },
}

export const initialConnectionReducerState = {
  goodConnection: false,
  processTimes: [0],
}

export const token = {
  ticker: 'ADA',
  accentColor: '#3564f6',
  backgroundColor: '#141428',
  logo: CardanoLogo,
}
