import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46054Page } from './s46054.page';

describe('S46054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46054Page;
  let fixture: ComponentFixture<S46054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
