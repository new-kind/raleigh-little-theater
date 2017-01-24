 <?php   
    $context = Timber::get_context();
    $context['posts'] = Timber::get_posts();
    $context['navbar'] = array();
    $context['foo'] = 'bar';
    Timber::render( "singles/shows.twig", $context );