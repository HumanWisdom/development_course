import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45026Page } from './s45026.page';

describe('S45026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45026Page;
  let fixture: ComponentFixture<S45026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
