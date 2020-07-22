let container_id = "idMyCanvas";
let svg_id = "my_canvas";

let svg_obj = d3.select("#" + container_id)
                .append("svg")
                  .attr("viewbox", "0 0 1280 720")
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .attr("preserveAspectRatio", "xMidYMid meet")
                  .attr("xmlns", "http://www.w3.org/2000/svg")
                  .attr("version", "1.1")
                  .attr("id", svg_id);

let text_obj = svg_obj.append("text");

let text_label = text_obj
                  .attr("x", 30)
                  .attr("y", 30)
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "20px")
                  .attr("fill", "red")
                  .text("sup, gurl.");
