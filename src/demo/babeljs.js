// test babeljs transformation

export function presentTransform() {
  // ES2024
  // unicode-sets-regex
  const regexp = /[\p{ASCII}&&\p{Decimal_Number}]/v; // 将v转u，/[0-9]/u

  // ES2022
  // class-properties
  class Bork {
    static a = 'foo';
    static b;

    x = 'bar';
    y;
  }
  // ES2021
  // numeric-separator
  let budget = 1_000_000_000_000;

  return {
    regexp,
    Bork,
    budget,
  };
}
export function pluginTransform() {
  // decorators
  @isTestable(true)
  class MyClass {}
  function isTestable(value) {
    return function decorator(target) {
      target.isTestable = value;
    };
  }
  // function-bind
  {
    const box = {
      weight: 2,
      getWeight() {
        return this.weight;
      },
    };

    const { getWeight } = box;
    console.log(box.getWeight()); // prints '2'
    const bigBox = { weight: 10 };
    console.log(bigBox::getWeight()); // prints '10'
    function add(val) {
      return this + val;
    }
    console.log(bigBox::getWeight()::add(5)); // prints '15'
  }
}
