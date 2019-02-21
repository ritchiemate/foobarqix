const isDivisibleBy = (input, divisor) => input % divisor === 0;

const Simple = (input) => {
  let result = '';
  if (isDivisibleBy(input, 3)) {
    result += 'Foo';
  }
  if (isDivisibleBy(input, 5)) {
    result += 'Bar';
  }
  return result === '' ? input : result;
};

const SimpleExtended = (input) => {
  let result = '';
  if (isDivisibleBy(input, 3)) {
    result += 'Foo';
  }
  if (isDivisibleBy(input, 5)) {
    result += 'Bar';
  }
  if (isDivisibleBy(input, 7)) {
    result += 'Qix';
  }
  return result === '' ? input : result;
};

const Parameterised = (rules, input) => {
  let result = '';
  rules.forEach((rule) => {
    if (isDivisibleBy(input, rule.divisor)) {
      result += rule.output;
    }
  });
  return result === '' ? input : result;
};

const Predicate = (rules, input) => {
  let result = '';
  rules.forEach((rule) => {
    if (rule.predicate(input)) {
      result += rule.output;
    }
  });
  return result === '' ? input : result;
};

export default {
  Simple,
  SimpleExtended,
  Parameterised,
  Predicate,
};
