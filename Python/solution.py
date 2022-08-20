import requests
import math

class PriceConverter:
    def showResult(self):
        # from_currency =str(
        #     input("enter in the currenct you'd like to convert:")).upper()
        from_currency = 'USD'  
        extensionsToCheck = ['USD','JPY','GBP','CAD','AUD','SEK','SGD','MXN','NZD','DKK','BRL','NOK','HKD','CLP','THB','ZAR','INR','COP']  
        to_currency = str(
            input("Enter in the currency you'd like to convert to: ")).upper()
        res = [ele for ele in extensionsToCheck if(ele in to_currency)]
        if not bool(res):
            to_currency='USD'

        amount = float(input("Enter in the amount of money: "))

        url = f"https://api.apilayer.com/exchangerates_data/convert?to={to_currency}&from={from_currency}&amount={amount}"
        payload = {}
        headers= {
        "apikey": "mvyP4NPjJr8M4H46kYIYlfpZIAdqtUTT"
        }

        response = requests.request("GET", url, headers=headers, data = payload)

        # status_code = response.status_code
        # result = response.text
        # # print(status_code)
            
        res1 = abs(response.json()['result'])
        
        number = int(res1)

        def round_up(n, decimals=0):
            multiplier = 10 ** decimals
            return math.ceil(n * multiplier) / multiplier


        if number ==0:
            converted_num = "{}".format(number)
            print(converted_num + '.99')
        else:
            
            
            count = 0
            while number > 0 :
                number = number // 10
                count = count + 1

            if count ==2 or count ==3:

                # print(round(res1,2),'res1')
                converted_num = int(round(res1,2))
                converted_num = "{}".format(converted_num)
                converted_num = converted_num + '.99$'
                print((converted_num),'converted')
            elif count ==4:
                converted_num = int(round(res1,2))
                # print((converted_num),'converted')
                converted_num = int(round_up(converted_num,-1))
                converted_num = "{}".format(converted_num)
                print((converted_num) + '$','converted')
            elif count >4:
                converted_num = int(round(res1,2))
                converted_num = int(round_up(converted_num,-2))
                converted_num = "{}".format(converted_num)
                print((converted_num) + '$','converted')
            elif count ==1:
                converted_num = int(round(res1,2))
                converted_num = "{}".format(converted_num)
                print(converted_num + '$')

            

        
  

ob = PriceConverter()
ob.showResult()
