function Card( {addressPropsData}) {
    return (
        

            addressPropsData.map((address) => (
                <div key={address.id} className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 m-4 w-[20rem] h-[20rem]">
                    <img src={`https://robohash.org/${address.id}?set=set5`} alt={address.name} className="w-24 h-24 rounded-full mb-4" />
                    <h2 className="text-xl font-semibold">{address.name}</h2>
                    <p className="text-gray-600">{address.email}</p>
                    <p className="text-gray-600">{address.phone}</p>
                    <p className="text-gray-600">{address.address.street}, {address.address.city}</p>
                </div>
            ))
        

    );
}
export default Card;