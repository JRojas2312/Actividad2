import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.servive.spec';
import { NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-template',
  standalone: true, // Usamos standalone
  imports: [FormsModule, HttpClientModule], // Importamos FormsModule localmente
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paisesServicio) => {
      this.paises = paisesServicio;
    });
  }
}
