export function Validate(value){
    if(Array.isArray(value))
        return value.length > 0 ? true: false;

    return (value !== null && value !== undefined) ? true: false;
        
}