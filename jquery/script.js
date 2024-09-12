const headd = document.querySelector('.nav1');
fetch('../header.html')
.then(res=>res.text())
.then(data=>{
    headd.innerHTML = data
})
.catch(error => console.error('Error fetching header.html:', error));