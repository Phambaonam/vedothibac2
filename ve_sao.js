/**
 * Created by NamDuyen on 11/02/2017.
 */

let demo = (m, n) => {
    let result = '';
    let temp = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m; j++) {
            if (j == 1 || j == m || i == 1 || i == m || i <= n || i > (m - n) || j <= n || j > (m - n)) {
                result += '* ';
            } else {
                result += '  ';
            }
        }
        if (i == 1) {
            temp = result.length;
        }
        let step = result.length;
        if (step >= 10) {
            console.log(result.slice(temp * (i - 1), step));
        } else {
            console.log(result);
        }
    }
};
demo(10, 2);
