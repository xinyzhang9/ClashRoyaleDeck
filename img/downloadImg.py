import urllib


for i in range(1,65):
	url = 'http://clashroyaledeckbuilder.com/assets/cards/'+str(i)+'.png'
	imgName = str(i)+'.png'
	urllib.urlretrieve(url,imgName)