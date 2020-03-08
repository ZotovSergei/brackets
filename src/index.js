module.exports = function check(str, bracketsConfig) {
    let text = str.split('');
    let config = [...bracketsConfig];
    let startSym = [],
        endSym = [],
        result = [],
        repeatSign = [];
    let tmlJ = 0;
    let tmpEl = 0;
    for (let i = 0; i < config.length; i++) {
        for (let j = 0; j < config[i].length; j++) {
            const element = config[i][j];
            if (j) {
                endSym.push(element);
                break;
            }
            startSym.push(element);
        }
    }

    // console.log(endSym);
    // console.log(startSym);
    // console.log(text);
    let len = text.length;
    for (let i = 0; i < len; i++) {
        const element = text[i];
        for (let j = 0; j < startSym.length; j++) {
            const stSign = startSym[j];
            if (element == stSign) {
                // console.log(element);
                if (text[i + 1] == endSym[j]) {
                    //text.splice(i,2);
                    text.splice(i, 2);
                    i = 0;
                    len = text.length;
                    // console.log(text);
                }

            }
        }
    }

    for (let i = 0; i < len; i++) {
        const element = text[i];
        for (let j = 0; j < startSym.length; j++) {
            const stSign = startSym[j];
            if (element == stSign) {
                // console.log(element);
                if (text[i + 1] == endSym[j]) {
                    //text.splice(i,2);
                    delete text[i];
                    delete text[i + 1];

                    i = 0;
                    len = text.length;
                    // console.log(text);
                }

            }
        }
    }

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        if (element === undefined) {
            continue;
        } else {
            result.push(element);
            // console.log(element);
        }
    }
    if (result.length == 0) {
        return true;
    } else {
        return false;
    }
}