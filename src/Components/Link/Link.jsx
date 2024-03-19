function Link({route}) {
    return (
        <li className="mr-8" key={route.id}>
            <a href={route.path}>{route.name}</a>
        </li>
    )
}


export default Link
