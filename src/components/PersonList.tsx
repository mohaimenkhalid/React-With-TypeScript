type NameListProps = {
    names: {
        firstName: string,
        lastName: string
    }[],
}

export const PersonList = (props: NameListProps) => {
    return (
        <div>
            <h1>Person List</h1>
            <ul>
                {
                    props.names.map(name => {
                        return (
                            <li>{name.lastName} {name.lastName}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
