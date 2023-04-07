/**
 * @function debugLogger
 * @param {string} message Main message for log message group
 * @param {object} objectMap TODO
 */
export function debugLogger(message, objectMap) {
    const formattedStringifiedObjects = Object.keys(objectMap).reduce((acc, currKey) => {
        try {
            acc.push(`++++++ ${currKey}: \n${JSON.stringify(objectMap[currKey], null, 4)}\n`);
        } catch (e) {
            /** */
        }
        return acc;
    }, []);

    console.log(
        `---------------------------------------------------- ${message} ----------------------------------------------------\n`,
        ...formattedStringifiedObjects
    );
}
