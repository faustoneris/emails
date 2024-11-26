import { dirname } from "path";

export let EMAIL_CONTENTS = {
    NOTIFICATION_CUSTOMER_AUCTION: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Confirmação de Lance</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }
        .email-header, .email-footer {
            background-color: #acacac;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-header img {
            width: 100px;
        }
        .email-body {
            padding: 20px;
        }
        .email-footer {
            font-size: 12px;
        }
        .email-body h2 {
            color: #000;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #acacac;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>

</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Confirmação de Lance</h1>
        </div>
        <div class="email-body">
            <h2>Lance registrado com sucesso!</h2>
            <p>Olá [Nome do Cliente],</p>
            <p>Seu lance no produto <strong>[Nome do Produto]</strong> foi registrado com sucesso.</p>
            <p><strong>Valor do Lance:</strong> R$ [Valor do Lance]</p>
            <p>O fornecedor tem até 24 horas para responder ao seu lance. A resposta será enviada até as 10h do próximo dia útil.</p>
            <a href="[Link para a plataforma]" class="button">Acompanhar Lance</a>
        </div>
        <div class="email-footer">
            <p>Equipe FIER</p>
            <p>&copy; 2024 FIER. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`,
    NOTIFICATION_SUPPLIER_AUCTION: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Notificação de Novo Lance</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }
        .email-header, .email-footer {
            background-color: #0c8db4;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-header img {
            width: 100px;
        }
        .email-body {
            padding: 20px;
        }
        .email-footer {
            font-size: 12px;
        }
        .email-body h2 {
            color: #0c8db4;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0c8db4;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>

</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Notificação de Lance</h1>
        </div>
        <div class="email-body">
            <h2>Você recebeu um novo lance!</h2>
            <p>Olá,</p>
            <p>Um novo lance foi feito no produto <strong>[Nome do Produto]</strong>.</p>
            <p><strong>Cliente:</strong> [Nome do Cliente]</p>
            <p><strong>Valor do Lance:</strong> R$ [Valor do Lance]</p>
            <p>Você pode acessar a plataforma para aceitar ou recusar o lance.</p>
            <a href="[Link para a plataforma]" class="button">Ver Lance</a>
        </div>
        <div class="email-footer">
            <p>Equipe FIER</p>
            <p>&copy; 2024 FIER. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`,
    NOTIFICATION_AUCTION_APPROVE: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lance Aprovado</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }
        .email-header, .email-footer {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-header img {
            width: 100px;
        }
        .email-body {
            padding: 20px;
        }
        .email-footer {
            font-size: 12px;
        }
        .email-body h2 {
            color: #4CAF50;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>

</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Lance Aprovado</h1>
        </div>
        <div class="email-body">
            <h2>Parabéns! Seu lance foi aprovado.</h2>
            <p>Olá [Nome do Cliente],</p>
            <p>O fornecedor aprovou seu lance no produto <strong>[Nome do Produto]</strong> pelo valor de <strong>R$ [Valor do Lance]</strong>.</p>
            <p>Agora você pode seguir com o processo de compra na plataforma.</p>
            <a href="[Link para a plataforma]" class="button">Continuar Compra</a>
        </div>
        <div class="email-footer">
            <p>Equipe FIER</p>
            <p>&copy; 2024 FIER. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`,
    NOTIFICATION_AUCTION_REFUSE: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lance Recusado</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }
        .email-header, .email-footer {
            background-color: #8f0000;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-header img {
            width: 100px;
        }
        .email-body {
            padding: 20px;
        }
        .email-footer {
            font-size: 12px;
        }
        .email-body h2 {
            color: #d30000;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #a70000;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>

</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Lance Recusado</h1>
        </div>
        <div class="email-body">
            <h2>Seu lance foi recusado</h2>
            <p>Olá [Nome do Cliente],</p>
            <p>Infelizmente, o fornecedor recusou seu lance no produto <strong>[Nome do Produto]</strong> pelo valor de R$ [Valor do Lance].</p>
            <p>Você pode tentar realizar um novo lance ou buscar outras opções na plataforma.</p>
            <a href="[Link para a plataforma]" class="button">Ver novas opções</a>
        </div>
        <div class="email-footer">
            <p>Equipe FIER</p>
            <p>&copy; 2024 FIER. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`
}
