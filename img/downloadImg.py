import json
import urllib

res = []

def format_name(name):
	arr = name.lower().split(' ')
	return "_".join(arr)

with open('../cards.json', 'r') as f:
    cards = json.load(f)
    for i in xrange(1,65):
    	url = 'https://cdn-en.clashroyalepedia.com/cards/'+format_name(cards[str(i)]['name'])+'.png'
    	imgName = str(i)+'.png'
    	urllib.urlretrieve(url,imgName)
