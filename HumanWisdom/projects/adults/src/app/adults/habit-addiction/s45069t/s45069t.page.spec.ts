import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45069tPage } from './s45069t.page';

describe('S45069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45069tPage;
  let fixture: ComponentFixture<S45069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
