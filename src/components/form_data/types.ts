export type InterfaceBase<T> = {
    [P in keyof T]: T[P];
};
export type submitFormType<T extends InterfaceBase<T> > = (
    data: Partial<T>
) => void | Promise<void>;

