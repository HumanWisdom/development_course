import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45100Page } from './s45100.page';

describe('S45100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45100Page;
  let fixture: ComponentFixture<S45100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
