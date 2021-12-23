import {useRouter} from 'next/router';


function Doc() {

    const router = useRouter()
    const {params=[]} = router.query

    if(params.length) {
        return (
            <>
            <h1>list Route</h1>
            <br/>
            <br/>
            <br/>
            {params.map((item,idx)=> (
                <h3 key={idx} > {item} </h3>
            ))}
            </>
        )
    }

    return <h1>Doc Page</h1>
}

export default Doc