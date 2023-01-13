export type InterfaceBase<T> = {
    [P in keyof T]: T[P];
};

export type Dictionary = { [key: string]: any }; // eslint-disable-line

export type submitFormType<T extends InterfaceBase<T> = Dictionary> = (
    data: Partial<T>
) => void | Promise<void>;

