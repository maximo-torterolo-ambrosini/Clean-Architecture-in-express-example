const mockHttpRequest = [
    {
        query: {
            name: 'John',
            names: 'Peter, Mary, Bob'
        },
        params: {
            country: 'en'
        }
    },
    {
        query: {},
        params: {
            country: 'fr'
        }
    }
]
export default mockHttpRequest
export { mockHttpRequest }
