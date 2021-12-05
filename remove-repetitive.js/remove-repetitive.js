removerRepetitive()
export default function removerRepetitive(string) {
    let result = null
    result = Array.from(new Set(string)).join('');
    return result
    }
