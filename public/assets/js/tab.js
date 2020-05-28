$( function() {
    $(".filter").click(function() {
      if( $( this ).hasClass( 'filer-active' ) ) {
         return;
      }

      $(".filter").removeClass( 'filer-active' );
      $( this ).addClass( 'filer-active' );
  });
});