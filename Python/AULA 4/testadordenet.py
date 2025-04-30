import speedtest
test = speedtest.Speedtest()
down = test.download()
up = test.upload()
print({down})
print({up})