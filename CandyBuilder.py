import urllib.request

url = "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/MorePudding.js"  # Replace with the actual URL of the file you want to download
destination_file = "PuddingMod.js"  # Replace with the desired local file name

urllib.request.urlretrieve(url, destination_file)
url = "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/bootstrap-stripped.css"  # Replace with the actual URL of the file you want to download
destination_file = "bootstrap-stripped.css"  # Replace with the desired local file name

urllib.request.urlretrieve(url, destination_file)


Candy_file = open("CandyMod.js", "w", encoding='utf-8')
Candy_init = open("CandyInit.js", "r", encoding='utf-8')
pudding = open("PuddingMod.js", "r", encoding='utf-8')

Candy_file.write(pudding.read())
Candy_file.write(Candy_init.read())
pudding.close()
Candy_init.close()
Candy_file.close()