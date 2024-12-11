interface IPost{
    title: string;
    id: number;
    description: string
}

interface IUser{
    name: string;
    age: number;
    class: string
}



// defining FetchData for 

async function fetchPostData(path: string) : Promise<IPost[]>{
    const data = await fetch(`www.example.com${path}`)
    return data.json();
}

(async()=>{
    const data = await fetchData("/post")
})()


async function fetchUserData(path: string) : Promise<IUser[]>{
    const data = await fetch(`www.example.com${path}`)
    return data.json();
}

// Now execute DRY principle

async function fetchData<T>(url: string) : Promise<T>{
    const data = await fetch(`www.example.com${url}`)
    return data.json();
}

(async()=>{
    const data = await fetchData<IUser>("/post") // simplily we can use same for IPost
})()
