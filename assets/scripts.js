let copypopup = document.createElement('output');
copypopup.classList.add('popup');
copypopup.textContent = '☑️ Copied!';
document.body.appendChild(copypopup);

const showcopied = snippet => {
    navigator.clipboard.writeText(snippet);
    console.log('Copied');
    document.body.classList.add('copied');
    setTimeout(() => document.body.classList.remove('copied'), 1500);
};
document.querySelector('#snippets')?.addEventListener('click', e => {
    let y = e.target.getBoundingClientRect().bottom;    
    document.documentElement.style.setProperty('--mouse-y', y);
    if (e.target.tagName === 'BUTTON') {
        let node = e.target.parentNode;
        let html = document.querySelector('template').innerHTML;
        let bits = node.innerHTML.match(/<a href="([^"]*)">([^<]*)<\/a>([^<]*)<but/);
        html = html.replace('$LINKTEXT',bits[2]);
        html = html.replace('$URL',bits[1]);
        html = html.replace('$TEXT',node.innerText.split("\n").pop());
        // let out = `👉🏼 „${bits[2]}”\n🔗 ${bits[1]}\n${node.innerText.split("\n").pop()}`;
        showcopied(html);
    }
});