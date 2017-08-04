var area = "NewYork";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&q=loc:40.751389,73.995244&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDOxAqGs6_9fepgunZ80DqE4uDt0kMskyo";

function changeArea(){
    area = document.getElementById("newArea").value;
    document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDOxAqGs6_9fepgunZ80DqE4uDt0kMskyo";
}