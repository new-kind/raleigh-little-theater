 <?php   
    $context = Timber::get_context();
    $context['post'] = new TimberPost();
    $context['navbar'] = array();
    $context['foo'] = 'bar';
    Timber::render( "singles/shows.twig", $context );