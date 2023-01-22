import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeInquiring extends EventTarget {
}
const tagName = 'be-inquiring';
const ifWantsToBe = 'inquiring';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: [],
            proxyPropDefaults: {}
        },
        actions: {}
    },
    complexPropDefaults: {
        controller: BeInquiring,
    }
});
register(ifWantsToBe, upgrade, tagName);
