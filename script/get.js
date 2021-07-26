const url = 'https://spreadsheets.google.com/feeds/list/1aYvuNwPiNeQcmxXMtg0_J5CUsDD8TEs6K16zdlU_t_4/o8s863k/public/basic?alt=json'

async function get() {
    const response = await fetch(url);
    const data = await response.json();
    const arr = data.feed.entry;
    const n = [];
    for (var i = 0; i < 44; i++) {
        const obj = {
            title: arr[i].title.$t,
            links: arr[i].content.$t
        };
        n.push(obj);
    }
    return n;
}

