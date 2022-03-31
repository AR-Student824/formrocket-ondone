const app = require('express')()
const cors = require('cors')
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.use(cors());
app.get('/test', (req,res) => res.send(`<form method="POST" action="https://www.formrocket.me/api/forms/74219764/Test%20form/65162610/post/showSuccessMessageOnDone">
<input name="example" placeholder="example input" />
</form`))
app.post('/success', (req, res) => {
    res.send(`<!doctype html>
    <html>
        <head>
                <link href="https://formrocket-onsubmit.attachments.repl.co/dist/output.css" rel="stylesheet">
                <link href="/main.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <title>🚀 Thank you!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            margin: 5%;
                        }
                    </style>
            <script>
                if (window.history.replaceState) {
                    window.history.replaceState(null, null, window.location.href);
                }
            </script>
        </head>
        <body class="bg-neutral-900">
            
                <svg style="width:100px;height:100px;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <h1 class="animate__animated animate__swing">Thank you!</h1>
                <p class="text-xl">${req.query.message ? req.query.message.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;") : 'This form has been successfully submitted. You may exit this page now.' }</p>
                                        <button onclick="window.location.href = 'https://www.formrocket.me/files/privacy.html'" type="button" class="text-white mt-2 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Privacy Policy</button>
                                    <button onclick="history.back()" type="button" class="text-white mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">${req.query.backText ? req.query.backText.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;") : 'Back' }</button>
    
                                    <button onclick="window.location.href = 'https://www.formrocket.me'" style="margin-right:2%;margin-bottom:2%;position:fixed;right:0px;bottom:0px;color:#7143f1;font-weight:900;" class="p-3 bg-neutral-900 rounded-lg hover:bg-neutral-800" title="Create powerful forms right from your HTML without worrying about storing responses.">🚀 Powered by FormRocket</button>
            
        </body>
    </html>
    
    
    `)
})
app.post('/lockError', (req,res) => {
    res.send(`<!doctype html>
<html>
    <head>
			<link href="https://formrocket-onsubmit.attachments.repl.co/dist/output.css" rel="stylesheet">
			<link href="/main.css" rel="stylesheet">
        <title>❌ Error!</title>
				<style>
					body {
						margin: 5%;
					}
				</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href);
            }
        </script>
    </head>
    <body class="bg-neutral-900">
			<svg style="width:100px;height:100px;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            <h1>Form Locked!</h1>
            <p class="text-xl">This form is locked and cannot recieve responses.</p>

						<button onclick="window.location.href = 'https://www.formrocket.me/files/privacy.html'" type="button" class="text-white mt-2 bg-gray-900 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Privacy Policy</button>
								<button onclick="history.back()" type="button" class="text-white mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back</button>

								<button onclick="window.location.href = 'https://www.formrocket.me'" style="margin-right:2%;margin-bottom:2%;position:fixed;right:0px;bottom:0px;color:#7143f1;font-weight:900;" class="p-3 bg-neutral-900 rounded-lg hover:bg-neutral-800" title="Create powerful forms right from your HTML without worrying about storing responses.">🚀 Powered by FormRocket</button>
        
    </body>
</html>`)



})
app.get('/main.css', (req, res) => {
	res.sendFile(__dirname + '/main.css')
})
app.post('/ratelimitHit', (req, res) => {
    res.send(`<!doctype html>
<html>
    <head>
			<link href="https://formrocket-onsubmit.attachments.repl.co/dist/output.css" rel="stylesheet">
			<link href="/main.css" rel="stylesheet">
        <title>❌ Error!</title>
				<style>
					body {
						margin: 5%;
					}
				</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href);
            }
        </script>
    </head>
    <body class="bg-neutral-900">
			<svg style="width:100px;height:100px;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            <h1>You are being ratelimited</h1>
            <p class="text-xl">Try again in ten seconds.</p>

						<button onclick="window.location.href = 'https://www.formrocket.me/files/privacy.html'" type="button" class="text-white mt-2 bg-gray-900 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Privacy Policy</button>
								<button onclick="history.back()" type="button" class="text-white mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back</button>

								<button onclick="window.location.href = 'https://www.formrocket.me'" style="margin-right:2%;margin-bottom:2%;position:fixed;right:0px;bottom:0px;color:#7143f1;font-weight:900;" class="p-3 bg-neutral-900 rounded-lg hover:bg-neutral-800" title="Create powerful forms right from your HTML without worrying about storing responses.">🚀 Powered by FormRocket</button>
        
    </body>
</html>`)
})
app.get('/', (_, res) => res.send(`<title>Welcome, Astronaut</title><style>@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,600;0,800;1,200;1,300;1,400;1,500;1,700;1,800&display=swap');body{font-family:Karla;font-size: 30px;	background-color: rgb(17 24 39);color:white;padding:30px;}</style><b>Welcome to FormRocket.</b> You're probably here after submitting a form, and want to learn more. FormRocket is a free form app you can use to create forms that are completely yours, and integrates directly into your own website. Learn more at <b style="cursor:pointer;color:#7143f1;" onclick="window.location.href='https://www.formrocket.me'">formrocket.me</b>`))

app.use((_,res) => res.redirect('https://www.formrocket.me/#_'))
app.listen(3000, () => console.log('Listening on port 3000'))

