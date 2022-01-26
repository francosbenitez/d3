d3.select('#viz')
  .append('svg')
    .attr('width', 600)
    .attr('height', 400)
    .style('background', '#93A1A1')
  .append('rect')
    .attr('x', 200)
    .attr('y', 100)
    .attr('height', 200)
    .attr('width', 200)
    .style('fill', '#CB4B19')
  // .append('circle')
  //   .attr('cx', 300)
  //   .attr('cy', 200)
  //   .attr('r', 50)
  //   .style('fill', '#840043')

// If we put append('circle') after the last 'rect', 
// the circle wouldn't be seen because it would be 
// inside the rectangle. For that, we need to make 
// another selection
d3.select('#viz svg')
  .append('circle')
  .attr('cx', 300)
  .attr('cy', 200)
  .attr('r', 50)
  .style('fill', '#840043')