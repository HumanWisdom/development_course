import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45094Page } from './s45094.page';

describe('S45094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45094Page;
  let fixture: ComponentFixture<S45094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
