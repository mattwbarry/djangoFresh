djangoFresh
===========

>When the a user hits the back button, the resulting page is usually displayed from cache instead of making a call to the server. While this is generally a good thing, sometimes you need to make sure that changes to data in your application are shown correctly.

>djangoFresh will automatically force a page refresh if it detects that a page has been pulled from cache and that there is inconsistent data on the page.

>This happens in 3 steps
- In the `<head>` tag on every page, create a javascript variable called `fresh` that holds a bit of data
- When each page is loaded, a small AJAX request is made to the server to check if the value of `fresh` matches with the server side value
- If it is not the same, the page is refreshed which forces the browser to make a full request to the server for new data

> To install, include `func.js` in your html or copy and paste it into your javascript file. Add `var fresh = {{ session.freshVar }}` inside each `<head>` tag. Set up your `urls.py` file to direct /ajax/check_freshness to `fresh.fresh` and write `fresh()` so that it returns the data you need.

> Requires jQuery (and Django obviously)