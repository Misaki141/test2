// JavaScript Document
var sum=0;
for(i=1;i<=1000;i++)
{
	if(i%3==0&&i%7==0)
	{
		if(i>10&&i<=99)
		{document.write(i+"  ");}
	else
	     {document.write(i+" ");}
		sum=sum+1;
		if(sum%10==0)
		{
			document.write("<br>");
		}
	}
}