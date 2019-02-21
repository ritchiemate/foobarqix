import unittest
import foo


class SimpleTestCase(unittest.TestCase):
    def setUp(self):
        self.rules = {3: 'Foo', 5: 'Bar', 7: 'Qix'}

    def testA(self):
        assert foo.calculate(3, self.rules) == 'Foo'

    def testB(self):
        assert foo.calculate(5, self.rules) == 'Bar'

    def testC(self):
        assert foo.calculate(15, self.rules) == 'FooBar'

    def testD(self):
        assert foo.get_word(6, 3, 'Foo') == 'Foo'

    def testE(self):
        assert foo.calculate(8, self.rules) == 8

    def testF(self):
        assert foo.calculate(7, self.rules) == 'Qix'


if __name__ == '__main__':
    unittest.main()  # run all tests
