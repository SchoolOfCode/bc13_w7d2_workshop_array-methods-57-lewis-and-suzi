const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(capitaliseString)

function capitaliseString(string) {
    return string.toUpperCase();
}