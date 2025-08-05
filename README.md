# nextjs-ui
nextjs-ui 


curl --location 'http://localhost:5000/api/run-tests' \
--header 'Accept: */*' \
--header 'Accept-Language: en-US,en-GB;q=0.9,en;q=0.8' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'Origin: http://localhost:3000' \
--header 'Referer: http://localhost:3000/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: same-origin' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36' \
--header 'sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Windows"' \
--data '{
    "url": "http://localhost:3000/recharge",
     "scenario": [
    "1. Fill the mobile number field with the value 736924878.",
    "2. Click on the Buy Airtime/Data button.",
    "3. Enter the amount as 20",
    "4. Click on the Buy button .",
    "5. Choose a payment option Debit/Credit Card.",
    "6. Click on Continue to pay button.",
    "7. Fill in the payment details as required by the gateway.",
    "8. Submit the payment and wait to be redirected back.",
    "9. Confirm arrival on the payment status or confirmation page.",
    "10. Generate or log a report summarizing the transaction status (success/failure, reference ID, etc.)."
  ]
}'
