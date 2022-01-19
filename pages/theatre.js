import Form from '../components/form'

const Theatre = () => {
    return (
        <div className="bg-seat-theatre relative">
            <div className="absolute z-10 top-12 left-24">
                <span className="text-white shadow-2xl text-8xl font-serif">My Theatre</span>
                <br/><br/>
                <span className="text-gray-300 shadow-lg text-2xl font-serif">— Book fast, Watch faster.</span>
            </div>
            <Form/>
        </div>
    );
}

export default Theatre;