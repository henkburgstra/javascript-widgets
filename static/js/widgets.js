var Widget = function(parent, id, title) {
	this.parent = parent;
	this.id = id;
	this.title = title;
	var render = function() {
		var p = document.getElementById(this.parent);
			
	};
	var load = function() {
		
	};
}

var widgets = [
	{id: "wie-is-waar", title: "Wie is waar"},
	{id: "fiatteren", title: "Fiatteren"},
	{id: "acties", title: "Acties"}
];

document.addEventListener('DOMContentLoaded', function() {
	for (var i = 0; i < widgets.length; i++) {
		var w = widgets[i];
		var widget = new Widget("widget-container", w.id, w.title);
		widget.render();
	}
};