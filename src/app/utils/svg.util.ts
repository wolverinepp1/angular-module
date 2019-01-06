import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('hello', ds.bypassSecurityTrustResourceUrl('assets/svg/brand-shell.svg'));
  ir.addSvgIcon('password', ds.bypassSecurityTrustResourceUrl('assets/svg/ui-password.svg'));
};
