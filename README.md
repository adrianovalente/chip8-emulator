# CHIP-8 Emulator

[![Build Status](https://travis-ci.org/adrianovalente/chip8-emulator.svg?branch=master)](https://travis-ci.org/adrianovalente/chip8-emulator)

> Hardware Emulation has always fascinated me.

As a lot of people say that [CHIP-8](https://en.wikipedia.org/wiki/CHIP-8) is an easy system to get started writing emulators, I decided to accept the challenge.

## Instructions
- [ ] 0NNN	Execute machine language subroutine at address NNN
- [ ] 00E0	Clear the screen
- [ ] 00EE	Return from a subroutine
- [x] 1NNN	Jump to address NNN
- [ ] 2NNN	Execute subroutine starting at address NNN
- [x] 3XNN	Skip the following instruction if the value of register VX equals NN
- [x] 4XNN	Skip the following instruction if the value of register VX is not equal to NN
- [x] 5XY0	Skip the following instruction if the value of register VX is equal to the value of register VY
- [x] 6XNN	Store number NN in register VX
- [x] 7XNN	Add the value NN to register VX
- [x] 8XY0	Store the value of register VY in register VX
- [x] 8XY1	Set VX to VX OR VY
- [x] 8XY2	Set VX to VX AND VY
- [x] 8XY3	Set VX to VX XOR VY
- [x] 8XY4	Add the value of register VY to register VX
  Set VF to 01 if a carry occurs
  Set VF to 00 if a carry does not occur
- [x] 8XY5	Subtract the value of register VY from register VX
  Set VF to 00 if a borrow occurs
  Set VF to 01 if a borrow does not occur
- [x] 8XY6	Store the value of register VY shifted right one bit in register VX
  Set register VF to the least significant bit prior to the shift
- [x] 8XY7	Set register VX to the value of VY minus VX
  Set VF to 00 if a borrow occurs
  Set VF to 01 if a borrow does not occur
- [x] 8XYE	Store the value of register VY shifted left one bit in register VX
  Set register VF to the most significant bit prior to the shift
- [x] 9XY0	Skip the following instruction if the value of register VX is not equal to the value of register VY
- [ ] ANNN	Store memory address NNN in register I
- [ ] BNNN	Jump to address NNN + V0
- [ ] CXNN	Set VX to a random number with a mask of NN
- [ ] DXYN	Draw a sprite at position VX, VY with N bytes of sprite data starting at the address stored in I
  Set VF to 01 if any set pixels are changed to unset, and 00 otherwise
- [ ] EX9E	Skip the following instruction if the key corresponding to the hex value currently stored in register VX is pressed
- [ ] EXA1	Skip the following instruction if the key corresponding to the hex value currently stored in register VX is not pressed
- [ ] FX07	Store the current value of the delay timer in register VX
- [ ] FX0A	Wait for a keypress and store the result in register VX
- [ ] FX15	Set the delay timer to the value of register VX
- [ ] FX18	Set the sound timer to the value of register VX
- [ ] FX1E	Add the value stored in register VX to register I
- [ ] FX29	Set I to the memory address of the sprite data corresponding to the hexadecimal digit stored in register VX
- [ ] FX33	Store the binary-coded decimal equivalent of the value stored in register VX at addresses I, I+1, and I+2
- [ ] FX55	Store the values of registers V0 to VX inclusive in memory starting at address I
  I is set to I + X + 1 after operation
- [ ] FX65	Fill registers V0 to VX inclusive with the values stored in memory starting at address I
  I is set to I + X + 1 after operation

## Contributing

Although contributions are always welcome, this project is still under initial setup.

![](http://24.media.tumblr.com/tumblr_m3x648wxbj1ru99qvo1_500.png)

## Some inspiration

- [Mastering CHIP-8](http://mattmik.com/files/chip8/mastering/chip8.html)
- [Michael Fogleman's post on medium about his NES emulator](https://medium.com/@fogleman/i-made-an-nes-emulator-here-s-what-i-learned-about-the-original-nintendo-2e078c9b28fe)
- [This awesome youtube series about the Nintendo Game Boy](https://www.youtube.com/watch?v=RZUDEaLa5Nw)
