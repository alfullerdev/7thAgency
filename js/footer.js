let footer = () => {

    let year = new Date();

    let divFooter = `<div class="container grid grid-4">
    <div>
        <h1>7thagency</h1>
        <p>Copyright &copy ${year.getFullYear()}</p>
    </div>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="talent.html">Talent</a></li>
            <li><a href="virtual.html">Virtual</a></li>
        </ul>
    </nav>
    <nav>
        <ul>                    
            <li><a href="services.html">Services</a></li>
            <li><a href="clients.html">Clients</a></li>
        </ul>
    </nav>
        <div class="social">
            <a href=""><i class="fab fa-twitter fa-2x"></i></a>
            <a href=""><i class="fab fa-facebook fa-2x"></i></a>
            <a href=""><i class="fab fa-instagram fa-2x"></i></a>
        </div>
    </div>`;
    $('footer').html(divFooter);
}



