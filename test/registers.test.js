import test from 'ava'

import Chip8 from '../src/chip-8'

test('instruction 0x6XNN should set value NN to register X', t => {
  t.is(
    new Chip8()
      .load([0x63ab])
      .execute()
      .registers[3],
    0xab
  )

})

test('instruction 0x6XNN should increment program counter', t => {
  t.is(
    new Chip8()
      .load([0x63ab])
      .execute()
      .pc,
    0x201
  )
})

test('instruction 0x7XNN should add NN to register X', t => {
  const processor = new Chip8()
    .load([0x63ab, 0x7311])
    .execute(2)

  t.is(processor.registers[3], 0xbc)
  t.is(processor.registers[15], 0x0)
})

test('instruction 0x7XNN should should set carry out when necessary', t => {
  const processor = new Chip8()
    .load([0x63ab, 0x73ab])
    .execute(2)

  t.is(processor.registers[3], 0x56)
  t.is(processor.registers[15], 0x1)
})

test('instruction 0x7XNN should increment program counter', t => {
  t.is(
    new Chip8()
      .load([0x63ab, 0x7311])
      .execute(2)
      .pc,
    0x202
  )
})

test('instruction 0x8XY0 should the value stored in Y to X', t => {
  t.is(
    new Chip8({debug: true})
      .load([0x63ab, 0x8430])
      .execute(2)
      .registers[4],
    0xab
  )
})
