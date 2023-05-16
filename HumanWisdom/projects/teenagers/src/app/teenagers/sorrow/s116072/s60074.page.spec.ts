import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60074Page } from './s60074.page';

describe('S60074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60074Page;
  let fixture: ComponentFixture<S60074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
