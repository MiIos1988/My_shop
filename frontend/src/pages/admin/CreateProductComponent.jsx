import { useState } from "react"
import { getImageUrl } from "../../service/productService";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";


const CreateProductComponent = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        imgUrl: ''
    })
    const [image, setImage] = useState('');
    const [productImage, setProductImage] = useState('');
    const dispatch = useDispatch();

    const copyProduct = { ...product };

    const handleChange = (e) => {
        copyProduct[e.target.name] = e.target.value;
        setProduct(copyProduct)
    }

    const addImage = (e) => {
        e.preventDefault();
        dispatch(toggleLoader(true))
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "my_shop");
        data.append("cloud_name", "drsg0huwp");
        // getImageUrl(data).then(res => console.log(res))
        // .catch(err => console.log(err))
        fetch("https://api.cloudinary.com/v1_1/drsg0huwp/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
        .then(res => {setProduct({...product,
        imgUrl: res.url})
        setProductImage(res.url);
        dispatch(toggleLoader(false))
        })
        .catch(err => console.log(err))
    }

    const createProduct = (e) => {
        e.preventDefault()
        console.log(product)
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
                            <div className="imageField border d-flex justify-content-center align-items-center">
                            {
                                    !productImage ? " Image" : <img src={productImage} />
                                }
                               </div><br />
                            <button className="btn btn-warning " onClick={(e) => addImage(e)}>Confirm image</button>
                        </div><br />

                        <button className="btn btn-secondary form-control" onClick={createProduct}>ADD PRODUCT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProductComponent