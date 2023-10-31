import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45139Page } from './s45139.page';

describe('S45139Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45139Page;
  let fixture: ComponentFixture<S45139Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45139Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45139Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
