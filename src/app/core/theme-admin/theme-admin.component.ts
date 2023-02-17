import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-theme-admin',
  templateUrl: './theme-admin.component.html',
  styleUrls: ['./theme-admin.component.scss']
})
export class ThemeAdminComponent implements OnInit {

  premio: number = 0;
  constructor(private peticion: PeticionesService) { }

  ngOnInit(): void {
    this.getPremio();
  }


  getPremio(){
    this.peticion.getPremio().subscribe((res: any)=>{
      this.premio=res[0].valor/2
    })
  }

}
