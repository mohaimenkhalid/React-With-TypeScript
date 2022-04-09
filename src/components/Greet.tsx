type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>
                {props.isLoggedIn ? `Welcome ${props.name}! you have ${props.messageCount} unread messages` : 'welcome guest'}
            </h1>
        </div>
    );
}
