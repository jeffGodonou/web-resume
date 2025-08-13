export default function ArrowDown({to}) {
    return (
        <div className="flex justify-center mt-6">
            <a href={`#${to}`}>
                <div className="animate-bounce text-4xl cursor-pointer text-gray-500 hover:text-black">
                 ↓
                </div> 
            </a>
        </div>
    );
}