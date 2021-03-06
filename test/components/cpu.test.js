const Cpu = require('../../src/components/cpu')
const Memory = require('../../src/components/memory')

describe('CPU reset', () => {
  const memory = new Memory({
    program: [0x610a, 0x5678, 0x9abc]
  })

  const processor = new Cpu({
    memory
  }).step().reset()

  test('should empty the stack', () => expect(processor.stack).toEqual([]))
  test('should reset the program counter', () => expect(processor.pc).toBe(0x0200))

  // Is this really expected?
  // test('should reset memory addresses higher than 0x0200', () => expect(memory.snapshot().slice(0x0200)).toEqual(new Array(0xe00).fill(0x0)))
})
