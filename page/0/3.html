// Calculates page links using Chapter/Page Queary Variables

// #==============================================================#
// | TODO: Add defaults and invalid manually-entered ID handling? |                     
// |       Special Queary Variable ID for special links?          |
// #==============================================================#

// ---- UPDATE THESE VALUES: ----

var lastChapter = 0; // Most recent chapter.
var lastPage = [27, 0]; // Most recent page for each chapter.
var lastBlog = 0; // Temporary Fix. Eventually calculate most recent.

var indexURL = "https://ashwoodcross.github.io";
var storyURL = "story.html";
var archiveURL = "archive.html";
var aboutURL = "about.html";
var extrasURL = "extras.html";

// ---- UPDATE THESE VALUES: ----

var c = parseInt(getVariable('c'));
var p = parseInt(getVariable('p'));
var s = getVariable('s');
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

// Before page content is loaded:
// IF s has a value, load s.html.

// After page content is loaded:
// If overrideNext or overridePrev has a value, override it with a new one.

// Toggles Spoiler Visibility
$(document).ready(function(){
	$(".spoiler").click(function(){
		$(this).children(".spoiler-content").slideToggle(300);
		event.stopPropagation();
	});
	$(".spoiler-content").click(function(){
		event.stopPropagation();
	});
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