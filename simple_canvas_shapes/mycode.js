let container_id = "idMyCanvas";
let svg_id = "my_canvas";

let aspectratio_xy = 1.77778;

let canvas_x0 = 0;
let canvas_y0 = 0;
let canvas_xn = 1280;
let canvas_yn = Math.ceil(canvas_xn / aspectratio_xy);
let viewbox_arr = [canvas_x0, canvas_y0, canvas_xn, canvas_yn];

let svg_obj = d3.select("#" + container_id)
                .append("svg")
                  .attr("viewbox", viewbox_arr.join(" "))
                  .attr("preserveAspectRatio", "xMidYMid meet")
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .attr("xmlns", "http://www.w3.org/2000/svg")
                  .attr("version", "1.1")
                  .attr("id", svg_id);

let font_height = 20; // px


// Background
// -------------------
let bg_obj = svg_obj.append("rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("rx", 15)
                  .attr("ry", 15)
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .attr("fill", "rgba(0, 30, 0, 0.75)");
// -------------------


// Squares
// -------------------
let rect_r_obj = (
   svg_obj
   .append("rect")
   .attr("x", 350) // px
   .attr("y", 50) // px
   .attr("width", 120) // px
   .attr("height", 120) // px
   .attr("fill", "rgba(255, 100, 100, 0.75)")
);

let rect_g_obj = (
   svg_obj
   .append("rect")
   .attr("x", 375) // px
   .attr("y", 75) // px
   .attr("width", 120) // px
   .attr("height", 120) // px
   .attr("fill", "rgba(100, 255, 100, 0.50)")
);

let rect_b_obj = (
   svg_obj
   .append("rect")
   .attr("x", 400) // px
   .attr("y", 100) // px
   .attr("width", 120) // px
   .attr("height", 120) // px
   .attr("fill", "rgba(100, 100, 255, 0.25)")
);
// -------------------


// Circles
// -------------------
let circ_a_obj = (
   svg_obj
   .append("circle")
   .attr("cx", 600) // px
   .attr("cy", 350) // px
   .attr("r", 120) // px
   .attr("fill", "rgba(255, 100, 100, 0.75)")
);

let circ_b_obj = (
   svg_obj
   .append("circle")
   .attr("cx", 650) // px
   .attr("cy", 400) // px
   .attr("r", 120) // px
   .attr("fill", "rgba(255, 100, 100, 0.75)")
);
// -------------------


// Triangles
// -------------------
let tri_path_a = "M0,0 m10,5 l-20,0 l10,-20 z"
let tri_a_obj = (
   svg_obj
   .append("path")
   .attr("fill", "rgba(240, 200, 200, 0.75)")
   .attr("d", tri_path_a)
   .attr("transform", "translate(200,400) scale(5)")
);
let tri_b_obj = (
   svg_obj
   .append("path")
   .attr("fill", "rgba(20, 200, 200, 0.75)")
   .attr("d", tri_path_a)
   .attr("transform", "translate(220,475) scale(3) rotate(90)")
);
let tri_c_obj = (
   svg_obj
   .append("path")
   .attr("fill", "rgba(20, 200, 20, 0.75)")
   .attr("d", tri_path_a)
   .attr("transform", "translate(180,475) scale(3) rotate(-90)")
);
// -------------------

// Nested 2D-Torii (Filled Arc Segments / Donuts)
// -------------------
let arc_outer_path = (
   d3.arc()
   .innerRadius(20)
   .outerRadius(30)
   .startAngle(Math.PI + (Math.PI / 10))
   .endAngle(3 * Math.PI - (Math.PI / 10))
);

let arc_inner_path = (
   d3
   .arc()
   .innerRadius(5)
   .outerRadius(15)
   .startAngle((Math.PI / 10))
   .endAngle(2 * Math.PI - (Math.PI / 10))
);

let arc_outer_obj = (
   svg_obj
   .append("path")
   .attr("fill", "rgba(240, 200, 200, 0.75)")
   .attr("d", arc_outer_path())
   .attr("transform", "translate(200,200) scale(3)")
);

let arc_inner_obj = (
   svg_obj
   .append("path")
   .attr("fill", "rgba(200, 250, 200, 0.75)")
   .attr("d", arc_inner_path())
   .attr("transform", "translate(200,200) scale(3)")
);
// -------------------


// Ellipses
// -------------------
let elps_a_obj = (
   svg_obj
   .append("ellipse")
   .attr("cx", 900) // px
   .attr("cy", 200) // px
   .attr("rx", 60) // px
   .attr("ry", 30) // px
   .attr("fill", "rgba(255, 200, 100, 0.75)")
);

let elps_b_obj = (
   svg_obj
   .append("ellipse")
   .attr("cx", 850) // px
   .attr("cy", 150) // px
   .attr("rx", 40) // px
   .attr("ry", 10) // px
   .attr("fill", "rgba(255, 240, 100, 0.75)")
   .attr("transform", "rotate(-45, 850, 150)")
);

let elps_c_obj = (
   svg_obj
   .append("ellipse")
   .attr("cx", 820) // px
   .attr("cy", 100) // px
   .attr("rx", 30) // px
   .attr("ry", 40) // px
   .attr("fill", "rgba(255, 40, 255, 0.75)")
   .attr("transform", "rotate(-90, 820, 100)")
);
// -------------------
