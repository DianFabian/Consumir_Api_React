import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);
    useEffect(()=>{
        axios.get(URL_API + "/mostrarUsuarios")
        .then((response)=>{
            console.log(response);
            setDataUsuarios(response.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar del api "+err);
        });
    },[]);
    const listaUsuarios=dataUsuarios.map((usuario, id)=>{
        var editar="/EditarUsuario/"+usuario.id;
        var borrar="/BorrarUsuario/"+usuario.id;
        var foto= URL_IMAGES + usuario.foto;
        return(
            <tr key={id} className="align-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td><img src={foto} width="100px" alt="foto de usuario" /></td>
                <td>
                    <Link to={editar}>Editar</Link>
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
        </table>
    );
}

export function InicioProductos(){
    const [dataProductos, setDataProductos]=useState([]);
    useEffect(()=>{
        axios.get(URL_API + "/mostrarProductos")
        .then((response)=>{
            console.log(response);
            setDataProductos(response.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar del api "+err);
        });
    },[]);

    const listaProductos = dataProductos.map((producto)=>{
        var editar = "/editarProducto/" + producto.id;
        var borrar = "/borrarProducto/" + producto.id;
        var foto = URL_IMAGES + producto.foto;
        return(
            <tr className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td><img src={foto} alt="img" width="100px"/></td>
                <td>
                    <Link to = {editar}>Editar</Link>
                    <Link to = {borrar}>Borrar</Link>
                </td>

            </tr>
        );
    })

    return(
        <table className="table table-over">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    )
}