// Calculates page links using Chapter/Page Queary Variables

// #==============================================================#
// | TODO: Add defaults and invalid manually-entered ID handling? |                     
// |       Special Queary Variable ID for special links?          |
// #==============================================================#

// ---- UPDATE THESE VALUES: ----

var lastChapter = 0; // Most recent chapter.
var lastPage = [27, 0]; // Most recent page for each chapter.
var lastBlog = 0; // Temporary Fix. Eventually calculate most recent.

var mainURL = "https://ashwoodcross.github.io";
var indexURL = "index.html";
var storyURL = "story.html";
var archiveURL = "archive.html";
var aboutURL = "about.html";
var extrasURL = "extras.html";

// ---- UPDATE THESE VALUES: ----

var c = parseInt(getVariable('c'));
var p = parseInt(getVariable('p'));
var s = parseInt(getVariable('s'));
var clampC = Math.max(0, Math.min(c, lastChapter));
var clampP = Math.max(0, Math.min(p, lastPage[clampC]));

if (page == "index") {
	// alert ("Index Page");
	c = lastChapter;
	p = lastPage[c];
}
else if (c != clampC || p != clampP) {
	// alert ("Not Index Page")
	c = clampC;
	p = clampP;
	if (c >= lastChapter && p+1 >= lastPage[c]) {
		window.location.href = indexURL;
	}
	else {
		window.location.href = storyURL + "?c="+ c +"&p="+ p;
	}
}

var disqusIdentifier = "Chapter "+ c +", Page "+ p;

var prevChapter = indexURL;
var nextChapter = indexURL;
var prevPage = indexURL;
var nextPage = indexURL;

if (c <= 0) {
	prevChapter = storyURL + "?c=0&p=0";
	if (p <= 0) {
		prevPage = storyURL + "?c=0&p=0"; }
	else {
		prevPage = storyURL + "?c=0&p="+ (p-1); } }
else {
	if (p <= 0) {
		prevChapter = storyURL + "?c="+ (c-1) +"&p=0";
		prevPage = storyURL + "?c="+ (c-1) +"&p="+ lastPage[c-1]; }
	else {
		prevChapter = storyURL + "?c="+ c +"&p=0";
		prevPage = storyURL + "?c="+ c +"&p="+ (p-1); } }

if (c >= lastChapter) {
	nextChapter = indexURL;
	if ((p+1) >= lastPage[lastChapter] || lastPage[lastChapter] == null) {
		nextPage = indexURL; }
	else {
		nextPage = storyURL + "?c="+ c +"&p="+ (p+1); } }
else {
	nextChapter = storyURL + "?c="+ (c+1) +"&p="+ 0;
	if (p >= lastPage[c]) {
		nextPage = storyURL + "?c="+ (c+1) +"&p="+ 0; 	}
	else {
		nextPage = storyURL + "?c="+ c +"&p="+ (p+1); } }

// Toggles Spoiler Visibility
$(document).ready(function(){
	$(".spoiler").click(function(){
		$(this).children("div").slideToggle(300);
		event.stopPropagation();
	});
	$(".spoiler-content").click(function(){
		event.stopPropagation();
	});
});

// Loads CSS, Page, and Blog Content
$(document).ready(function(){

	// Special handling for S variable. Acts as string for HTML.
	
	$("#content").load("page/" + c + "/" + p + ".html", function( response, status, xhr ){
		if ( status == "error") {
			disqusIdentifier = "The Error Zone";
			var msg = "<h2>Oh dear. There was an error loading this page.</h2><p>It might not exist, the network might be borked, or I might have messed something up. If it keeps happening, please let me know! Unless, of course, you're just intentionally mucking around with things. If you're looking for a page, <a href='https://ashwoodcross.github.io/archive.html'>maybe try checking the Archive</a>, instead of resorting to 1337 H4X?</p><br>XHR Status: ";
			$( "#content" ).html( msg + xhr.status + " " + xhr.statusText + "<br>Chapter: " + c + ", Page: " + p + ", Special: " + s);
		}
	});
	
	$("#blog").load("blog/" + c + "/" + lastBlog + ".html", function( response, status, xhr ){
		// alert ("Blog Loaded");
		if ( status == "error") {
			$("#blog").addClass("hide");
			// alert ("Blog Error");
		}
	});

	$("#comment-title").html("Suggestion Box: (" + disqusIdentifier + ")");
});

// Get PHP-Style Queary Variables from URL
function getVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(-1);
}