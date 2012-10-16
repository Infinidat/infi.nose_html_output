
var spinnerFactory = {
  isApplied: function(element) {
    var classSelector = "." + spinnerFactory.getDefaults().className;
    return jQuery(classSelector, element).length > 0;
  },
  
  apply: function(selector, options) {
    var foreach = function(index, element) {
      if (!spinnerFactory.isApplied(element))
        var spinner = new Spinner(options).spin(element);
    };
    selector.each(foreach);
  },

  getOptions: function(lines, length, width, radius) {
    var options = spinnerFactory.getDefaults();
    options.lines = lines;
    options.length = length;
    options.width = width;
    options.radius = radius;
    return options;
  },

  getDefaults: function() {
    var defaults = {
      rotate: 0, // The rotation offset
      color: 'rgb(84,254,68)', // #rgb or #rrggbb
      speed: 1.5, // Rounds per second
      trail: 50, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner-ajax-loader', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 0, // Top position relative to parent in px
      left: 0 // Left position relative to parent in px
    };
    return defaults;
  },

  getOptionsBySize: function(size) {
    var options;
    if (size == "tiny") {
      options = spinnerFactory.getOptions(8, 3, 4, 4);
      options.color = 'rgb(0, 0, 0)';
    }
    else if (size == "small") {
      options = spinnerFactory.getOptions(8, 5, 5, 5);
      options.color = 'rgb(0, 0, 0)';
    }
    else if (size =="huge") {
      options = spinnerFactory.getOptions(13, 30, 13, 40);
    }
    else {
      // TODO show error
    }
    return options;
  },

  create: function(selector, size) {
    var options = spinnerFactory.getOptionsBySize(size);
    spinnerFactory.apply(selector, options);
  },

};

$(document).ready(function() {
    spinnerFactory.create($("#running-spinner"), "tiny");
});