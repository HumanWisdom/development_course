import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73081Page } from './s73081.page';

describe('S73081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73081Page;
  let fixture: ComponentFixture<S73081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
