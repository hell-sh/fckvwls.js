/* fckvwls.js - Md fr ll y 11-13 yr lds */

window.fckvwls = {
	rmvLlVwls: function()
	{
		fckvwls.rmvVwlsFrm(document.documentElement);
	},
	rmvVwlsFrm: function(lmnt)
	{
		if(!(lmnt instanceof HTMLElement))
		{
			return;
		}
		if(lmnt.children.length > 0)
		{
			for(let i in lmnt.children)
			{
				fckvwls.rmvVwlsFrm(lmnt.children[i]);
			}
		}
		else if(lmnt.innerHTML && ["STYLE"].indexOf(lmnt.tagName.toUpperCase()) == -1)
		{
			lmnt.textContent = fckvwls.rmvVwlsFrmStrng(lmnt.textContent);
		}
	},
	rmvVwlsFrmStrng: function(strng)
	{
		return strng.split("a").join("").split("e").join("").split("i").join("").split("o").join("").split("u").join("");
	}
};
