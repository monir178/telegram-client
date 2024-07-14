
const Home = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <p className="text-gray-200 rounded-2xl px-4 text-sm  py-1  
            "
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }}
            >Select a chat to start messaging</p>
        </div>
    )
}

export default Home;