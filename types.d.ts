import {BeDecoratedProps, MinimalProxy, EventConfigs} from 'be-decorated/types';

export interface EndUserProps {
    // when: string; //default:  beDecorated.indefinite.resolved;
    // passTo: string; //default:  beDecorated.indefinite.host
    // pullFrom: string; //default:  beDecorated.indefinite.clonedTemplate
}

export interface VirtualProps extends EndUserProps, MinimalProxy{

}

export type Proxy = Element & VirtualProps;

export interface PP extends VirtualProps{
    proxy: Proxy;
}

export type PPP = Partial<PP>;

export type PPE = [PPP, EventConfigs<PPP, Actions>];

export interface Actions{
    
}