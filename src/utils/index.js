export function Validate(value){
    if(Array.isArray(value) && value.length > 0)
        return true;
    return (value !== null && value !== undefined) ? true: false;
        
}