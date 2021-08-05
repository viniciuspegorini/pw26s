import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  private currentUser: any;
  private authorities: string[] = [];
  private logicalOp = 'OR';
  private isHidden = true;
  
  user$: Observable<any>;

  constructor(
    private loginService: LoginService,
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    loginService.isAuthenticated.asObservable().subscribe(e => {
      this.currentUser = JSON.parse(sessionStorage.getItem('user') || '{}');
      this.updateView();
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user') || '{}');    
    this.updateView();
  }

  @Input()
  set appHasRole(val: string[]) {
    this.authorities = val;
    this.updateView();
  }

  @Input()
  set hasRoleOp(permop: string) {
    this.logicalOp = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkRole()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkRole() {
    let hasRole = false;
    if (this.currentUser && this.currentUser.authorities) {
      for (const authority of this.authorities) {
        const permissionFound = this.currentUser.authorities.find(
          (x: any) => x.nome.toUpperCase() === authority.toUpperCase()
        );

        if (permissionFound) {
          hasRole = true;
          if (this.logicalOp === 'OR') {
            break;
          }
        } else {
          hasRole = false;
          if (this.logicalOp === 'AND') {
            break;
          }
        }
      }
    }

    return hasRole;
  }
}
