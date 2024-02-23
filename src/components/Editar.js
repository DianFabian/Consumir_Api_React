import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API, URL_IMAGES } from "../config/rutas";
import { useNavigate } from 'react-router-dom'; 


export function EditarUsuario(){
    const params=useParams();
    const [id, setId]=useState("");
    const [nombre, setNombre]=useState("");
    const [usuario, setUsuario]=useState("");
    const [password, setPassword]=useState("");
    const [foto, setFoto]=useState(null);
    const [rutaFoto, setRutaFoto]=useState("");
    const [passwordViejo, setPasswordViejo]=useState("");
    const [saltViejo, setSaltViejo]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        async function buscarPorID(){
            var res=await axios.get(URL_API + "/buscarUsuarioPorId/"+params.id);
            console.log(res);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setUsuario(res.data.usuario);
            setPasswordViejo(res.data.password);
            setSaltViejo(res.data.salt);
            setRutaFoto(URL_IMAGES + res.data.foto);
        }
        buscarPorID();
    },[params.id]);

   async function editarDatos(e){
        e.preventDefault();
        const formData=new FormData();
        formData.append("id",id);
        formData.append("nombre", nombre);
        formData.append("usuario", usuario);
        formData.append("password", password);
        formData.append("passwordViejo",passwordViejo);
        formData.append("saltViejo",saltViejo);
        formData.append("foto", foto);

        try{
            const res= await axios.post(URL_API + "/editarUsuario",formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
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
        catch(error){
            console.error("Error al guardar datos: ", error);
        }
        

    }
    return(
        <div className="container mt-5">
            <form onSubmit={editarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar usuario</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                        <input type="hidden" name="passwordViejo" id="passwordViejo" value={passwordViejo} readOnly />
                        <input type="hidden" name="saltViejo" id="saltViejo" value={saltViejo} readOnly />
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} autoFocus />
                        <input className="form-control mb-3" type="text" placeholder="Usuario" name="usuario" id="usuario" value={usuario} onChange={(e)=>{setUsuario(e.target.value)}} />
                        <input className="form-control mb-3" type="text" placeholder="Password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <div>
                            <img src={rutaFoto} width="100" alt="Foto de usuario" />
                        </div>
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
export function EditarProducto(){
    const params=useParams();
    const [id, setId]=useState("");
    const [nombre, setNombre]=useState("");
    const [precio, setPrecio]=useState("");
    const [foto, setFoto]=useState(null);
    const [rutaFoto, setRutaFoto]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        async function buscarPorID(){
            var res=await axios.get(URL_API + "/buscarProductoPorId/"+params.id);
            console.log(res);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setPrecio(res.data.precio);
            setRutaFoto(URL_IMAGES + res.data.foto);
        }
        buscarPorID();
    },[params.id]);

   async function editarDatos(e){
        e.preventDefault();
        const formData=new FormData();
        formData.append("id",id);
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("foto", foto);

        try{
            const res= await axios.post(URL_API + "/editarProductos",formData,{
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
    return(
        <div className="container mt-5">
            <form onSubmit={editarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                        <input type="hidden" name="precio" id="precio" value={precio} readOnly />
                        <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} autoFocus />
                        <input className="form-control mb-3" type="text" placeholder="Descripcion" name="descripcion" id="descripcion" value={precio} onChange={(e)=>{setPrecio(e.target.value)}} />
                        <div>
                            <img src={rutaFoto} width="100" alt="Foto de producto" />
                        </div>
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}