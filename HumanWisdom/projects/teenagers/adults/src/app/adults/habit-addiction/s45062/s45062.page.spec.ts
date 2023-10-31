import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45062Page } from './s45062.page';

describe('S45062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45062Page;
  let fixture: ComponentFixture<S45062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
