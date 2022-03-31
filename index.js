const app = require('express')()
const cors = require('cors')
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.use(cors());
app.get('/test', (req,res) => res.send(`<form method="POST" action="https://www.formrocket.me/api/forms/74219764/Test%20form/65162610/post/showSuccessMessageOnDone">
<input name="example" placeholder="example input" />
</form`))
app.post('/success', (req, res) => res.render('success.html', {req:req}))
app.post('/lockError', (req,res) => res.render('error.html', {req:req, title: "Form locked!", desc: "This form is locked and cannot recieve responses."}))
app.get('/main.css', (req, res) => {
	res.sendFile(__dirname + '/views/main.css')
})
app.get('/dist/output.css', (req, res) => {
	res.sendFile(__dirname + '/views/dist/output.css')
})
app.post('/ratelimitHit', (req, res) => res.status(429).render('error.html', {req:req, title: "Ratelimit hit!", desc: "Please wait 5 seconds before sending another response to a form."}))
app.get('/', (_, res) => res.send(`<title>Welcome, Astronaut</title><style>@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,600;0,800;1,200;1,300;1,400;1,500;1,700;1,800&display=swap');body{font-family:Karla;font-size: 30px;	background-color: rgb(17 24 39);color:white;padding:30px;}</style><b>Welcome to FormRocket.</b> You're probably here after submitting a form, and want to learn more. FormRocket is a free form app you can use to create forms that are completely yours, and integrates directly into your own website. Learn more at <b style="cursor:pointer;color:#7143f1;" onclick="window.location.href='https://www.formrocket.me'">formrocket.me</b>`))
app.get('/config', (req, res) => {
	var q = req.query
	if (q.userId && q.formName && q.formId && q.formSecret) {
	res.render('config.html', {req:req,res:res,dt:+Date.now()})
	} else 
	{
		res.render('error.html', {req:req, title: "Bad Request", desc: "Your client sent an illegal request."})
	}
})
app.use((_,res) => res.redirect('https://www.formrocket.me/#_'))
app.listen(3000, () => console.log('Listening on port 3000'))

