import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {Proxy, PP, Actions, VirtualProps, PPP, PPE} from './types';
import {register} from 'be-hive/register.js';

export class BeInquiring extends EventTarget implements Actions{

}

const tagName = 'be-inquiring';
const ifWantsToBe = 'inquiring';
const upgrade = '*';

define<Proxy & BeDecoratedProps<Proxy, Actions>, Actions>({
    config:{
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: [],
            proxyPropDefaults: {

            }
        },
        actions: {

        }
    },
    complexPropDefaults: {
        controller: BeInquiring,
    }
});
register(ifWantsToBe, upgrade, tagName);