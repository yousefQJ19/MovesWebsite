const persone=["yousef","noor","ammar","omar","majed","alaa","keara"]


export function RenderNameList( {name}){
    persone.push(name)
    const   ListItems= persone.map(people=><li>{people}</li>);
    return <ul>{ListItems}</ul>
}

