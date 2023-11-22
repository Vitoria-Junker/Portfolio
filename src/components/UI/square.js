export default function Square (props) {
    return (
        <div className="w-5 h-5 bg-gray-200 flex justify-center items-center border border-violet-500">
            {props.children}
        </div>
    )
}