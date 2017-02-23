 <?php   
    $context = Timber::get_context();
    $context['post'] = new TimberPost();
    Timber::render( array( 'singles/single-' . $post->post_type . '.twig',  'singles/people.twig' ), $context );