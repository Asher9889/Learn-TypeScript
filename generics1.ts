function logString(name: string){
    console.log(name);
    return name;
}

function logAnyThing<T>(arg: T): T{
    console.log(arg)
    return arg;
}

logAnyThing("[1,2,3,4]")


