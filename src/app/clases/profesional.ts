import { Usuario } from './usuario';

export class Profesional extends Usuario {
    public especialidades: Array<any>;
	public horarios: Array<any>;

    constructor(nombre: string, apellido: string, nacimiento: number, dni:number , obraSocial:string , email: string, rol: string, imagenUno: string, imagenDos: string, habilitado: string, especialidades: Array<any>, horarios?: Array<any>, id?: string) {

		super(nombre, apellido, nacimiento, dni, obraSocial ,email, rol, imagenUno, imagenDos, habilitado, id);
		this.especialidades = especialidades;
		this.horarios = horarios;
	}
}
