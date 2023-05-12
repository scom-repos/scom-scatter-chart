export default {
  defaultBuilderData: {
    apiEndpoint: 'https://api.dune.com/api/v1/query/2360905/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD',
    options: {
      title: 'ETH Withdrawals after Shanghai Unlock vs ETH price',
      options: {
        xColumn: {
          key: 'time',
          type: 'time'
        },
        yColumns: [
          'eth_price',
        ],
        seriesOptions: [
          {
            key: 'eth_price',
            title: 'ETH Price'
          }
        ],
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM DD'
        },
        yAxis: {
          labelFormat: '$0[].0a',
          position: 'left'
        }
      }
    }
  }
}