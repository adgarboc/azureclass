const chk = document.getElementById('chk');

chk.addEventListener('change', themer);

date = new Date(); 
hour = date.getHours();
if(hour >= 20 || hour <= 8)
{
	themer();
}

function themer()
{
	document.body.classList.toggle('dark');
	var a = document.getElementsByClassName("zelda");
	for (let index = 0; index < a.length; index++) 
	{
		a[index].classList.toggle("dark");
	}
}
