// We add html inside the selected element
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html("<strong>hot</strong>");

// We add html inside the selected element
// and we add a new span element with the 'today' text
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html("<strong>hot</strong>")
  .append('span')
  .html(' today')

// We add html inside the selected element
// and we add a new span element with the 'today' text
// in a specific position
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html("<strong>hot</strong>")
  .insert('span', ':first-child')
  .html('today ')

// We add html inside the selected element
// and we add a new span element with the 'today' text
// in a specific position
// and add the 'item' class to the HTML
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html('<strong class="item">hot</strong>')
  .insert('span', ':first-child')
  .html('today ')

// We add html inside the selected element
// and we add a new span element with the 'today' text
// before the 'strong' tag
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html('<strong>hot</strong>')
  .insert('span', 'strong')
  .html('today ')

// Remove the element 5 from the table
d3.selectAll('tr:nth-child(5)')
  .remove()