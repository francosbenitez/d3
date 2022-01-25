var myData = [
  {
    date: '4/01/2017',
    low: 55,
    high: 78
  }, 
  {
    date: '4/02/2017',
    low: 65,
    high: 83
  }, 
  {
    date: '4/03/2017',
    low: 77,
    high: 90
  }, 
  {
    date: '4/04/2017',
    low: 58,
    high: 78
  }, 
  {
    date: '4/05/2017',
    low: 67,
    high: 92
  }, 
]

// Go to the 'tbody' and find something called 'selectAll'
d3.select('tbody')

  // This selects something that doesn't exist yet 
  // in the 'tbody' tag
  .selectAll('tr')
  .data(myData)

  // Insert the 'tr' in the body! 
  .enter().append('tr')

  .html(function(d) {
    return '<th scope="row">' + d.date + '</th>' +
            '<td>' + d.low + '</td>' +
            '<td>' + d.high + '</td>'
  })