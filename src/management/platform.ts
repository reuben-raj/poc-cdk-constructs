export type PlatformShortCode = 'e3' | 'gt' | 'rr' | 'poc';

export type Platform =
    | 'episteme'
    | 'gadgetstrend'
    | 'reubenraj'
    | 'poc'

export type PlatformAccountPrefix =
    | 'episteme'
    | 'gadgetstrend'
    | 'reubenraj'
    | 'poc'

export const platformComponents = {
    episteme: [
        'aaa',
        'api',
        'web',
    ],
    gadgetstrend: [
        'aaa',
        'api',
        'web',
    ],
    reubenraj: [
        'account',
        'infrastructure',
    ],
    poc: [
        'account',
        'infrastructure',
        'web',
        'api',
        'aaa',
    ],
} as const satisfies Record<Platform, readonly string[]>;

export type PlatformComponentsType = typeof platformComponents;
export type PlatformComponentsValue<P extends Platform> = PlatformComponentsType[P];

export type PlatformComponents<P extends Platform> = P extends keyof typeof platformComponents
    ? PlatformComponentsValue<P>[number]
    : never;

export const getPlatformShortCode = (platform: Platform): PlatformShortCode => {
    switch (platform) {
        case 'episteme':
            return 'e3';
        case 'gadgetstrend':
            return 'gt';
        case 'reubenraj':
            return 'rr';
        case 'poc':
            return 'poc';
        default:
            throw new Error(`Invalid platform '${platform}'`);
    }
};
