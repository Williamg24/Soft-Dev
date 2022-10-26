import csv
from termios import CS5
with open ('students.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row['name'], row['age'], row['id'])

with open('courses.csv') as csvfile2:
    reader = csv.DictReader(csvfile2)
    for row in reader:
        print(row['code'],row['mark'],row['id'])