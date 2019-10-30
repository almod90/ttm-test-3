import './scss/app.scss'
import axios from 'axios'
import $ from 'jquery'
import './js/api'

const $button = $('#action'),
    $table = $('#table');


const operate = d => {
    const total = d.map(e => e.traffic).reduce((a, b) => a + b);
    console.log(`Total: ${total}`);

    const newInstance = d.map(e => {
        e.percent = Math.ceil(100.0 * e.traffic / total);
        return e;
    });
    console.log(newInstance);

    const filtered = newInstance.filter(e => e.percent > 2);
    console.log(filtered);

    const start = '<div class="text-center pt-2 h4">Details</div> <table><tr><th>Name</th><th>Traffic</th><th>Percent</th></tr>',
        end = '</table><div class="text-center text-muted small pt-2">check console for more info</div>';
    let content = "";

    newInstance.forEach(e => content += `<tr><td>${e.name}</td><td>${e.traffic}</td><td>${e.percent} %</td></tr>`);

    $table.html(start + content + end);
}

$button.click(function (e) {
    e.preventDefault();

    // not using fetch because mock won't handle it
    axios.get('/api/test-3')
        .then(r => r.data)
        .then(d => operate(d))
        .catch(e => console.log(`Error: ${e.message}`))
});
