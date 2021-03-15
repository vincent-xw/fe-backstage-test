window.onload = function () {
    let app = document.querySelector('#app');
    let path = location.pathname;
    app.innerHTML = `<p>
                    ${path || 'none'}
                    </p>`;
}