var list = document.getElementsByClassName("myimg")[0];

function changetheprofile()
{
	if(list.className==='myimg')
	{
		list.src='images/avatar1.png';
		list.className='myimg1';
	}else if(list.className==='myimg1')
	{
		list.src='images/avatar2.png';
		list.className='myimg2';
	}else if(list.className==='myimg2')
	{
		list.src='images/avatar3.png';
		list.className='myimg3';
	}else if(list.className==='myimg3')
	{
		list.src='images/avatar4.png';
		list.className='myimg';
	}

}

let carsoulbtn  = document.getElementById('s1');

function carsoulanimation()
{

	
	if(carsoulbtn.id==='s1')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s2';
	}else if (carsoulbtn.id==='s2')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s3';
	}else if (carsoulbtn.id==='s3')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s4';
	}
	else if (carsoulbtn.id==='s4')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s5';
	}
	else if (carsoulbtn.id==='s5')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s6';
	}
	else if (carsoulbtn.id==='s6')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s7';
	}
	else if (carsoulbtn.id==='s7')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s1';
	}
	
	
	
}

setInterval(carsoulanimation,3000);

