import {BeDecoratedProps, MinimalProxy, EventConfigs} from 'be-decorated/types';
import {Target} from 'trans-render/lib/types';

export interface EndUserProps {
    // when: string; //default:  beDecorated.indefinite.resolved;
    // passTo: string; //default:  beDecorated.indefinite.host
    // pullFrom: string; //default:  beDecorated.indefinite.clonedTemplate
    hostTarget?: Target;
}

export interface VirtualProps extends EndUserProps, MinimalProxy{
    propertyBag: EventTarget,
    propertyBagUpdater: PropertyBagUpdater,
}

export interface PropertyBagUpdater{

}

export type Proxy = Element & VirtualProps;

export interface PP extends VirtualProps{
    proxy: Proxy;
}

export type PPP = Partial<PP>;

export type PPE = [PPP, EventConfigs<PPP, Actions>];

export interface Actions{

}