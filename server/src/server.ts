import app from './app';

const PORT = process.env.PORT;

if (!PORT)
	throw new Error("App Port is not defined. Please set PORT in env.");

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});