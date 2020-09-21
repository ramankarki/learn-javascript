// Only change code below this line
function urlSlug(title) {
    let url = title.toLowerCase().trim();
    url = url.split(" ").filter(Boolean);
    return url.join("-");
}
// Only change code above this line

console.log(urlSlug(" Winter Is  Coming"));
