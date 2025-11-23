export function checkHeading(str) {
    return /^(\*)(\*)(.*)(.*)\*$/.test(str);
};

export function replaceHeadingStr(str) {
    return str.replace(/^(\*)(\*)|(\*)(\*)\*$/g,'');
};