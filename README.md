# AGRINHO-2026


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro forte, futuro sustentável</title>

    <style>

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body{
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }

        header{
            background-color: #2e7d32;
            color: white;
            padding: 20px;
        }

        header h1{
            text-align: center;
            margin-bottom: 10px;
        }

        nav{
            text-align: center;
        }

        nav a{
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }

        nav a:hover{
            color: #c8e6c9;
        }
p: 15px;
            padding: 10px 15px;
            background-color: #2e7d32;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        .botao:hover{
            background-color: #1b5e20;
        }

        form{
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
        }

        input, textarea{
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button{
            background-color: #2e7d32;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover{
            background-color: #1b5e20;
        }

        footer{
            background-color: #2e7d32;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }

        @media(max-width: 768px){
            .cards{
                flex-direction: column;
                align-items: center;
            }

            .banner h2{
                font-size: 25px;
            }
        }

    </style>
</head>

<body>

    <!-- Cabeçalho -->
    <header>
        <h1>Agro forte, futuro sustentável</h1>

        <nav>
            <a href="#producao">Produção</a>
            <a href="#sustentabilidade">Sustentabilidade</a>
            <a href="#desafios">Desafios</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <!-- Banner -->
    <section class="banner">
        <h2>Produzir hoje preservando o amanhã</h2>
    </section>

    <!-- Introdução -->
    <section>
        <div class="container">
            <h2>Introdução</h2>

            <p>
                O agronegócio é um dos setores mais importantes da economia brasileira.
                Além de gerar empregos e movimentar a economia, ele também produz alimentos
                essenciais para a população. Porém, é necessário unir produção agrícola e
                preservação ambiental para garantir recursos naturais às futuras gerações.
            </p>
        </div>
    </section>

    <!-- Produção Agrícola -->
    <section id="producao">
        <div class="container">

            <h2>Produção Agrícola</h2>

            <div class="cards">

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" alt="Agronegócio">

                    <h3>Importância Econômica</h3>

                    <p>
                        O agronegócio fortalece a economia brasileira, gera empregos
                        e impulsiona exportações.
                    </p>

                    <a href="#" class="botao">Saiba mais</a>
                </div>

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399" alt="Tecnologia no campo">

                    <h3>Tecnologia no Campo</h3>

                    <p>
                        Máquinas modernas, sensores e GPS aumentam a produtividade
                        e reduzem desperdícios.
                    </p>

                    <a href="#" class="botao">Ver tecnologias</a>
                </div>

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1492496913980-501348b61469" alt="Produção de alimentos">

                    <h3>Produção de Alimentos</h3>

                    <p>
                        O campo produz alimentos essenciais para abastecer
                        o Brasil e diversos países.
                    </p>

                    <a href="#" class="botao">Saiba mais</a>
                </div>

            </div>
        </div>
    </section>

    <!-- Sustentabilidade -->
    <section id="sustentabilidade">
        <div class="container">

            <h2>Sustentabilidade</h2>

            <div class="cards">

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8" alt="Preservação da água">

                    <h3>Preservação da Água</h3>

                    <p>
                        O uso consciente da água evita desperdícios e protege rios e lagos.
                    </p>
                </div>

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" alt="Energia solar">

                    <h3>Energias Renováveis</h3>

                    <p>
                        Energia solar e biomassa ajudam a reduzir impactos ambientais.
                    </p>
                </div>

                <div class="card">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Solo fértil">

                    <h3>Conservação do Solo</h3>

                    <p>
                        Técnicas sustentáveis mantêm o solo fértil e produtivo.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Desafios -->
    <section id="desafios">
        <div class="container">

            <h2>Desafios Ambientais</h2>

            <div class="cards">

                <div class="card">
                    <h3>Desmatamento</h3>

                    <p>
                        A expansão agrícola sem planejamento pode causar destruição das florestas.
                    </p>
                </div>

                <div class="card">
                    <h3>Poluição</h3>

                    <p>
                        O uso inadequado de produtos químicos prejudica o meio ambiente.
                    </p>
                </div>

                <div class="card">
                    <h3>Emissão de Carbono</h3>

                    <p>
                        Máquinas e queimadas aumentam os gases poluentes na atmosfera.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Soluções -->
    <section id="solucoes">
        <div class="container">

            <h2>Soluções e Futuro</h2>

            <div class="cards">

                <div class="card">
                    <h3>Agricultura Regenerativa</h3>

                    <p>
                        Recupera o solo e melhora a produção sem prejudicar a natureza.
                    </p>
                </div>

                <div class="card">
                    <h3>Drones Agrícolas</h3>

                    <p>
                        Auxiliam no monitoramento das plantações e reduzem desperdícios.
                    </p>
                </div>

                <div class="card">
                    <h3>Irrigação Inteligente</h3>

                    <p>
                        Sistemas automáticos economizam água e aumentam a eficiência agrícola.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato">
        <div class="container">

            <h2>Contato e Conscientização</h2>

            <form>

                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome">

                <label>Email</label>
                <input type="email" placeholder="Digite seu email">

                <label>Mensagem</label>
                <textarea rows="5" placeholder="Digite sua mensagem"></textarea>

                <button type="submit">Enviar mensagem</button>

            </form>

        </div>
    </section>

    <!-- Rodapé -->
    <footer>

        <p>
            © 2026 - Agro forte, futuro sustentável
        </p>

        <p>
            Desenvolvido para o projeto AGRINHO 2026
        </p>

    </footer>

</body>
</html>
        .banner{
            background: url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854') center/cover no-repeat;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
        }

        .banner h2{
            background-color: rgba(0,0,0,0.6);
            padding: 20px;
            border-radius: 10px;
            font-size: 35px;
        }

        section{
            padding: 50px 20px;
        }

        .container{
            max-width: 1100px;
            margin: auto;
        }

        h2{
            color: #2e7d32;
            margin-bottom: 20px;
            text-align: center;
        }

        .cards{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .card{
            background-color: white;
            width: 300px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            transition: 0.3s;
        }

        .card:hover{
            transform: scale(1.05);
        }

        .card img{
            width: 100%;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .botao{
            display: inline-block;
            margin-to
/* =============================================
   STYLE.CSS - AGRINHO 2026
   Tema: Agricultura, Educação e Sustentabilidade
   Responsivo | Moderno | Acessível
   ============================================= */

/* ====================== RESET & BASE ====================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Cores do Tema Agrinho 2026 */
    --primary-green: #2E7D32;
    --secondary-green: #4CAF50;
    --light-green: #A5D6A7;
    --accent-yellow: #FFEB3B;
    --dark-green: #1B5E20;
    --text-dark: #263238;
    --text-light: #F1F8E9;
    --background: #F8FFF8;
    --white: #FFFFFF;
    --gray: #757575;
}

body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--background);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ====================== TIPOGRAFIA ====================== */
h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.3;
    color: var(--dark-green);
}

h1 {
    font-size: 2.8rem;
}

h2 {
    font-size: 2.2rem;
}

p {
    font-size: 1.1rem;
    color: var(--gray);
}

/* ====================== HEADER ====================== */
header {
    background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.8rem;
    font-weight: 800;
    text-decoration: none;
    color: white;
}

.logo img {
    height: 50px;
}

.menu {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.menu a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
}

.menu a:hover {
    color: var(--accent-yellow);
    transform: translateY(-2px);
}

/* ====================== BOTÕES ====================== */
.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    text-align: center;
}

.btn-primary {
    background-color: var(--secondary-green);
    color: white;
}

.btn-primary:hover {
    background-color: var(--dark-green);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(46, 125, 50, 0.3);
}

/* ====================== HERO / BANNER ====================== */
.hero {
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('../img/hero-agro.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 160px 20px 100px;
}

.hero h1 {
    color: white;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

/* ====================== RESPONSIVIDADE ====================== */
@media (max-width: 768px) {
    h1 {
        font-size: 2.2rem;
    }
    
    .menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: var(--primary-green);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
    }
    
    .menu.active {
        left: 0;
    }
    
    .hero {
        padding: 120px 20px 80px;
    }
}

/* ====================== UTILITÁRIOS ====================== */
.text-center {
    text-align: center;
}

.mt-5 { margin-top: 3rem; }
.mb-5 { margin-bottom: 3rem; }

section {
    padding: 80px 0;
}

/* ====================== FOOTER ====================== */
footer {
    background: var(--dark-green);
    color: var(--text-light);
    padding: 60px 0 30px;
    text-align: center;
}

footer a {
    color: var(--light-green);
    text-decoration: none;
}
