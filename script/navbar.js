// This script inserts the Navbar

// TODO: Add hover images and/or make backgrounds defined in CSS.
// TODO: Dynamically assign image SRC, or define as CSS BGs.

document.write('<nav>');
document.write('<table class="page-nav-bar">');
document.write('<tr>');

document.write('<td><a href="'+ prevChapter +'" rel="first prev chapter" title="Previous Chapter"><img class="page-nav-button" src="image/ui/yellow_prev_ch.png"></a></td>');
document.write('<td><a href="'+ prevPage +'" rel="prev" title="Previous Page"><img class="page-nav-button" src="image/ui/yellow_prev.png"></a></td>');

document.write('<td><h1>'+ p +'</h1></td>');

document.write('<td><a href="'+ nextPage +'" rel="next" title="Next Page"><img class="page-nav-button" src="image/ui/yellow_next.png"></a></td>');
document.write('<td><a href="'+ nextChapter +'" rel="last next chapter" title="Next Chapter"><img class="page-nav-button" src="image/ui/yellow_next_ch.png"></a></td>');

document.write('</tr>');
document.write('</table>');
document.write('</nav>');