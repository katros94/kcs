<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">
                <h2>Katrinas Coding Studio</h2>
            </div>
            <div class="footer-links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#privacy">Portfolio</a></li>
                    <li><a href="#licensedContent">Licensed Content</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Katrinas Coding Studio. All rights reserved.</p>
        </div>
    </footer>
</template>

<style>
.footer {
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    border-top: 2px solid #fff;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer-logo h2 {
    margin: 0;
    font-size: 24px;
}

.footer-links {
    margin: 20px 0;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links li {
    display: inline;
    margin: 0 15px;
}

.footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover{
    color: #fffa76;
    border-bottom: 2px solid #fffa76;
    padding-bottom: 10px;

}

.footer-bottom {
    margin-top: 20px;
    font-size: 14px;
}
</style>