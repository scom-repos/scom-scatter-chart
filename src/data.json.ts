export default {
  defaultBuilderData: {
    "mode": "Live",
    "dataSource": "Dune",
    "queryId": "2360905",
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
