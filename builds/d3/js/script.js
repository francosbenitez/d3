var barData = [20, 30, 45, 15]
var height = 400, 
    width = 600,
    barWidth = 50,
    barOffset = 5

d3.select('#viz').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#C9D7D6')

  // We are selecting the rectangle before it exists, 
  // then we add it with the 'enter' method
.selectAll('rect').data(barData)
  .enter().append('rect')
    .style('fill', '#C61C6F')
    .attr('width', barWidth)
    .attr('height', d => {
      return d
    })
    .attr('x', (d, i) => {
      return i * (barWidth + barOffset)
    })

    // We have to reverse things because of the weird
    // coordinate system of computers
    .attr('y', d => {
      return height - d
    })