import { useState } from "react"
import { getImageUrl } from "../../service/productService";



const CreateProductComponent = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        imgUrl: ''
    })
    const [image, setImage] = useState('');

    const copyProduct = { ...product };

    const handleChange = (e) => {
        copyProduct[e.target.name] = e.target.value;
        setProduct(copyProduct)
    }

    const addImage = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "my_shop");
        data.append("cloud_name", "drsg0huwp");
        getImageUrl(data)
    }

    return (
        <div className="container  createProduct">
            <div className="row d-flex align-items-center mt-5">
                <h1 className="mb-5">CREATE PRODUCT</h1>
                <div className=" col-6 offset-3">
                    <form >
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={handleChange} /><br />
                        <textarea name="description" className="form-control" placeholder="Description" onChange={handleChange}></textarea><br />
                        <input type="number" name="price" className="form-control" placeholder="Price" onChange={handleChange} /><br />
                        <select className="form-select" name="category" aria-label="Default select example" onChange={handleChange}>
                            <option value="" >Choose a category</option>
                            <option value="6401f0a8032f552ca5fb2b9f">One</option>
                            <option value="62b5a9c5b56631db50071ddb">Two</option>
                            <option value="62b464521253c8eb3742e51c">Three</option>
                        </select><br />
                        <input type="file" name="imgUrl" className="form-control" onChange={e => setImage(e.target.files[0])} /><br />
                        <div className="addImage d-flex align-items-center">
                            <div className="imageField border d-flex justify-content-center align-items-center">Image</div><br />
                            <button className="btn btn-warning " onClick={(e) => addImage(e)}>Add image</button>
                        </div><br />

                        <button className="btn btn-secondary form-control">ADD PRODUCT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProductComponent