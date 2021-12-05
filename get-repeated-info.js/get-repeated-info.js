getRepeatedInfo(10)
export default function getRepeatedInfo(number) {
    let result = null;
    intStr = number.toString()
    intNum = parseInt(number)
    result = intStr.repeat(intNum);
    return result
    }
