type GreetProps = {
 name: String
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>Welcome {props.name}! you have 10 unread messages</h1>
        </div>
    );
}
