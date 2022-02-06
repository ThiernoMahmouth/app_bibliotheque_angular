import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { Livre } from 'src/app/domain/Livre.model';
import { PretAddComponent } from 'src/app/prets/pret-add/pret-add.component';
import { LivreOneComponent } from '../livre-one/livre-one.component';
import { LivresAjouterComponent } from '../livres-ajouter/livres-ajouter.component';
import { LivresSupprimerComponent } from '../livres-supprimer/livres-supprimer.component';
import { LivresService } from '../livres.service';

export interface Book 
{
  isbn: string;
  titre: string;
  auteur: string;
  nbre: string;
}

/** Constants used to fill up our data base. */
const Exemplaires: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const titres: string[] = 
[
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements  OnInit, AfterViewInit 
{
  livres:Livre[] | undefined;
  displayedColumns: string[] = ['isbn', 'titre', 'auteur', 'nbre'];
  dataSource: MatTableDataSource<Book>;

  /*
  exampleDatabase!: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _httpClient: HttpClient) 
  {
    // Create 100 books
    const books = Array.from({length: 100}, (_, k) => this.createNewBook(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(books);
  }

  ngOnInit() 
  {
    //this.dataSource = new MatTableDataSource<Book>();
  }

  ngAfterViewInit() 
  {
    /**** 
     this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
              this.sort.active, this.sort.direction, this.paginator.pageIndex)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent books from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        })
      ).subscribe(data => this.data = data);
      **/
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
  createNewBook(isbn: number): Book 
  {
    const titre = titres[Math.round(Math.random() * (titres.length - 1))] + ' ' +
      titres[Math.round(Math.random() * (titres.length - 1))].charAt(0) + '.';

    return {
      isbn: isbn.toString(),
      titre: titre,
      auteur: Math.round(Math.random() * 100).toString(),
      nbre: Exemplaires[Math.round(Math.random() * (Exemplaires.length - 1))]
    };
  }
}


  