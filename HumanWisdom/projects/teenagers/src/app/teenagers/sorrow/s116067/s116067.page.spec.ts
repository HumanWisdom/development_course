import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116067Page } from './s116067.page';

describe('S116067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116067Page;
  let fixture: ComponentFixture<S116067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
