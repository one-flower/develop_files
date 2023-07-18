def set_reverse(s):
    """
    字符串反转
    :param s: 反转字符串
    :return: 反转后的字符串
    """
    return s[::-1]


def subset(s, x, y):
    """_summary_

    Args:
        s (_type_): _description_
        x (_type_): _description_
        y (_type_): _description_

    Returns:
        _type_: _description_
    """
    return s[x:y]


if __name__ == '__main__':
    print(set_reverse('ascde'))
    print(subset('abcde', 1, 4))
