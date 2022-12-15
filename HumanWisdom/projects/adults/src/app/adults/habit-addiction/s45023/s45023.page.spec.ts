import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45023Page } from './s45023.page';

describe('S45023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45023Page;
  let fixture: ComponentFixture<S45023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
