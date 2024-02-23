import axios from "axios";
import { useState } from "react";
import { URL_API } from "../config/rutas";
import { useNavigate } from 'react-router-dom'; 


export function Nuevo() {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);
    const navigate = useNavigate();

    async function guardarDatos(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("usuario", usuario);
        formData.append("password", password);
        formData.append("foto", foto);

        try {
            const res = await axios.post(URL_API + "/nuevousuario", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(res);
            setNombre("");
            setUsuario("");
            setPassword("");
            setFoto(null);

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } 
        catch (error) {
            console.error("Error al guardar datos: ", error);
        }
    }
    return (
        <div className="container mt-5">
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} autoFocus />
                        <input className="form-control mb-3" type="text" placeholder="Usuario" name="usuario" id="usuario" value={usuario} onChange={(e)=>{setUsuario(e.target.value)}} />
                        <input className="form-control mb-3" type="text" placeholder="Password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export function NuevoProducto(){
    const [nombre, setNombre]=useState("");
    const [precio,setPrecio]=useState("");
    const [foto, setFoto]=useState(null);
    const navigate = useNavigate();

    async function guardarDatos(e){
        e.preventDefault();
        console.log(nombre);
        const formData=new FormData();
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("foto", foto);
        try{
            const res= await axios.post(URL_API + "/nuevoProductos",formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            });
            console.log(res);
            setNombre("");
            setPrecio("");
            setFoto(null);
            setTimeout(() => {
                navigate("/productos");
            }, 1000);
        }
        catch(error){
            console.error("Error al guardar datos: ", error);
        }
        
    }
    return (
        <div className="container mt-5">
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} autoFocus />
                        <input className="form-control mb-3" type="text" placeholder="Precio" name="precio" id="precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}} />
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
