from bs4 import BeautifulSoup
import urllib.request

def renderpage(url):
	html_page = urllib.request.urlopen(url)
	parsed_html=BeautifulSoup(html_page,"html.parser")
	return parsed_html

def write_to_file(parsed_html):
	file1=open("rendered.html","w+")
	for line in parsed_html:
		file1.write(str(line))
		print("Operation done")

def main():
	url=input("Enter the url: ")
	parsed_html = renderpage(url)
	write_to_file(parsed_html)
if __name__ == '__main__':
	main()
