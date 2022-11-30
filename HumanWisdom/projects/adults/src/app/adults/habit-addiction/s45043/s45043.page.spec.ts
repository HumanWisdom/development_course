import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45043Page } from './s45043.page';

describe('S45043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45043Page;
  let fixture: ComponentFixture<S45043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
