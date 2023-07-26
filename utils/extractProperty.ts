export const extractProperty = <Type, Value extends keyof Type>(
    data: Type,
    field: Value
): Type[Value] => {
    return data[field];
};
