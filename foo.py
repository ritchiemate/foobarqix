
def get_word(num, div, word):
    if num % div == 0:
        return word
    return ''


def calculate(num, rules):
    word = ''
    for key, value in rules.items():
        word += get_word(num, key, value)

    if not word:
        return num
    return word


print(calculate(70, {3: 'Foo', 5: 'Bar', 7: 'Qix'}))
