export default function User() {
    return (
        <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
                <div>
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="/profile.jpg"
                        alt=""
                    />
                </div>
                <div className="ml-3">
                    <p className="text-base font-medium text-white">Zakariae</p>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        View profile
                    </p>
                </div>
            </div>
        </a>
    );
}
