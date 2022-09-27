const App = () => {
    const [products, setProducts] = React.useState([])
    const [form, setForm] = React.useState({
        name:'',
        price:''
    })


    React.useEffect(() => {
        fetchProducts()
    },[])

    const fetchProducts = () => {
        fetch('/api/products').then((res) => res.json()).then(data => {
            setProducts(data)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.price){
            return
        }

        fetch('/api/products',{
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(form)
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }

    const updateForm = (event, field) => {
        if(field === 'name'){
            setForm({
                ...form,
                name:event.target.value
                // name: event.defaultValue
            })
        }else if(field === 'price'){
            setForm({
                ...form,
                price:event.target.value
                // price: event.defaultValue
            })
        }
    }


    return (
        <>
        <div className="card mb-3">
        <div className="card-header">
            Add a product
        </div>
        <div className="card-body">
            <form onClick={handleSubmit}>
                <input type="text" value={form.name} onChange={() => updateForm(event, 'name')} placeholder="Product name..." className="form-control mt-3" />
                <input type="text" value={form.price} onChange={() => updateForm(event, 'price')} placeholder="Product price" className="form-control mt-3" />
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </div>
        <ul className="list-group">
            {
                products.map((product) => {
                    return (
                        <li key={product.id} className="list-group-item d-flex justify-content-between align-item-center">
                            <div>
                                <strong>{product.name}: </strong>
                                ${product.price}
                            </div>
                            <button className = "btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </button>
                        </li>
                    )
                })
            }
            
        </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));