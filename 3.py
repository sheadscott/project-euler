# https://projecteuler.net/thread=3&page=7#321513
# User: borozcod

num = 600851475143
i = 2
while True:
    if(num % i == 0):
        print(i)
        num = num / i
        print("Number", num)
        # If the resut of the num dived by i is 1 then i must be num, therefore num must be i and largest prime number
        if(num == 1):
            #largest prime factor :)
            print(i)
            break
    else:
        i+=1