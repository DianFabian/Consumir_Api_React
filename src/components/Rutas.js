import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inicio, InicioProductos} from "./Inicio";
import {Error} from "./Error";
import { Nuevo, NuevoProducto } from "./Nuevo";
import { EditarProducto, EditarUsuario } from "./Editar";
import { BorrarProducto, BorrarUsuario } from "./Borrar";

export function Rutas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/productos" element={<InicioProductos/>}></Route>
                <Route path="/Nuevo" element={<Nuevo />}></Route>
                <Route path="/NuevoProducto" element={<NuevoProducto/>}></Route>
                <Route path="/EditarUsuario/:id" element={<EditarUsuario />}></Route>
                <Route path="/EditarProducto/:id" element={<EditarProducto/>}></Route>
                <Route path="/borrarProducto/:id" element={<BorrarProducto/>}></Route>
                <Route path="/borrarUsuario/:id" element={<BorrarUsuario />}></Route>
            </Routes>
        </BrowserRouter>
    );
}