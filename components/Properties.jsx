import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';

const Properties = ({ properties, total, page, pageSize }) => {
    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                <h1 className='text-2xl mb-4'>Browse Properties</h1>
                {properties.length === 0 ? (
                    <p>No properties found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property, index) => (
                            <PropertyCard property={property} key={index} />
                        ))}
                    </div>
                )}
                <Pagination page={page} pageSize={pageSize} totalItems={total} />
            </div>
        </section>
    );
};

export default Properties;
