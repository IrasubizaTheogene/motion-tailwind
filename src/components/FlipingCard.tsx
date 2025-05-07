function FlipingCard() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="w-64 h-40 bg-white-500 rounded-lg shadow-lg-overflow-hidden">
                <div className="absolute inset-0 bg-white text-xl font-bold">Front Side</div>
                <div className="absolute inset-0 bg-blue-400 text-xl font-bold translate rotate-y-180">Front Side</div>
            </div>
        </div>
    )
}

export default FlipingCard