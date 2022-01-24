// Select the first class 'temp' 
// and modify the text inside it
// d3.select(".temp").text("hot")

// Select all the elements with both the classes
// '.day-high' and 'temp'  
// and modify the text inside them
// d3.selectAll(".day-high .temp").text("hot")

// For selecting a specific element number,
// we can use the nth-child selector in CSS 
// In this case, it's selected the five number
// inside the category/class 'day-high'
// d3.selectAll("tr:nth-child(5) .day-high .temp").text("hot")

// 
// d3.selectAll("tr:nth-child(even) .day-high .temp").text("hot")

//
d3.selectAll("tr:nth-child(between) .day-high .temp").text("hot")