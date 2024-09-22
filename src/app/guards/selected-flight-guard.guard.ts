import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedFlightGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let selectedFlight = localStorage.getItem('selectedFlight');
    //get selected flight from localStorage to

    if (selectedFlight) {
      return true;
    } else {
      return this.router.createUrlTree(['/results']); //redirect the user to resultts page if it's not found
    }
  }
}
