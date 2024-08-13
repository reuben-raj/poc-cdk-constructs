import { Platform, PlatformAccountPrefix } from './platform';
export enum Account {
    epistemeDev = '000000000000',
    epistemeProd = '000000000000',
    gadgetsDev = '000000000000',
    gadgetsProd = '000000000000',
    reubenDev = '000000000000',
    reubenProd = '000000000000',
}

export const Environments = ['dev', 'poc', 'test', 'ppe', 'prod'];

export function getEnvironmentFromContext(environment: string) {
    if (!Environments.includes(environment)) {
        throw new Error(
            `Provided environment: ${environment} is not allowed. Allowed values are: ${Object.values(
                Environments,
            ).join(', ')}`,
        );
    }
    return environment;
}

export function toAccount(account?: string): Account {
    if (!!account && (Object.values(Account) as string[]).includes(account)) {
        return account as Account;
    }
    throw new Error(`Account string ${account} is not a recognised or parsable account type`);
}

export function getPlatformAccountPrefixFromAccount(account: Account): PlatformAccountPrefix;
export function getPlatformAccountPrefixFromAccount(
    account: Account,
    fallbackPrefix: PlatformAccountPrefix,
): PlatformAccountPrefix;
export function getPlatformAccountPrefixFromAccount(
    account: Account,
    fallbackPlatform?: PlatformAccountPrefix,
): PlatformAccountPrefix {
    switch (account) {
        case Account.epistemeDev:
        case Account.epistemeProd:
            return 'episteme';
        case Account.gadgetsDev:
        case Account.gadgetsProd:
            return 'gadgetstrend';
        case Account.reubenDev:
        case Account.reubenProd:
            return 'reubenraj';
    }
}
