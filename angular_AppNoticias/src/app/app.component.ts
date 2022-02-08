import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_AppNoticias';
  listNoticias: any[] = [];
  loading:boolean = false;

  constructor(private service:NoticiasService) {

  }

  buscarNoticias(parametros:any){
    this.loading = true;
    this.listNoticias = [];
    this.service.getNoticias(parametros).subscribe({
      next: (data) => {
        this.loading = false;
        this.listNoticias = data.articles;
      },
      error: (e) => {
        this.loading = false;
        console.log(e);
      }      
    });
    
    
  }
}
