
document.getElementById('no').addEventListener('click', function(e) {
    alert(this.id)
}
)

document.getElementById('cancel').addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
