import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45105Page } from './s45105.page';

describe('S45105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45105Page;
  let fixture: ComponentFixture<S45105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
