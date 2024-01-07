export const formatArrayToText = (array: string[]) => {
    if (!array || array.length === 0) {
        return '';
    }

    return array.join(', ');
}