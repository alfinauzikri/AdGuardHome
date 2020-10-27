import DhcpSearchResultOtherServer, { IDhcpSearchResultOtherServer } from './DhcpSearchResultOtherServer';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDhcpSearchV6 {
    other_server?: IDhcpSearchResultOtherServer;
}

export default class DhcpSearchV6 {
    readonly _other_server: DhcpSearchResultOtherServer | undefined;

    get otherServer(): DhcpSearchResultOtherServer | undefined {
        return this._other_server;
    }

    constructor(props: IDhcpSearchV6) {
        if (props.other_server) {
            this._other_server = new DhcpSearchResultOtherServer(props.other_server);
        }
    }

    serialize(): IDhcpSearchV6 {
        const data: IDhcpSearchV6 = {
        };
        if (typeof this._other_server !== 'undefined') {
            data.other_server = this._other_server.serialize();
        }
        return data;
    }

    validate(): string[] {
        const validateRequired = {
            other_server: !this._other_server ? true : this._other_server.validate().length === 0,
        };
        const isError: string[] = [];
        Object.keys(validateRequired).forEach((key) => {
            if (!(validateRequired as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IDhcpSearchV6): DhcpSearchV6 {
        return new DhcpSearchV6(props);
    }

    readonly keys: { [key: string]: string } = {
        otherServer: 'other_server',
        }
;

    mergeDeepWith(props: Partial<DhcpSearchV6>): DhcpSearchV6 {
        const updateData: Partial<IDhcpSearchV6> = {};
        Object.keys(props).forEach((key: keyof DhcpSearchV6) => {
            const updateKey = this.keys[key] as keyof IDhcpSearchV6;
            if ((props[key] as any).serialize) {
                (updateData[updateKey] as any) = (props[key] as any).serialize() as Pick<IDhcpSearchV6, keyof IDhcpSearchV6>;
            } else {
                (updateData[updateKey] as any) = props[key];
            }
        });
        return new DhcpSearchV6({ ...this.serialize(), ...updateData });
    }
}