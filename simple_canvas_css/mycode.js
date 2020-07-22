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

let bg_obj = svg_obj.append("rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .attr("fill", "rgba(0, 30, 0, 0.75)");

let rect_obj = svg_obj.append("rect")
                  .attr("x", 30) // px
                  .attr("y", (30 - font_height)) // px
                  .attr("width", 100) // px
                  .attr("height", (1.5 * font_height)) // px
                  .attr("fill", "white")
                  .attr("stroke", "red");

let text_obj = svg_obj.append("text");

let text_label = text_obj
                  .attr("x", 30) // px
                  .attr("y", 30) // px
                  .attr("font-family", "sans-serif")
                  .attr("font-size", (font_height + "px"))
                  .attr("fill", "red")
                  .text("sup, gurl.");
