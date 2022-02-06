import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of as observableOf } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { Materiel } from 'src/app/domain/Materiel.model';

@Component({
  selector: 'app-materiel-list',
  templateUrl: './materiel-list.component.html',
  styleUrls: ['./materiel-list.component.css']
})
export class MaterielListComponent implements OnInit 
{
  
  materiels!:Materiel[];
  displayedColumns: string[] = ['désignation', 'quantité','lieu'];
  dataSource: MatTableDataSource<Materiel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor()
  {
    this.dataSource = new MatTableDataSource(this.materiels);

  }
  ngOnInit() 
  {
  }
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) 
    {
      this.dataSource.paginator.firstPage();
    }
  }
  onOpenAjouter()
  {

  }
  /** Builds and returns a new User. */
  /*createNewMateriel(isbn: number): Materiel 
  {
    return {

    };
  }*/
}

