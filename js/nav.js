let nav = () => {
    let divNav = `
    <div class="container flex">
        <h1 class="logo"></h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="talent.html">Talent</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="virtual.html">Virtual</a></li>
                <li><a href="clients.html">Clients</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>`

    $('.navbar').html(divNav);
}