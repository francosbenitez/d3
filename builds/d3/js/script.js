// This allows to change the first value inside
// the 'High' cateogory for the number 45 
// Also, it prints the data in console
// d3.selectAll(".day-high .temp")
//   .data([45])
//   .html(function(d) {
//     console.log(d)
//     return '<strong>' + d + '</strong>'
//   })

// The same as before, but with arrow function
// d3.selectAll(".day-high .temp")
//   .data([45])
//   .html(d => {
//     console.log('d from arrow function')
//     return '<strong>' + d + '</strong>'
//   })

// This changes all of the items inside the 
// 'High' category for the new data put in the 
// data() function
// d3.selectAll(".day-high .temp")
//   .data([45, 78, 77, 66, 76])
//   .html(function(d) {
//     console.log(d)
//     return '<strong>' + d + '</strong>'
//   })

// The same as before, but with more complex conditions added
d3.selectAll(".day-high .temp")
  .data([45, 78, 77, 66, 76])
  .html(function(d, i) {
    if (i == 0) {
      console.log('from index', i, d)
      return '<strong class="text-muted" style="font-size: 2rem;">' + d + '</strong>'
    } else {
      if (d >= 76) {
        return '<strong class="btn-danger">' + d + '</strong>'
      } else {
        return '<strong>' + d + '</strong>'
      }
    }
  })