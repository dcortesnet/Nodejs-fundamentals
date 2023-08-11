const os = require('os');

const cpusCoreLogic = os.cpus();

console.log(cpusCoreLogic);

/**
   * 
  [
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 3447515,
        nice: 0,
        sys: 2110515,
        idle: 35201531,
        irq: 469203
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 5433046,
        nice: 0,
        sys: 2016187,
        idle: 33310171,
        irq: 48046
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 4561687,
        nice: 0,
        sys: 1585640,
        idle: 34612078,
        irq: 35703
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 4302812,
        nice: 0,
        sys: 1527750,
        idle: 34928843,
        irq: 35468
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 4573296,
        nice: 0,
        sys: 1385953,
        idle: 34800156,
        irq: 26500
      }
    },
    {
      model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz',
      speed: 2904,
      times: {
        user: 5043656,
        nice: 0,
        sys: 1313406,
        idle: 34402343,
        irq: 24593
      }
    }
  ]
 */