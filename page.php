<?php
get_header(); 
?>
<div class="subpage">
    <div class="App">
        <main>
             <h1 class="p-title"><span class="p-title__ja input"><?php the_title(); ?></span></h1>
            <div class="subpage-ctn">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <div class="p-content"><?php the_content(); ?></div>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p>No pages found.</p>
                <?php endif; ?>
            </div>
        </main>
        <?php get_footer(); ?>
    </div>
</div>
