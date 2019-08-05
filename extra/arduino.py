# install serial https://www.youtube.com/watch?v=Pf-cGzOQmXU

import serial
import asyncio
import websockets

print("Diga o nome do socket: \n")
uri = input()
# uri = "ws://localhost:8000"
# print("Diga o codigo da cafeteira: \n")
# code = input()
code = "12"

async def arduinoShield():
	arduino=serial.Serial('COM5', 9600)

	async with websockets.connect(uri) as websocket:
		await websocket.send(code);

		while (1):

			req = await websocket.recv()
			print(f"< {req}")
			arduino.write(bytes(req, 'utf-8'))

			res = arduino.read_until()
			print(f"< {res}")
			await websocket.send(res.decode("utf-8"))


asyncio.get_event_loop().run_until_complete(arduinoShield())