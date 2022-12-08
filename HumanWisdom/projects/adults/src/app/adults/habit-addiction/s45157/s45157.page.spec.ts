import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45157Page } from './s45157.page';

describe('S45157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45157Page;
  let fixture: ComponentFixture<S45157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
