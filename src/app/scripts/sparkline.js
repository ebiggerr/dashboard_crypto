 $(function() {
    /** This code runs when everything has been loaded on the page */
    /* Inline sparklines take their values from the contents of the tag */
    $('.inline').sparkline();

    /* Sparklines can also take their values from the first argument
    passed to the sparkline() function */
    var myvalues = [10,8,5,7,4,4,1];
    $('.dynamicsparkline').sparkline(myvalues);

    /* The second argument gives options such as chart type */
    $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: 'green'} );

    /* Use 'html' instead of an array of values to pass options
    to a sparkline with data in the tag */
    $('.inlinesparkline').sparkline('html', {type: 'line', barColor: 'red'} );
  });
