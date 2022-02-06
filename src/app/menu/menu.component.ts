import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {

  mobileQuery!: MediaQueryList;

  @Input() sidenav: any;
  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

/*
  openChanger()
  {
    this.dialog.open(MatDialog,
      {
        width: '500px'
      })
  }
  deconnecter()
  {
    this.router.navigate(['/signin'])
  }
  afficherPrets()
  {
    this.router.navigate(['/prets'])
  }
  afficherLivres()
  {
    this.router.navigate(['/livres'])
  }
  afficherMateriels()
  {
    this.router.navigate(['/materiels'])
  }
*/
}