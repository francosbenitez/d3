// Here, we use the 'style' method
d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .html('hot')
  .style('background', 'red')
  .style('padding', '3px')
  .style('margin-left', '3px')
  .style('border-radius', '3px')
  .style('color', 'white')

// Here, we use the 'classed' method with 
// the Bootstrap framework
d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .html('hot')
  .classed('label label-danger', true)
  .classed('label-danger', false)
  .classed('label-warning', true)
  .style('margin-left', '3px')

// This removes the 'small' class from 'span' tag
d3.select('h2 span')
  .classed('small', false)

// This adds a serie of checkbox on the left 
// of the columns
d3.selectAll('tr')
  .insert('td', ':first-child')
  .append('input')
  .attr('type', 'checkbox')

// This adds a serie of checkbox checked
// on the left of the columns
d3.selectAll('tr')
  .insert('td', ':first-child')
  .append('input')
  .attr('type', 'checkbox')
  .property('checked', true)